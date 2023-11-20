/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IERC20MintableBurnable.sol/IERC20MintableBurnable.json
 *
 * DO NOT EDIT MANUALLY
 */

import { Chain } from "viem";

import { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./IERC20BurnableMintable.abi";

export const IERC20_BURNABLE_MINTABLE_ABI = ABI_FILE.abi;

export class IERC20BurnableMintableClient extends PublicContractClient<
  typeof ABI_FILE.abi
> {
  static ABI = ABI_FILE.abi;
  static contractName = ABI_FILE.contractName;

  constructor(options: { chain: Chain; address: `0x${string}` }) {
    super({
      abi: IERC20_BURNABLE_MINTABLE_ABI,
      address: options.address,
      chain: options.chain,
    });
  }
}
