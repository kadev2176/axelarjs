/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/ITransmitInterchainToken.sol/ITransmitInterchainToken.json
 *
 * DO NOT EDIT MANUALLY
 */

import { Chain } from "viem";

import { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./ITransmitInterchainToken.abi";

export * from "./ITransmitInterchainToken.args";

export const ITRANSMIT_INTERCHAIN_TOKEN_ABI = ABI_FILE.abi;

export class ITransmitInterchainTokenClient extends PublicContractClient<
  typeof ABI_FILE.abi
> {
  static ABI = ABI_FILE.abi;
  static contractName = ABI_FILE.contractName;

  constructor(options: { chain: Chain; address: `0x${string}` }) {
    super({
      abi: ITRANSMIT_INTERCHAIN_TOKEN_ABI,
      address: options.address,
      chain: options.chain,
    });
  }
}
