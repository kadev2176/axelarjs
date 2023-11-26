/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/token-manager/TokenManagerMintBurnFrom.sol/TokenManagerMintBurnFrom.json
 *
 * DO NOT EDIT MANUALLY
 */

import { Chain } from "viem";

import { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./TokenManagerMintBurnFrom.abi";
import { createTokenManagerMintBurnFromReadClient } from "./TokenManagerMintBurnFrom.args";

const createReadClient = createTokenManagerMintBurnFromReadClient;

export * from "./TokenManagerMintBurnFrom.args";

export const TOKEN_MANAGER_MINT_BURN_FROM_ABI = ABI_FILE.abi;

export class TokenManagerMintBurnFromClient extends PublicContractClient<
  typeof ABI_FILE.abi
> {
  static ABI = ABI_FILE.abi;
  static contractName = ABI_FILE.contractName;

  public readonly reads: ReturnType<typeof createReadClient>;

  constructor(options: { chain: Chain; address: `0x${string}` }) {
    super({
      abi: TOKEN_MANAGER_MINT_BURN_FROM_ABI,
      address: options.address,
      chain: options.chain,
    });

    this.reads = createReadClient(this);
  }
}