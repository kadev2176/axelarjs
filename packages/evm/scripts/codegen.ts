#!/usr/bin/env zx
import { convertCase } from "@axelarjs/utils/case-conversion";
import { capitalize } from "@axelarjs/utils/string";

import prettier from "prettier";
import { $, argv, chalk, fs, glob, path, spinner } from "zx";

$.verbose = false;

const pascalToKebabCase = convertCase("PascalCase", "kebab-case");
const pascalToConstName = (contract = "") =>
  contract
    .replace(/([A-Z])/g, "_$1")
    .replace(/-/g, "_")
    .replace(/^_/, "")
    .toUpperCase()
    // handle ERC*, IERC* and Interface* names
    .replace(/^E_R_C/, "ERC")
    .replace(/^I_E_R_C/, "IERC")
    .replace(/^I_/, "I");

type ABIInputItem = {
  name: string;
  type: string;
};

type ABIItem = {
  name: string;
  type: string;
  inputs: {
    name: string;
    type: string;
  }[];
};

const getInputType = (input: ABIInputItem) => {
  switch (input.type) {
    // string types
    case "address":
    case "bytes32":
    case "bytes":
      return "`0x${string}`";
    case "string":
      return "string";
    // number types
    case "uint256":
      return "bigint";
    case "uint8":
      return "number";
    // boolean
    case "bool":
      return "boolean";
    // default
    default:
      return "any";
  }
};

/**
 * Extracts the contract formatted name and path from the folder name
 *
 * @param folderPath
 */
function extractContractNameAndPath(folderPath: string) {
  const pascalName = path.basename(folderPath).replace(/.sol$/, "");

  return {
    pascalName,
    kebabName: pascalToKebabCase(pascalName),
    abiPath: path.join(folderPath, `${pascalName}.json`),
  };
}

type NamingConvention = "pascal" | "kebab" | undefined;

type CodegenOptions = {
  excludePatterns?: string[];
  outputFolder?: string;
  flatten?: boolean;
  foldercase?: NamingConvention;
  filecase?: NamingConvention;
  index?: boolean;
  client?: string;
};

export type CodegenConfig = CodegenOptions & {
  /**
   * The folder where the contracts are located
   */
  contractsFolder: string;
};

async function codegenContract({
  abiPath = "",
  abiFileJson = "",
  pascalName = "",
  contractFolder = "",
  foldercase = "",
  filecase = "",
  index = false,
  client = "",
}) {
  const GENERATED_DISCLAIMER = `
    /* eslint-disable @typescript-eslint/no-explicit-any */
    /**
     * This file was generated by scripts/codegen.ts
     *
     * Original abi file:
     * - ${abiPath}
     *
     * DO NOT EDIT MANUALLY
     */
    `;

  const { abi, contractName } = JSON.parse(abiFileJson) as {
    abi: ABIItem[];
    contractName: string;
  };

  const abiJsonFile = `${JSON.stringify({ contractName, abi }, null, 2)}`;

  // only generate args file if there are functions with inputs
  const abiFns = abi.filter(
    (x) =>
      x.type === "function" &&
      x.inputs.length &&
      x.inputs.every((input) => input.name)
  );

  // replace ERC* with erc* and EIP* with eip* to avoid inconsistent casing
  const sanitizedPascalName = pascalName.replace(
    /^(ERC|EIP)([0-9]+)/,
    (_, p1, p2) => `${p1.toLowerCase()}${p2}`
  );
  const kebabtName = pascalToKebabCase(sanitizedPascalName);

  const fileName = filecase === "kebab" ? kebabtName : pascalName;
  const folderName = foldercase === "kebab" ? kebabtName : pascalName;

  const constantName = pascalToConstName(pascalName);

  const abiFile = `
    export default ${abiJsonFile} as const;
    `;

  const subPath = path.dirname(
    contractFolder.replace(config.contractsFolder, "")
  );

  const outputFolderPath = path.resolve(config.outputFolder ?? "");

  const outputPath = path.join(
    config.flatten ? outputFolderPath : path.join(outputFolderPath, subPath),
    folderName
  );

  // create base path folder
  await $`mkdir -p ${outputPath}`;

  const files = [
    {
      name: `${fileName}.abi.ts`,
      content: abiFile,
      parser: "babel-ts",
    },
  ];

  if (abiFns.length) {
    const toABIFnEncoder = ({ name, inputs }: ABIItem) => {
      const argNames = inputs.map(({ name = "" }) => name).join(", ");

      const argsType = inputs
        .map((input) => `${input.name}: ${getInputType(input)}`)
        .join("; ");

      const fnName = capitalize(name);
      const typeName = `${pascalName}${fnName}Args`;

      return `
        export type ${typeName} = {${argsType}}
        
        /**
         * Factory function for ${pascalName}.${name} function args
         */
        export const encode${pascalName}${fnName}Args = ({${argNames}}: ${typeName}) => [${argNames}] as const;
        
        /**
         * Encoder function for ${pascalName}.${name} function data
         */
        export const encode${pascalName}${fnName}Data = ({${argNames}}: ${typeName}): \`0x\${string}\` => encodeFunctionData({
          functionName: "${name}",
          abi: ABI_FILE.abi,
          args:[${argNames}]
        });`;
    };

    const argsFile = `
      import { encodeFunctionData } from "viem";
      
      import ABI_FILE from "./${fileName}.abi";
      
      ${abiFns.map(toABIFnEncoder).join("\n\n")}
        
      export const ${constantName}_ENCODERS = {
        ${abiFns
          .map(
            ({ name }) =>
              `"${name}": encode${pascalName}${capitalize(name)}Args`
          )
          .join(",\n")}
      }`;

    files.push({
      name: `${fileName}.args.ts`,
      content: argsFile,
      parser: "babel-ts",
    });
  }

  if (index) {
    const indexFile = `
      import { Chain } from "viem";

      import { PublicContractClient } from "${client}";
      import ABI_FILE from "./${fileName}.abi";
      
      ${abiFns.length ? `export * from "./${fileName}.args";` : ""}
      
      export const ${constantName}_ABI = ABI_FILE.abi;
      
      export class ${pascalName}Client extends PublicContractClient<
        typeof ABI_FILE.abi
      > {
        static ABI = ABI_FILE.abi;
        static contractName = ABI_FILE.contractName;
      
        constructor(options: { chain: Chain; address: \`0x\${string}\` }) {
          super({
            abi: ${constantName}_ABI,
            address: options.address,
            chain: options.chain,
          });
        }
      }`;

    files.push({
      name: `index.ts`,
      content: indexFile,
      parser: "babel-ts",
    });
  }

  // write files
  await Promise.all(
    files.map(async ({ name, content, parser }) =>
      fs.writeFile(
        path.join(outputPath, name),
        prettier.format(
          parser === "json" ? content : `${GENERATED_DISCLAIMER}\n\n${content}`,
          { parser }
        )
      )
    )
  );
}

async function codegen(config: CodegenConfig) {
  const ignored =
    config.excludePatterns?.flatMap((pattern) => [
      `${config.contractsFolder}/${pattern}/**`,
      `**/${pattern}/**`,
    ]) ?? [];

  const contractFolders = await glob(`${config.contractsFolder}/**/**.sol`, {
    onlyDirectories: true,
    ignore: ignored,
  });

  const promises = contractFolders.map(async (contractFolder) => {
    const { pascalName, abiPath } = extractContractNameAndPath(contractFolder);

    const { stdout: abiFileJson } = await $`cat ./${abiPath}`;

    if (!abiFileJson) {
      console.log(`ABI file not found: ${abiPath}`);
      return;
    }

    try {
      await codegenContract({
        abiFileJson,
        abiPath,
        contractFolder,
        pascalName,
        foldercase: config.foldercase,
        filecase: config.filecase,
        index: config.index,
        client: config.client,
      });
    } catch (error) {
      console.error(`Failed to process contract ${pascalName}`, error);
    }
  });

  await spinner("Generating contract ABIs", () => Promise.all(promises));

  const summary = `Done. Generated ${chalk.green(
    contractFolders.length
  )} typed contract ABIs! 🎉`;
  console.log(summary);
  process.exit(0);
}

const HELP_BLOCK = `
Usage: codegen [options]

Options:
  --src <src>         The folder where the contracts are located (required)
  --out <out>         The folder where the generated files will be written (required)
  --exclude <exclude> Comma separated list of glob patterns to exclude (optional, default: [])
  --flatten           Whether to flatten the output folder structure (optional, default: false)
  --filecase          The case of the generated file names (optional, default: pascal)
  --foldercase        The case of the generated folder names (optional, default: pascal)
  --index             Whether to generate index files (optional, default: false)
  --client            Path to the PublicClient module (optional, default: "@axelarjs/evm")
`;

function printMissingArgument(arg: string) {
  console.error(chalk.yellow(`Missing argument: ${chalk.red(arg)}`));
  console.log(HELP_BLOCK);
}

function validateArg(arg: string, type: string) {
  if (!argv[arg] || typeof argv[arg] !== type) {
    printMissingArgument(arg);
    process.exit(0);
  }
}

/**
 * parseConfig
 *
 * Parses the command line arguments
 * @returns {CodegenConfig}
 */
function parseConfig(): CodegenConfig {
  validateArg("src", "string");
  validateArg("out", "string");

  return {
    contractsFolder: String(argv["src"] ?? ""),
    outputFolder: String(argv["out"] ?? ""),
    excludePatterns: String(argv["exclude"] ?? "").split(","),
    foldercase: argv["foldercase"] as NamingConvention,
    filecase: argv["filecase"] as NamingConvention,
    index: Boolean(argv["index"] ?? false),
    client: String(argv["client"] ?? "@axelarjs/evm"),
    flatten: Boolean(argv["flatten"] ?? false),
  };
}

const config = parseConfig();

codegen(config).catch((err) => {
  console.error(err);
  process.exit(1);
});
