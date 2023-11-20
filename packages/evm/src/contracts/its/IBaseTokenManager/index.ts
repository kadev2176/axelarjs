/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IBaseTokenManager.sol/IBaseTokenManager.json
 *
 * DO NOT EDIT MANUALLY
 */

import { Chain } from "viem";

import { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./IBaseTokenManager.abi";
import { createIBaseTokenManagerReadClient } from "./IBaseTokenManager.args";

const createReadClient = createIBaseTokenManagerReadClient;

export * from "./IBaseTokenManager.args";

export const IBASE_TOKEN_MANAGER_ABI = ABI_FILE.abi;

export class IBaseTokenManagerClient extends PublicContractClient<
  typeof ABI_FILE.abi
> {
  static ABI = ABI_FILE.abi;
  static contractName = ABI_FILE.contractName;

  public readonly reads: ReturnType<typeof createReadClient>;

  constructor(options: { chain: Chain; address: `0x${string}` }) {
    super({
      abi: IBASE_TOKEN_MANAGER_ABI,
      address: options.address,
      chain: options.chain,
    });

    this.reads = createReadClient(this);
  }
}
