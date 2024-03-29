/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IERC20MintableBurnable.sol/IERC20MintableBurnable.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import ABI_FILE from "./IERC20MintableBurnable.abi";

export type IERC20MintableBurnableBurnArgs = {
  from: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IERC20MintableBurnable.burn function args
 */
export const encodeIERC20MintableBurnableBurnArgs = ({
  from,
  amount,
}: IERC20MintableBurnableBurnArgs) => [from, amount] as const;

/**
 * Encoder function for IERC20MintableBurnable.burn function data
 */
export const encodeIERC20MintableBurnableBurnData = ({
  from,
  amount,
}: IERC20MintableBurnableBurnArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "burn",
    abi: ABI_FILE.abi,
    args: [from, amount],
  });

export type IERC20MintableBurnableMintArgs = {
  to: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IERC20MintableBurnable.mint function args
 */
export const encodeIERC20MintableBurnableMintArgs = ({
  to,
  amount,
}: IERC20MintableBurnableMintArgs) => [to, amount] as const;

/**
 * Encoder function for IERC20MintableBurnable.mint function data
 */
export const encodeIERC20MintableBurnableMintData = ({
  to,
  amount,
}: IERC20MintableBurnableMintArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "mint",
    abi: ABI_FILE.abi,
    args: [to, amount],
  });

export const IERC20_MINTABLE_BURNABLE_ENCODERS = {
  burn: {
    args: encodeIERC20MintableBurnableBurnArgs,
    data: encodeIERC20MintableBurnableBurnData,
  },
  mint: {
    args: encodeIERC20MintableBurnableMintArgs,
    data: encodeIERC20MintableBurnableMintData,
  },
};
