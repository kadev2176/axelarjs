import { capitalize } from "@axelarjs/utils/string";

import type { ABIInputItem, ABIItem } from "./types";

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

export const INDEX_FILE = ({
  fileName = "",
  constantName = "",
  pascalName = "",
  clientPath = "",
  hasArgs = false,
  hasReadFns = false,
}) => `
  import { Chain } from "viem";

  import { PublicContractClient } from "${clientPath}";
  import ABI_FILE from "./${fileName}.abi";
  ${
    hasReadFns && hasArgs
      ? `import { create${pascalName}ReadClient } from "./${fileName}.args";`
      : ""
  }
  
  ${hasReadFns ? `const createReadClient = create${pascalName}ReadClient;` : ""}
  
  ${hasArgs ? `export * from "./${fileName}.args";` : ""}

  export const ${constantName}_ABI = ABI_FILE.abi;
  
  export class ${pascalName}Client extends PublicContractClient<
    typeof ABI_FILE.abi
  > {
    static ABI = ABI_FILE.abi;
    static contractName = ABI_FILE.contractName;

    ${
      hasReadFns
        ? `public readonly reads: ReturnType<typeof createReadClient>;`
        : ""
    }
  
    constructor(options: { chain: Chain; address: \`0x\${string}\` }) {
      super({
        abi: ${constantName}_ABI,
        address: options.address,
        chain: options.chain,
      });

      ${hasReadFns ? `this.reads = createReadClient(this);` : ""}
    }
  }`;

export const ARGS_FILE = ({
  pascalName = "",
  abiFns = [] as ABIItem[],
  readFns = [] as ABIItem[],
  fileName = "",
  constantName = "",
  clientPath = "",
}) => {
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

  const readsClient = readFns?.length
    ? `export function create${pascalName}ReadClient(
        publicClient: PublicContractClient<typeof ABI_FILE.abi>
      ) {
        return {
          ${readFns
            .map(
              ({ name }) =>
                `"${name}"(${name}Args: ${pascalName}${capitalize(name)}Args) {
                  const encoder = ${constantName}_ENCODERS["${name}"];
                  const encodedArgs = encoder.args(${name}Args);

                  return publicClient.read("${name}", { args: encodedArgs });
                }`
            )
            .join(",\n")}
        }
      }`
    : "";

  return `
    import { encodeFunctionData } from "viem";
    
    ${
      readFns.length > 0
        ? `import type { PublicContractClient } from "${
            clientPath.startsWith(".")
              ? "../../PublicContractClient"
              : "@axelarjs/evm"
          }";`
        : ""
    }
    import ABI_FILE from "./${fileName}.abi";

    ${abiFns.map(toABIFnEncoder).join("\n\n")}
      
    export const ${constantName}_ENCODERS = {
      ${abiFns
        .map(
          ({ name }) =>
            `"${name}": {
              args: encode${pascalName}${capitalize(name)}Args,
              data: encode${pascalName}${capitalize(name)}Data,
            }`
        )
        .join(",\n")}
    }
    
    ${readsClient}`;
};

export const GENERATED_DISCLAIMER = ({ abiPath = "" }) => `
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
