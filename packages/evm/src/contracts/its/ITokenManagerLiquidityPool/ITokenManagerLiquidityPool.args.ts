/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/ITokenManagerLiquidityPool.sol/ITokenManagerLiquidityPool.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import type { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./ITokenManagerLiquidityPool.abi";

export type ITokenManagerLiquidityPoolAcceptOperatorshipArgs = {
  fromOperator: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLiquidityPool.acceptOperatorship function args
 */
export const encodeITokenManagerLiquidityPoolAcceptOperatorshipArgs = ({
  fromOperator,
}: ITokenManagerLiquidityPoolAcceptOperatorshipArgs) => [fromOperator] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.acceptOperatorship function data
 */
export const encodeITokenManagerLiquidityPoolAcceptOperatorshipData = ({
  fromOperator,
}: ITokenManagerLiquidityPoolAcceptOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "acceptOperatorship",
    abi: ABI_FILE.abi,
    args: [fromOperator],
  });

export type ITokenManagerLiquidityPoolAddFlowLimiterArgs = {
  flowLimiter: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLiquidityPool.addFlowLimiter function args
 */
export const encodeITokenManagerLiquidityPoolAddFlowLimiterArgs = ({
  flowLimiter,
}: ITokenManagerLiquidityPoolAddFlowLimiterArgs) => [flowLimiter] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.addFlowLimiter function data
 */
export const encodeITokenManagerLiquidityPoolAddFlowLimiterData = ({
  flowLimiter,
}: ITokenManagerLiquidityPoolAddFlowLimiterArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "addFlowLimiter",
    abi: ABI_FILE.abi,
    args: [flowLimiter],
  });

export type ITokenManagerLiquidityPoolCallContractWithInterchainTokenArgs = {
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  data: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLiquidityPool.callContractWithInterchainToken function args
 */
export const encodeITokenManagerLiquidityPoolCallContractWithInterchainTokenArgs =
  ({
    destinationChain,
    destinationAddress,
    amount,
    data,
  }: ITokenManagerLiquidityPoolCallContractWithInterchainTokenArgs) =>
    [destinationChain, destinationAddress, amount, data] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.callContractWithInterchainToken function data
 */
export const encodeITokenManagerLiquidityPoolCallContractWithInterchainTokenData =
  ({
    destinationChain,
    destinationAddress,
    amount,
    data,
  }: ITokenManagerLiquidityPoolCallContractWithInterchainTokenArgs): `0x${string}` =>
    encodeFunctionData({
      functionName: "callContractWithInterchainToken",
      abi: ABI_FILE.abi,
      args: [destinationChain, destinationAddress, amount, data],
    });

export type ITokenManagerLiquidityPoolGiveTokenArgs = {
  destinationAddress: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for ITokenManagerLiquidityPool.giveToken function args
 */
export const encodeITokenManagerLiquidityPoolGiveTokenArgs = ({
  destinationAddress,
  amount,
}: ITokenManagerLiquidityPoolGiveTokenArgs) =>
  [destinationAddress, amount] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.giveToken function data
 */
export const encodeITokenManagerLiquidityPoolGiveTokenData = ({
  destinationAddress,
  amount,
}: ITokenManagerLiquidityPoolGiveTokenArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "giveToken",
    abi: ABI_FILE.abi,
    args: [destinationAddress, amount],
  });

export type ITokenManagerLiquidityPoolHasRoleArgs = {
  account: `0x${string}`;
  role: number;
};

/**
 * Factory function for ITokenManagerLiquidityPool.hasRole function args
 */
export const encodeITokenManagerLiquidityPoolHasRoleArgs = ({
  account,
  role,
}: ITokenManagerLiquidityPoolHasRoleArgs) => [account, role] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.hasRole function data
 */
export const encodeITokenManagerLiquidityPoolHasRoleData = ({
  account,
  role,
}: ITokenManagerLiquidityPoolHasRoleArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "hasRole",
    abi: ABI_FILE.abi,
    args: [account, role],
  });

export type ITokenManagerLiquidityPoolInterchainTransferArgs = {
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLiquidityPool.interchainTransfer function args
 */
export const encodeITokenManagerLiquidityPoolInterchainTransferArgs = ({
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: ITokenManagerLiquidityPoolInterchainTransferArgs) =>
  [destinationChain, destinationAddress, amount, metadata] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.interchainTransfer function data
 */
export const encodeITokenManagerLiquidityPoolInterchainTransferData = ({
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: ITokenManagerLiquidityPoolInterchainTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTransfer",
    abi: ABI_FILE.abi,
    args: [destinationChain, destinationAddress, amount, metadata],
  });

export type ITokenManagerLiquidityPoolIsOperatorArgs = { addr: `0x${string}` };

/**
 * Factory function for ITokenManagerLiquidityPool.isOperator function args
 */
export const encodeITokenManagerLiquidityPoolIsOperatorArgs = ({
  addr,
}: ITokenManagerLiquidityPoolIsOperatorArgs) => [addr] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.isOperator function data
 */
export const encodeITokenManagerLiquidityPoolIsOperatorData = ({
  addr,
}: ITokenManagerLiquidityPoolIsOperatorArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "isOperator",
    abi: ABI_FILE.abi,
    args: [addr],
  });

export type ITokenManagerLiquidityPoolParamsArgs = {
  operator_: `0x${string}`;
  tokenAddress_: `0x${string}`;
  liquidityPool_: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLiquidityPool.params function args
 */
export const encodeITokenManagerLiquidityPoolParamsArgs = ({
  operator_,
  tokenAddress_,
  liquidityPool_,
}: ITokenManagerLiquidityPoolParamsArgs) =>
  [operator_, tokenAddress_, liquidityPool_] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.params function data
 */
export const encodeITokenManagerLiquidityPoolParamsData = ({
  operator_,
  tokenAddress_,
  liquidityPool_,
}: ITokenManagerLiquidityPoolParamsArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "params",
    abi: ABI_FILE.abi,
    args: [operator_, tokenAddress_, liquidityPool_],
  });

export type ITokenManagerLiquidityPoolProposeOperatorshipArgs = {
  operator_: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLiquidityPool.proposeOperatorship function args
 */
export const encodeITokenManagerLiquidityPoolProposeOperatorshipArgs = ({
  operator_,
}: ITokenManagerLiquidityPoolProposeOperatorshipArgs) => [operator_] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.proposeOperatorship function data
 */
export const encodeITokenManagerLiquidityPoolProposeOperatorshipData = ({
  operator_,
}: ITokenManagerLiquidityPoolProposeOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "proposeOperatorship",
    abi: ABI_FILE.abi,
    args: [operator_],
  });

export type ITokenManagerLiquidityPoolRemoveFlowLimiterArgs = {
  flowLimiter: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLiquidityPool.removeFlowLimiter function args
 */
export const encodeITokenManagerLiquidityPoolRemoveFlowLimiterArgs = ({
  flowLimiter,
}: ITokenManagerLiquidityPoolRemoveFlowLimiterArgs) => [flowLimiter] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.removeFlowLimiter function data
 */
export const encodeITokenManagerLiquidityPoolRemoveFlowLimiterData = ({
  flowLimiter,
}: ITokenManagerLiquidityPoolRemoveFlowLimiterArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "removeFlowLimiter",
    abi: ABI_FILE.abi,
    args: [flowLimiter],
  });

export type ITokenManagerLiquidityPoolSetFlowLimitArgs = { flowLimit_: bigint };

/**
 * Factory function for ITokenManagerLiquidityPool.setFlowLimit function args
 */
export const encodeITokenManagerLiquidityPoolSetFlowLimitArgs = ({
  flowLimit_,
}: ITokenManagerLiquidityPoolSetFlowLimitArgs) => [flowLimit_] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.setFlowLimit function data
 */
export const encodeITokenManagerLiquidityPoolSetFlowLimitData = ({
  flowLimit_,
}: ITokenManagerLiquidityPoolSetFlowLimitArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setFlowLimit",
    abi: ABI_FILE.abi,
    args: [flowLimit_],
  });

export type ITokenManagerLiquidityPoolSetLiquidityPoolArgs = {
  newLiquidityPool: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLiquidityPool.setLiquidityPool function args
 */
export const encodeITokenManagerLiquidityPoolSetLiquidityPoolArgs = ({
  newLiquidityPool,
}: ITokenManagerLiquidityPoolSetLiquidityPoolArgs) =>
  [newLiquidityPool] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.setLiquidityPool function data
 */
export const encodeITokenManagerLiquidityPoolSetLiquidityPoolData = ({
  newLiquidityPool,
}: ITokenManagerLiquidityPoolSetLiquidityPoolArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setLiquidityPool",
    abi: ABI_FILE.abi,
    args: [newLiquidityPool],
  });

export type ITokenManagerLiquidityPoolSetupArgs = { data: `0x${string}` };

/**
 * Factory function for ITokenManagerLiquidityPool.setup function args
 */
export const encodeITokenManagerLiquidityPoolSetupArgs = ({
  data,
}: ITokenManagerLiquidityPoolSetupArgs) => [data] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.setup function data
 */
export const encodeITokenManagerLiquidityPoolSetupData = ({
  data,
}: ITokenManagerLiquidityPoolSetupArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "setup",
    abi: ABI_FILE.abi,
    args: [data],
  });

export type ITokenManagerLiquidityPoolTakeTokenArgs = {
  sourceAddress: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for ITokenManagerLiquidityPool.takeToken function args
 */
export const encodeITokenManagerLiquidityPoolTakeTokenArgs = ({
  sourceAddress,
  amount,
}: ITokenManagerLiquidityPoolTakeTokenArgs) => [sourceAddress, amount] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.takeToken function data
 */
export const encodeITokenManagerLiquidityPoolTakeTokenData = ({
  sourceAddress,
  amount,
}: ITokenManagerLiquidityPoolTakeTokenArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "takeToken",
    abi: ABI_FILE.abi,
    args: [sourceAddress, amount],
  });

export type ITokenManagerLiquidityPoolTransferOperatorshipArgs = {
  operator_: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLiquidityPool.transferOperatorship function args
 */
export const encodeITokenManagerLiquidityPoolTransferOperatorshipArgs = ({
  operator_,
}: ITokenManagerLiquidityPoolTransferOperatorshipArgs) => [operator_] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.transferOperatorship function data
 */
export const encodeITokenManagerLiquidityPoolTransferOperatorshipData = ({
  operator_,
}: ITokenManagerLiquidityPoolTransferOperatorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferOperatorship",
    abi: ABI_FILE.abi,
    args: [operator_],
  });

export type ITokenManagerLiquidityPoolTransmitInterchainTransferArgs = {
  sender: `0x${string}`;
  destinationChain: string;
  destinationAddress: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for ITokenManagerLiquidityPool.transmitInterchainTransfer function args
 */
export const encodeITokenManagerLiquidityPoolTransmitInterchainTransferArgs = ({
  sender,
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: ITokenManagerLiquidityPoolTransmitInterchainTransferArgs) =>
  [sender, destinationChain, destinationAddress, amount, metadata] as const;

/**
 * Encoder function for ITokenManagerLiquidityPool.transmitInterchainTransfer function data
 */
export const encodeITokenManagerLiquidityPoolTransmitInterchainTransferData = ({
  sender,
  destinationChain,
  destinationAddress,
  amount,
  metadata,
}: ITokenManagerLiquidityPoolTransmitInterchainTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transmitInterchainTransfer",
    abi: ABI_FILE.abi,
    args: [sender, destinationChain, destinationAddress, amount, metadata],
  });

export const ITOKEN_MANAGER_LIQUIDITY_POOL_ENCODERS = {
  acceptOperatorship: {
    args: encodeITokenManagerLiquidityPoolAcceptOperatorshipArgs,
    data: encodeITokenManagerLiquidityPoolAcceptOperatorshipData,
  },
  addFlowLimiter: {
    args: encodeITokenManagerLiquidityPoolAddFlowLimiterArgs,
    data: encodeITokenManagerLiquidityPoolAddFlowLimiterData,
  },
  callContractWithInterchainToken: {
    args: encodeITokenManagerLiquidityPoolCallContractWithInterchainTokenArgs,
    data: encodeITokenManagerLiquidityPoolCallContractWithInterchainTokenData,
  },
  giveToken: {
    args: encodeITokenManagerLiquidityPoolGiveTokenArgs,
    data: encodeITokenManagerLiquidityPoolGiveTokenData,
  },
  hasRole: {
    args: encodeITokenManagerLiquidityPoolHasRoleArgs,
    data: encodeITokenManagerLiquidityPoolHasRoleData,
  },
  interchainTransfer: {
    args: encodeITokenManagerLiquidityPoolInterchainTransferArgs,
    data: encodeITokenManagerLiquidityPoolInterchainTransferData,
  },
  isOperator: {
    args: encodeITokenManagerLiquidityPoolIsOperatorArgs,
    data: encodeITokenManagerLiquidityPoolIsOperatorData,
  },
  params: {
    args: encodeITokenManagerLiquidityPoolParamsArgs,
    data: encodeITokenManagerLiquidityPoolParamsData,
  },
  proposeOperatorship: {
    args: encodeITokenManagerLiquidityPoolProposeOperatorshipArgs,
    data: encodeITokenManagerLiquidityPoolProposeOperatorshipData,
  },
  removeFlowLimiter: {
    args: encodeITokenManagerLiquidityPoolRemoveFlowLimiterArgs,
    data: encodeITokenManagerLiquidityPoolRemoveFlowLimiterData,
  },
  setFlowLimit: {
    args: encodeITokenManagerLiquidityPoolSetFlowLimitArgs,
    data: encodeITokenManagerLiquidityPoolSetFlowLimitData,
  },
  setLiquidityPool: {
    args: encodeITokenManagerLiquidityPoolSetLiquidityPoolArgs,
    data: encodeITokenManagerLiquidityPoolSetLiquidityPoolData,
  },
  setup: {
    args: encodeITokenManagerLiquidityPoolSetupArgs,
    data: encodeITokenManagerLiquidityPoolSetupData,
  },
  takeToken: {
    args: encodeITokenManagerLiquidityPoolTakeTokenArgs,
    data: encodeITokenManagerLiquidityPoolTakeTokenData,
  },
  transferOperatorship: {
    args: encodeITokenManagerLiquidityPoolTransferOperatorshipArgs,
    data: encodeITokenManagerLiquidityPoolTransferOperatorshipData,
  },
  transmitInterchainTransfer: {
    args: encodeITokenManagerLiquidityPoolTransmitInterchainTransferArgs,
    data: encodeITokenManagerLiquidityPoolTransmitInterchainTransferData,
  },
};

export function createITokenManagerLiquidityPoolReadClient(
  publicClient: PublicContractClient<typeof ABI_FILE.abi>
) {
  return {
    hasRole(hasRoleArgs: ITokenManagerLiquidityPoolHasRoleArgs) {
      const encoder = ITOKEN_MANAGER_LIQUIDITY_POOL_ENCODERS["hasRole"];
      const encodedArgs = encoder.args(hasRoleArgs);

      return publicClient.read("hasRole", { args: encodedArgs });
    },
    isOperator(isOperatorArgs: ITokenManagerLiquidityPoolIsOperatorArgs) {
      const encoder = ITOKEN_MANAGER_LIQUIDITY_POOL_ENCODERS["isOperator"];
      const encodedArgs = encoder.args(isOperatorArgs);

      return publicClient.read("isOperator", { args: encodedArgs });
    },
    params(paramsArgs: ITokenManagerLiquidityPoolParamsArgs) {
      const encoder = ITOKEN_MANAGER_LIQUIDITY_POOL_ENCODERS["params"];
      const encodedArgs = encoder.args(paramsArgs);

      return publicClient.read("params", { args: encodedArgs });
    },
  };
}
