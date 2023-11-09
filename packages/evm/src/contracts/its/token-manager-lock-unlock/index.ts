/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/token-manager/TokenManagerLockUnlock.sol/TokenManagerLockUnlock.json
 *
 * DO NOT EDIT MANUALLY
 */

import { Chain } from "viem";

import { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./token-manager-lock-unlock.abi";

export * from "./token-manager-lock-unlock.args";

export const TOKEN_MANAGER_LOCK_UNLOCK_ABI = ABI_FILE.abi;

export class TokenManagerLockUnlockClient extends PublicContractClient<
  typeof ABI_FILE.abi
> {
  static ABI = ABI_FILE.abi;
  static contractName = ABI_FILE.contractName;

  constructor(options: { chain: Chain; address: `0x${string}` }) {
    super({
      abi: TOKEN_MANAGER_LOCK_UNLOCK_ABI,
      address: options.address,
      chain: options.chain,
    });
  }
}
