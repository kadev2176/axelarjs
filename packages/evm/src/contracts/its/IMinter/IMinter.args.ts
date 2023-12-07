/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IMinter.sol/IMinter.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import type { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./IMinter.abi";

export type IMinterAcceptMintershipArgs = { fromMinter: `0x${string}` };

/**
 * Factory function for IMinter.acceptMintership function args
 */
export const encodeIMinterAcceptMintershipArgs = ({
  fromMinter,
}: IMinterAcceptMintershipArgs) => [fromMinter] as const;

/**
 * Encoder function for IMinter.acceptMintership function data
 */
export const encodeIMinterAcceptMintershipData = ({
  fromMinter,
}: IMinterAcceptMintershipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "acceptMintership",
    abi: ABI_FILE.abi,
    args: [fromMinter],
  });

export type IMinterHasRoleArgs = { account: `0x${string}`; role: number };

/**
 * Factory function for IMinter.hasRole function args
 */
export const encodeIMinterHasRoleArgs = ({
  account,
  role,
}: IMinterHasRoleArgs) => [account, role] as const;

/**
 * Encoder function for IMinter.hasRole function data
 */
export const encodeIMinterHasRoleData = ({
  account,
  role,
}: IMinterHasRoleArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "hasRole",
    abi: ABI_FILE.abi,
    args: [account, role],
  });

export type IMinterIsMinterArgs = { addr: `0x${string}` };

/**
 * Factory function for IMinter.isMinter function args
 */
export const encodeIMinterIsMinterArgs = ({ addr }: IMinterIsMinterArgs) =>
  [addr] as const;

/**
 * Encoder function for IMinter.isMinter function data
 */
export const encodeIMinterIsMinterData = ({
  addr,
}: IMinterIsMinterArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "isMinter",
    abi: ABI_FILE.abi,
    args: [addr],
  });

export type IMinterProposeMintershipArgs = { minter_: `0x${string}` };

/**
 * Factory function for IMinter.proposeMintership function args
 */
export const encodeIMinterProposeMintershipArgs = ({
  minter_,
}: IMinterProposeMintershipArgs) => [minter_] as const;

/**
 * Encoder function for IMinter.proposeMintership function data
 */
export const encodeIMinterProposeMintershipData = ({
  minter_,
}: IMinterProposeMintershipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "proposeMintership",
    abi: ABI_FILE.abi,
    args: [minter_],
  });

export type IMinterTransferMintershipArgs = { minter_: `0x${string}` };

/**
 * Factory function for IMinter.transferMintership function args
 */
export const encodeIMinterTransferMintershipArgs = ({
  minter_,
}: IMinterTransferMintershipArgs) => [minter_] as const;

/**
 * Encoder function for IMinter.transferMintership function data
 */
export const encodeIMinterTransferMintershipData = ({
  minter_,
}: IMinterTransferMintershipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferMintership",
    abi: ABI_FILE.abi,
    args: [minter_],
  });

export const IMINTER_ENCODERS = {
  acceptMintership: {
    args: encodeIMinterAcceptMintershipArgs,
    data: encodeIMinterAcceptMintershipData,
  },
  hasRole: {
    args: encodeIMinterHasRoleArgs,
    data: encodeIMinterHasRoleData,
  },
  isMinter: {
    args: encodeIMinterIsMinterArgs,
    data: encodeIMinterIsMinterData,
  },
  proposeMintership: {
    args: encodeIMinterProposeMintershipArgs,
    data: encodeIMinterProposeMintershipData,
  },
  transferMintership: {
    args: encodeIMinterTransferMintershipArgs,
    data: encodeIMinterTransferMintershipData,
  },
};

export function createIMinterReadClient(
  publicClient: PublicContractClient<typeof ABI_FILE.abi>
) {
  return {
    hasRole(hasRoleArgs: IMinterHasRoleArgs) {
      const encoder = IMINTER_ENCODERS["hasRole"];
      const encodedArgs = encoder.args(hasRoleArgs);

      return publicClient.read("hasRole", { args: encodedArgs });
    },
    isMinter(isMinterArgs: IMinterIsMinterArgs) {
      const encoder = IMINTER_ENCODERS["isMinter"];
      const encodedArgs = encoder.args(isMinterArgs);

      return publicClient.read("isMinter", { args: encodedArgs });
    },
  };
}
