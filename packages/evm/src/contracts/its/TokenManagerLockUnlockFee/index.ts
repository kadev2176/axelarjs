/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/token-manager/TokenManagerLockUnlockFee.sol/TokenManagerLockUnlockFee.json
 *
 * DO NOT EDIT MANUALLY
 */

import { Chain } from "viem";

import { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./TokenManagerLockUnlockFee.abi";
import { createTokenManagerLockUnlockFeeReadClient } from "./TokenManagerLockUnlockFee.args";

const createReadClient = createTokenManagerLockUnlockFeeReadClient;

export * from "./TokenManagerLockUnlockFee.args";

export const TOKEN_MANAGER_LOCK_UNLOCK_FEE_ABI = ABI_FILE.abi;

export class TokenManagerLockUnlockFeeClient extends PublicContractClient<
  typeof ABI_FILE.abi
> {
  static ABI = ABI_FILE.abi;
  static contractName = ABI_FILE.contractName;

  public readonly reads: ReturnType<typeof createReadClient>;

  constructor(options: { chain: Chain; address: `0x${string}` }) {
    super({
      abi: TOKEN_MANAGER_LOCK_UNLOCK_FEE_ABI,
      address: options.address,
      chain: options.chain,
    });

    this.reads = createReadClient(this);
  }
}
