/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/token-manager/TokenManagerMintBurnFrom.sol/TokenManagerMintBurnFrom.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import ABI_FILE from "./TokenManagerMintBurnFrom.abi";

export type TokenManagerMintBurnFromAcceptOperatorshipArgs = {
  fromOperator: `0x${string}`;
};

/**
 * Factory function for TokenManagerMintBurnFrom.acceptOperatorship function args
 */
export const encodeTokenManagerMintBurnFromAcceptOperatorshipArgs = ({
  fromOperator,
}: TokenManagerMintBurnFromAcceptOperatorshipArgs) => [fromOperator] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.acceptOperatorship function data
 */
export const encodeTokenManagerMintBurnFromAcceptOperatorshipData = ({
  fromOperator,
}: TokenManagerMintBurnFromAcceptOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "acceptOperatorship",
    abi: ABI_FILE.abi,
    args: [fromOperator],
  });

export type TokenManagerMintBurnFromAddFlowLimiterArgs = {
  flowLimiter: `0x${string}`;
};

/**
 * Factory function for TokenManagerMintBurnFrom.addFlowLimiter function args
 */
export const encodeTokenManagerMintBurnFromAddFlowLimiterArgs = ({
  flowLimiter,
}: TokenManagerMintBurnFromAddFlowLimiterArgs) => [flowLimiter] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.addFlowLimiter function data
 */
export const encodeTokenManagerMintBurnFromAddFlowLimiterData = ({
  flowLimiter,
}: TokenManagerMintBurnFromAddFlowLimiterArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "addFlowLimiter",
    abi: ABI_FILE.abi,
    args: [flowLimiter],
  });

export type TokenManagerMintBurnFromCallContractWithInterchainTokenArgs = {
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  data: `0x${string}`;
};

/**
 * Factory function for TokenManagerMintBurnFrom.callContractWithInterchainToken function args
 */
export const encodeTokenManagerMintBurnFromCallContractWithInterchainTokenArgs =
  ({
    destinationChain,
    destinationAddress,
    amount,
    data,
  }: TokenManagerMintBurnFromCallContractWithInterchainTokenArgs) =>
    [destinationChain, destinationAddress, amount, data] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.callContractWithInterchainToken function data
 */
export const encodeTokenManagerMintBurnFromCallContractWithInterchainTokenData =
  ({
    destinationChain,
    destinationAddress,
    amount,
    data,
  }: TokenManagerMintBurnFromCallContractWithInterchainTokenArgs): `0x${string}` =>
    encodeFunctionData({
      functionName: "callContractWithInterchainToken",
      abi: ABI_FILE.abi,
      args: [destinationChain, destinationAddress, amount, data],
    });

export type TokenManagerMintBurnFromGiveTokenArgs = {
  destinationAddress: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for TokenManagerMintBurnFrom.giveToken function args
 */
export const encodeTokenManagerMintBurnFromGiveTokenArgs = ({
  destinationAddress,
  amount,
}: TokenManagerMintBurnFromGiveTokenArgs) =>
  [destinationAddress, amount] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.giveToken function data
 */
export const encodeTokenManagerMintBurnFromGiveTokenData = ({
  destinationAddress,
  amount,
}: TokenManagerMintBurnFromGiveTokenArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "giveToken",
    abi: ABI_FILE.abi,
    args: [destinationAddress, amount],
  });

export type TokenManagerMintBurnFromHasRoleArgs = {
  account: `0x${string}`;
  role: number;
};

/**
 * Factory function for TokenManagerMintBurnFrom.hasRole function args
 */
export const encodeTokenManagerMintBurnFromHasRoleArgs = ({
  account,
  role,
}: TokenManagerMintBurnFromHasRoleArgs) => [account, role] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.hasRole function data
 */
export const encodeTokenManagerMintBurnFromHasRoleData = ({
  account,
  role,
}: TokenManagerMintBurnFromHasRoleArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "hasRole",
    abi: ABI_FILE.abi,
    args: [account, role],
  });

export type TokenManagerMintBurnFromInterchainTransferArgs = {
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for TokenManagerMintBurnFrom.interchainTransfer function args
 */
export const encodeTokenManagerMintBurnFromInterchainTransferArgs = ({
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: TokenManagerMintBurnFromInterchainTransferArgs) =>
  [destinationChain, destinationAddress, amount, metadata] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.interchainTransfer function data
 */
export const encodeTokenManagerMintBurnFromInterchainTransferData = ({
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: TokenManagerMintBurnFromInterchainTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTransfer",
    abi: ABI_FILE.abi,
    args: [destinationChain, destinationAddress, amount, metadata],
  });

export type TokenManagerMintBurnFromIsOperatorArgs = { addr: `0x${string}` };

/**
 * Factory function for TokenManagerMintBurnFrom.isOperator function args
 */
export const encodeTokenManagerMintBurnFromIsOperatorArgs = ({
  addr,
}: TokenManagerMintBurnFromIsOperatorArgs) => [addr] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.isOperator function data
 */
export const encodeTokenManagerMintBurnFromIsOperatorData = ({
  addr,
}: TokenManagerMintBurnFromIsOperatorArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "isOperator",
    abi: ABI_FILE.abi,
    args: [addr],
  });

export type TokenManagerMintBurnFromParamsArgs = {
  operator_: `0x${string}`;
  tokenAddress_: `0x${string}`;
};

/**
 * Factory function for TokenManagerMintBurnFrom.params function args
 */
export const encodeTokenManagerMintBurnFromParamsArgs = ({
  operator_,
  tokenAddress_,
}: TokenManagerMintBurnFromParamsArgs) => [operator_, tokenAddress_] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.params function data
 */
export const encodeTokenManagerMintBurnFromParamsData = ({
  operator_,
  tokenAddress_,
}: TokenManagerMintBurnFromParamsArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "params",
    abi: ABI_FILE.abi,
    args: [operator_, tokenAddress_],
  });

export type TokenManagerMintBurnFromProposeOperatorshipArgs = {
  operator: `0x${string}`;
};

/**
 * Factory function for TokenManagerMintBurnFrom.proposeOperatorship function args
 */
export const encodeTokenManagerMintBurnFromProposeOperatorshipArgs = ({
  operator,
}: TokenManagerMintBurnFromProposeOperatorshipArgs) => [operator] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.proposeOperatorship function data
 */
export const encodeTokenManagerMintBurnFromProposeOperatorshipData = ({
  operator,
}: TokenManagerMintBurnFromProposeOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "proposeOperatorship",
    abi: ABI_FILE.abi,
    args: [operator],
  });

export type TokenManagerMintBurnFromRemoveFlowLimiterArgs = {
  flowLimiter: `0x${string}`;
};

/**
 * Factory function for TokenManagerMintBurnFrom.removeFlowLimiter function args
 */
export const encodeTokenManagerMintBurnFromRemoveFlowLimiterArgs = ({
  flowLimiter,
}: TokenManagerMintBurnFromRemoveFlowLimiterArgs) => [flowLimiter] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.removeFlowLimiter function data
 */
export const encodeTokenManagerMintBurnFromRemoveFlowLimiterData = ({
  flowLimiter,
}: TokenManagerMintBurnFromRemoveFlowLimiterArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "removeFlowLimiter",
    abi: ABI_FILE.abi,
    args: [flowLimiter],
  });

export type TokenManagerMintBurnFromSetFlowLimitArgs = { flowLimit_: bigint };

/**
 * Factory function for TokenManagerMintBurnFrom.setFlowLimit function args
 */
export const encodeTokenManagerMintBurnFromSetFlowLimitArgs = ({
  flowLimit_,
}: TokenManagerMintBurnFromSetFlowLimitArgs) => [flowLimit_] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.setFlowLimit function data
 */
export const encodeTokenManagerMintBurnFromSetFlowLimitData = ({
  flowLimit_,
}: TokenManagerMintBurnFromSetFlowLimitArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setFlowLimit",
    abi: ABI_FILE.abi,
    args: [flowLimit_],
  });

export type TokenManagerMintBurnFromSetupArgs = { params: `0x${string}` };

/**
 * Factory function for TokenManagerMintBurnFrom.setup function args
 */
export const encodeTokenManagerMintBurnFromSetupArgs = ({
  params,
}: TokenManagerMintBurnFromSetupArgs) => [params] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.setup function data
 */
export const encodeTokenManagerMintBurnFromSetupData = ({
  params,
}: TokenManagerMintBurnFromSetupArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setup",
    abi: ABI_FILE.abi,
    args: [params],
  });

export type TokenManagerMintBurnFromTakeTokenArgs = {
  sourceAddress: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for TokenManagerMintBurnFrom.takeToken function args
 */
export const encodeTokenManagerMintBurnFromTakeTokenArgs = ({
  sourceAddress,
  amount,
}: TokenManagerMintBurnFromTakeTokenArgs) => [sourceAddress, amount] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.takeToken function data
 */
export const encodeTokenManagerMintBurnFromTakeTokenData = ({
  sourceAddress,
  amount,
}: TokenManagerMintBurnFromTakeTokenArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "takeToken",
    abi: ABI_FILE.abi,
    args: [sourceAddress, amount],
  });

export type TokenManagerMintBurnFromTransferOperatorshipArgs = {
  operator: `0x${string}`;
};

/**
 * Factory function for TokenManagerMintBurnFrom.transferOperatorship function args
 */
export const encodeTokenManagerMintBurnFromTransferOperatorshipArgs = ({
  operator,
}: TokenManagerMintBurnFromTransferOperatorshipArgs) => [operator] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.transferOperatorship function data
 */
export const encodeTokenManagerMintBurnFromTransferOperatorshipData = ({
  operator,
}: TokenManagerMintBurnFromTransferOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferOperatorship",
    abi: ABI_FILE.abi,
    args: [operator],
  });

export type TokenManagerMintBurnFromTransmitInterchainTransferArgs = {
  sender: `0x${string}`;
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for TokenManagerMintBurnFrom.transmitInterchainTransfer function args
 */
export const encodeTokenManagerMintBurnFromTransmitInterchainTransferArgs = ({
  sender,
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: TokenManagerMintBurnFromTransmitInterchainTransferArgs) =>
  [sender, destinationChain, destinationAddress, amount, metadata] as const;

/**
 * Encoder function for TokenManagerMintBurnFrom.transmitInterchainTransfer function data
 */
export const encodeTokenManagerMintBurnFromTransmitInterchainTransferData = ({
  sender,
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: TokenManagerMintBurnFromTransmitInterchainTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transmitInterchainTransfer",
    abi: ABI_FILE.abi,
    args: [sender, destinationChain, destinationAddress, amount, metadata],
  });

export const TOKEN_MANAGER_MINT_BURN_FROM_ENCODERS = {
  acceptOperatorship: {
    args: encodeTokenManagerMintBurnFromAcceptOperatorshipArgs,
    data: encodeTokenManagerMintBurnFromAcceptOperatorshipData,
  },
  addFlowLimiter: {
    args: encodeTokenManagerMintBurnFromAddFlowLimiterArgs,
    data: encodeTokenManagerMintBurnFromAddFlowLimiterData,
  },
  callContractWithInterchainToken: {
    args: encodeTokenManagerMintBurnFromCallContractWithInterchainTokenArgs,
    data: encodeTokenManagerMintBurnFromCallContractWithInterchainTokenData,
  },
  giveToken: {
    args: encodeTokenManagerMintBurnFromGiveTokenArgs,
    data: encodeTokenManagerMintBurnFromGiveTokenData,
  },
  hasRole: {
    args: encodeTokenManagerMintBurnFromHasRoleArgs,
    data: encodeTokenManagerMintBurnFromHasRoleData,
  },
  interchainTransfer: {
    args: encodeTokenManagerMintBurnFromInterchainTransferArgs,
    data: encodeTokenManagerMintBurnFromInterchainTransferData,
  },
  isOperator: {
    args: encodeTokenManagerMintBurnFromIsOperatorArgs,
    data: encodeTokenManagerMintBurnFromIsOperatorData,
  },
  params: {
    args: encodeTokenManagerMintBurnFromParamsArgs,
    data: encodeTokenManagerMintBurnFromParamsData,
  },
  proposeOperatorship: {
    args: encodeTokenManagerMintBurnFromProposeOperatorshipArgs,
    data: encodeTokenManagerMintBurnFromProposeOperatorshipData,
  },
  removeFlowLimiter: {
    args: encodeTokenManagerMintBurnFromRemoveFlowLimiterArgs,
    data: encodeTokenManagerMintBurnFromRemoveFlowLimiterData,
  },
  setFlowLimit: {
    args: encodeTokenManagerMintBurnFromSetFlowLimitArgs,
    data: encodeTokenManagerMintBurnFromSetFlowLimitData,
  },
  setup: {
    args: encodeTokenManagerMintBurnFromSetupArgs,
    data: encodeTokenManagerMintBurnFromSetupData,
  },
  takeToken: {
    args: encodeTokenManagerMintBurnFromTakeTokenArgs,
    data: encodeTokenManagerMintBurnFromTakeTokenData,
  },
  transferOperatorship: {
    args: encodeTokenManagerMintBurnFromTransferOperatorshipArgs,
    data: encodeTokenManagerMintBurnFromTransferOperatorshipData,
  },
  transmitInterchainTransfer: {
    args: encodeTokenManagerMintBurnFromTransmitInterchainTransferArgs,
    data: encodeTokenManagerMintBurnFromTransmitInterchainTransferData,
  },
};
