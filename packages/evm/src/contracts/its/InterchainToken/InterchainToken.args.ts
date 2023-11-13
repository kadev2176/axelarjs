/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interchain-token/InterchainToken.sol/InterchainToken.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import type { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./InterchainToken.abi";

export type InterchainTokenAcceptDistributorshipArgs = {
  fromDistributor: `0x${string}`;
};

/**
 * Factory function for InterchainToken.acceptDistributorship function args
 */
export const encodeInterchainTokenAcceptDistributorshipArgs = ({
  fromDistributor,
}: InterchainTokenAcceptDistributorshipArgs) => [fromDistributor] as const;

/**
 * Encoder function for InterchainToken.acceptDistributorship function data
 */
export const encodeInterchainTokenAcceptDistributorshipData = ({
  fromDistributor,
}: InterchainTokenAcceptDistributorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "acceptDistributorship",
    abi: ABI_FILE.abi,
    args: [fromDistributor],
  });

export type InterchainTokenApproveArgs = {
  spender: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for InterchainToken.approve function args
 */
export const encodeInterchainTokenApproveArgs = ({
  spender,
  amount,
}: InterchainTokenApproveArgs) => [spender, amount] as const;

/**
 * Encoder function for InterchainToken.approve function data
 */
export const encodeInterchainTokenApproveData = ({
  spender,
  amount,
}: InterchainTokenApproveArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "approve",
    abi: ABI_FILE.abi,
    args: [spender, amount],
  });

export type InterchainTokenBurnArgs = {
  account: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for InterchainToken.burn function args
 */
export const encodeInterchainTokenBurnArgs = ({
  account,
  amount,
}: InterchainTokenBurnArgs) => [account, amount] as const;

/**
 * Encoder function for InterchainToken.burn function data
 */
export const encodeInterchainTokenBurnData = ({
  account,
  amount,
}: InterchainTokenBurnArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "burn",
    abi: ABI_FILE.abi,
    args: [account, amount],
  });

export type InterchainTokenDecreaseAllowanceArgs = {
  spender: `0x${string}`;
  subtractedValue: bigint;
};

/**
 * Factory function for InterchainToken.decreaseAllowance function args
 */
export const encodeInterchainTokenDecreaseAllowanceArgs = ({
  spender,
  subtractedValue,
}: InterchainTokenDecreaseAllowanceArgs) => [spender, subtractedValue] as const;

/**
 * Encoder function for InterchainToken.decreaseAllowance function data
 */
export const encodeInterchainTokenDecreaseAllowanceData = ({
  spender,
  subtractedValue,
}: InterchainTokenDecreaseAllowanceArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "decreaseAllowance",
    abi: ABI_FILE.abi,
    args: [spender, subtractedValue],
  });

export type InterchainTokenHasRoleArgs = {
  account: `0x${string}`;
  role: number;
};

/**
 * Factory function for InterchainToken.hasRole function args
 */
export const encodeInterchainTokenHasRoleArgs = ({
  account,
  role,
}: InterchainTokenHasRoleArgs) => [account, role] as const;

/**
 * Encoder function for InterchainToken.hasRole function data
 */
export const encodeInterchainTokenHasRoleData = ({
  account,
  role,
}: InterchainTokenHasRoleArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "hasRole",
    abi: ABI_FILE.abi,
    args: [account, role],
  });

export type InterchainTokenIncreaseAllowanceArgs = {
  spender: `0x${string}`;
  addedValue: bigint;
};

/**
 * Factory function for InterchainToken.increaseAllowance function args
 */
export const encodeInterchainTokenIncreaseAllowanceArgs = ({
  spender,
  addedValue,
}: InterchainTokenIncreaseAllowanceArgs) => [spender, addedValue] as const;

/**
 * Encoder function for InterchainToken.increaseAllowance function data
 */
export const encodeInterchainTokenIncreaseAllowanceData = ({
  spender,
  addedValue,
}: InterchainTokenIncreaseAllowanceArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "increaseAllowance",
    abi: ABI_FILE.abi,
    args: [spender, addedValue],
  });

export type InterchainTokenInterchainTransferArgs = {
  destinationChain: string;
  recipient: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for InterchainToken.interchainTransfer function args
 */
export const encodeInterchainTokenInterchainTransferArgs = ({
  destinationChain,
  recipient,
  amount,
  metadata,
}: InterchainTokenInterchainTransferArgs) =>
  [destinationChain, recipient, amount, metadata] as const;

/**
 * Encoder function for InterchainToken.interchainTransfer function data
 */
export const encodeInterchainTokenInterchainTransferData = ({
  destinationChain,
  recipient,
  amount,
  metadata,
}: InterchainTokenInterchainTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTransfer",
    abi: ABI_FILE.abi,
    args: [destinationChain, recipient, amount, metadata],
  });

export type InterchainTokenInterchainTransferFromArgs = {
  sender: `0x${string}`;
  destinationChain: string;
  recipient: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for InterchainToken.interchainTransferFrom function args
 */
export const encodeInterchainTokenInterchainTransferFromArgs = ({
  sender,
  destinationChain,
  recipient,
  amount,
  metadata,
}: InterchainTokenInterchainTransferFromArgs) =>
  [sender, destinationChain, recipient, amount, metadata] as const;

/**
 * Encoder function for InterchainToken.interchainTransferFrom function data
 */
export const encodeInterchainTokenInterchainTransferFromData = ({
  sender,
  destinationChain,
  recipient,
  amount,
  metadata,
}: InterchainTokenInterchainTransferFromArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTransferFrom",
    abi: ABI_FILE.abi,
    args: [sender, destinationChain, recipient, amount, metadata],
  });

export type InterchainTokenIsDistributorArgs = { addr: `0x${string}` };

/**
 * Factory function for InterchainToken.isDistributor function args
 */
export const encodeInterchainTokenIsDistributorArgs = ({
  addr,
}: InterchainTokenIsDistributorArgs) => [addr] as const;

/**
 * Encoder function for InterchainToken.isDistributor function data
 */
export const encodeInterchainTokenIsDistributorData = ({
  addr,
}: InterchainTokenIsDistributorArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "isDistributor",
    abi: ABI_FILE.abi,
    args: [addr],
  });

export type InterchainTokenMintArgs = {
  account: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for InterchainToken.mint function args
 */
export const encodeInterchainTokenMintArgs = ({
  account,
  amount,
}: InterchainTokenMintArgs) => [account, amount] as const;

/**
 * Encoder function for InterchainToken.mint function data
 */
export const encodeInterchainTokenMintData = ({
  account,
  amount,
}: InterchainTokenMintArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "mint",
    abi: ABI_FILE.abi,
    args: [account, amount],
  });

export type InterchainTokenPermitArgs = {
  issuer: `0x${string}`;
  spender: `0x${string}`;
  value: bigint;
  deadline: bigint;
  v: number;
  r: `0x${string}`;
  s: `0x${string}`;
};

/**
 * Factory function for InterchainToken.permit function args
 */
export const encodeInterchainTokenPermitArgs = ({
  issuer,
  spender,
  value,
  deadline,
  v,
  r,
  s,
}: InterchainTokenPermitArgs) =>
  [issuer, spender, value, deadline, v, r, s] as const;

/**
 * Encoder function for InterchainToken.permit function data
 */
export const encodeInterchainTokenPermitData = ({
  issuer,
  spender,
  value,
  deadline,
  v,
  r,
  s,
}: InterchainTokenPermitArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "permit",
    abi: ABI_FILE.abi,
    args: [issuer, spender, value, deadline, v, r, s],
  });

export type InterchainTokenProposeDistributorshipArgs = {
  distributor_: `0x${string}`;
};

/**
 * Factory function for InterchainToken.proposeDistributorship function args
 */
export const encodeInterchainTokenProposeDistributorshipArgs = ({
  distributor_,
}: InterchainTokenProposeDistributorshipArgs) => [distributor_] as const;

/**
 * Encoder function for InterchainToken.proposeDistributorship function data
 */
export const encodeInterchainTokenProposeDistributorshipData = ({
  distributor_,
}: InterchainTokenProposeDistributorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "proposeDistributorship",
    abi: ABI_FILE.abi,
    args: [distributor_],
  });

export type InterchainTokenSetupArgs = { params: `0x${string}` };

/**
 * Factory function for InterchainToken.setup function args
 */
export const encodeInterchainTokenSetupArgs = ({
  params,
}: InterchainTokenSetupArgs) => [params] as const;

/**
 * Encoder function for InterchainToken.setup function data
 */
export const encodeInterchainTokenSetupData = ({
  params,
}: InterchainTokenSetupArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setup",
    abi: ABI_FILE.abi,
    args: [params],
  });

export type InterchainTokenTransferArgs = {
  recipient: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for InterchainToken.transfer function args
 */
export const encodeInterchainTokenTransferArgs = ({
  recipient,
  amount,
}: InterchainTokenTransferArgs) => [recipient, amount] as const;

/**
 * Encoder function for InterchainToken.transfer function data
 */
export const encodeInterchainTokenTransferData = ({
  recipient,
  amount,
}: InterchainTokenTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transfer",
    abi: ABI_FILE.abi,
    args: [recipient, amount],
  });

export type InterchainTokenTransferDistributorshipArgs = {
  distributor_: `0x${string}`;
};

/**
 * Factory function for InterchainToken.transferDistributorship function args
 */
export const encodeInterchainTokenTransferDistributorshipArgs = ({
  distributor_,
}: InterchainTokenTransferDistributorshipArgs) => [distributor_] as const;

/**
 * Encoder function for InterchainToken.transferDistributorship function data
 */
export const encodeInterchainTokenTransferDistributorshipData = ({
  distributor_,
}: InterchainTokenTransferDistributorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferDistributorship",
    abi: ABI_FILE.abi,
    args: [distributor_],
  });

export type InterchainTokenTransferFromArgs = {
  sender: `0x${string}`;
  recipient: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for InterchainToken.transferFrom function args
 */
export const encodeInterchainTokenTransferFromArgs = ({
  sender,
  recipient,
  amount,
}: InterchainTokenTransferFromArgs) => [sender, recipient, amount] as const;

/**
 * Encoder function for InterchainToken.transferFrom function data
 */
export const encodeInterchainTokenTransferFromData = ({
  sender,
  recipient,
  amount,
}: InterchainTokenTransferFromArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferFrom",
    abi: ABI_FILE.abi,
    args: [sender, recipient, amount],
  });

export const INTERCHAIN_TOKEN_ENCODERS = {
  acceptDistributorship: {
    args: encodeInterchainTokenAcceptDistributorshipArgs,
    data: encodeInterchainTokenAcceptDistributorshipData,
  },
  approve: {
    args: encodeInterchainTokenApproveArgs,
    data: encodeInterchainTokenApproveData,
  },
  burn: {
    args: encodeInterchainTokenBurnArgs,
    data: encodeInterchainTokenBurnData,
  },
  decreaseAllowance: {
    args: encodeInterchainTokenDecreaseAllowanceArgs,
    data: encodeInterchainTokenDecreaseAllowanceData,
  },
  hasRole: {
    args: encodeInterchainTokenHasRoleArgs,
    data: encodeInterchainTokenHasRoleData,
  },
  increaseAllowance: {
    args: encodeInterchainTokenIncreaseAllowanceArgs,
    data: encodeInterchainTokenIncreaseAllowanceData,
  },
  interchainTransfer: {
    args: encodeInterchainTokenInterchainTransferArgs,
    data: encodeInterchainTokenInterchainTransferData,
  },
  interchainTransferFrom: {
    args: encodeInterchainTokenInterchainTransferFromArgs,
    data: encodeInterchainTokenInterchainTransferFromData,
  },
  isDistributor: {
    args: encodeInterchainTokenIsDistributorArgs,
    data: encodeInterchainTokenIsDistributorData,
  },
  mint: {
    args: encodeInterchainTokenMintArgs,
    data: encodeInterchainTokenMintData,
  },
  permit: {
    args: encodeInterchainTokenPermitArgs,
    data: encodeInterchainTokenPermitData,
  },
  proposeDistributorship: {
    args: encodeInterchainTokenProposeDistributorshipArgs,
    data: encodeInterchainTokenProposeDistributorshipData,
  },
  setup: {
    args: encodeInterchainTokenSetupArgs,
    data: encodeInterchainTokenSetupData,
  },
  transfer: {
    args: encodeInterchainTokenTransferArgs,
    data: encodeInterchainTokenTransferData,
  },
  transferDistributorship: {
    args: encodeInterchainTokenTransferDistributorshipArgs,
    data: encodeInterchainTokenTransferDistributorshipData,
  },
  transferFrom: {
    args: encodeInterchainTokenTransferFromArgs,
    data: encodeInterchainTokenTransferFromData,
  },
};

export function createInterchainTokenReadClient(
  publicClient: PublicContractClient<typeof ABI_FILE.abi>
) {
  return {
    hasRole(hasRoleArgs: InterchainTokenHasRoleArgs) {
      const encoder = INTERCHAIN_TOKEN_ENCODERS["hasRole"];
      const encodedArgs = encoder.args(hasRoleArgs);

      return publicClient.read("hasRole", { args: encodedArgs });
    },
    isDistributor(isDistributorArgs: InterchainTokenIsDistributorArgs) {
      const encoder = INTERCHAIN_TOKEN_ENCODERS["isDistributor"];
      const encodedArgs = encoder.args(isDistributorArgs);

      return publicClient.read("isDistributor", { args: encodedArgs });
    },
  };
}
