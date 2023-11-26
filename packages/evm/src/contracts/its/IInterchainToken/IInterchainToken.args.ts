/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IInterchainToken.sol/IInterchainToken.json
 *
 * DO NOT EDIT MANUALLY
 */

import { encodeFunctionData } from "viem";

import type { PublicContractClient } from "../../PublicContractClient";
import ABI_FILE from "./IInterchainToken.abi";

export type IInterchainTokenAcceptDistributorshipArgs = {
  fromDistributor: `0x${string}`;
};

/**
 * Factory function for IInterchainToken.acceptDistributorship function args
 */
export const encodeIInterchainTokenAcceptDistributorshipArgs = ({
  fromDistributor,
}: IInterchainTokenAcceptDistributorshipArgs) => [fromDistributor] as const;

/**
 * Encoder function for IInterchainToken.acceptDistributorship function data
 */
export const encodeIInterchainTokenAcceptDistributorshipData = ({
  fromDistributor,
}: IInterchainTokenAcceptDistributorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "acceptDistributorship",
    abi: ABI_FILE.abi,
    args: [fromDistributor],
  });

export type IInterchainTokenAllowanceArgs = {
  owner: `0x${string}`;
  spender: `0x${string}`;
};

/**
 * Factory function for IInterchainToken.allowance function args
 */
export const encodeIInterchainTokenAllowanceArgs = ({
  owner,
  spender,
}: IInterchainTokenAllowanceArgs) => [owner, spender] as const;

/**
 * Encoder function for IInterchainToken.allowance function data
 */
export const encodeIInterchainTokenAllowanceData = ({
  owner,
  spender,
}: IInterchainTokenAllowanceArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "allowance",
    abi: ABI_FILE.abi,
    args: [owner, spender],
  });

export type IInterchainTokenApproveArgs = {
  spender: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IInterchainToken.approve function args
 */
export const encodeIInterchainTokenApproveArgs = ({
  spender,
  amount,
}: IInterchainTokenApproveArgs) => [spender, amount] as const;

/**
 * Encoder function for IInterchainToken.approve function data
 */
export const encodeIInterchainTokenApproveData = ({
  spender,
  amount,
}: IInterchainTokenApproveArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "approve",
    abi: ABI_FILE.abi,
    args: [spender, amount],
  });

export type IInterchainTokenBalanceOfArgs = { account: `0x${string}` };

/**
 * Factory function for IInterchainToken.balanceOf function args
 */
export const encodeIInterchainTokenBalanceOfArgs = ({
  account,
}: IInterchainTokenBalanceOfArgs) => [account] as const;

/**
 * Encoder function for IInterchainToken.balanceOf function data
 */
export const encodeIInterchainTokenBalanceOfData = ({
  account,
}: IInterchainTokenBalanceOfArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "balanceOf",
    abi: ABI_FILE.abi,
    args: [account],
  });

export type IInterchainTokenBurnArgs = { from: `0x${string}`; amount: bigint };

/**
 * Factory function for IInterchainToken.burn function args
 */
export const encodeIInterchainTokenBurnArgs = ({
  from,
  amount,
}: IInterchainTokenBurnArgs) => [from, amount] as const;

/**
 * Encoder function for IInterchainToken.burn function data
 */
export const encodeIInterchainTokenBurnData = ({
  from,
  amount,
}: IInterchainTokenBurnArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "burn",
    abi: ABI_FILE.abi,
    args: [from, amount],
  });

export type IInterchainTokenHasRoleArgs = {
  account: `0x${string}`;
  role: number;
};

/**
 * Factory function for IInterchainToken.hasRole function args
 */
export const encodeIInterchainTokenHasRoleArgs = ({
  account,
  role,
}: IInterchainTokenHasRoleArgs) => [account, role] as const;

/**
 * Encoder function for IInterchainToken.hasRole function data
 */
export const encodeIInterchainTokenHasRoleData = ({
  account,
  role,
}: IInterchainTokenHasRoleArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "hasRole",
    abi: ABI_FILE.abi,
    args: [account, role],
  });

export type IInterchainTokenInitArgs = {
  tokenManagerAddress: `0x${string}`;
  distributor: `0x${string}`;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: number;
};

/**
 * Factory function for IInterchainToken.init function args
 */
export const encodeIInterchainTokenInitArgs = ({
  tokenManagerAddress,
  distributor,
  tokenName,
  tokenSymbol,
  tokenDecimals,
}: IInterchainTokenInitArgs) =>
  [
    tokenManagerAddress,
    distributor,
    tokenName,
    tokenSymbol,
    tokenDecimals,
  ] as const;

/**
 * Encoder function for IInterchainToken.init function data
 */
export const encodeIInterchainTokenInitData = ({
  tokenManagerAddress,
  distributor,
  tokenName,
  tokenSymbol,
  tokenDecimals,
}: IInterchainTokenInitArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "init",
    abi: ABI_FILE.abi,
    args: [
      tokenManagerAddress,
      distributor,
      tokenName,
      tokenSymbol,
      tokenDecimals,
    ],
  });

export type IInterchainTokenInterchainTransferArgs = {
  destinationChain: string;
  recipient: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for IInterchainToken.interchainTransfer function args
 */
export const encodeIInterchainTokenInterchainTransferArgs = ({
  destinationChain,
  recipient,
  amount,
  metadata,
}: IInterchainTokenInterchainTransferArgs) =>
  [destinationChain, recipient, amount, metadata] as const;

/**
 * Encoder function for IInterchainToken.interchainTransfer function data
 */
export const encodeIInterchainTokenInterchainTransferData = ({
  destinationChain,
  recipient,
  amount,
  metadata,
}: IInterchainTokenInterchainTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTransfer",
    abi: ABI_FILE.abi,
    args: [destinationChain, recipient, amount, metadata],
  });

export type IInterchainTokenInterchainTransferFromArgs = {
  sender: `0x${string}`;
  destinationChain: string;
  recipient: `0x${string}`;
  amount: bigint;
  metadata: `0x${string}`;
};

/**
 * Factory function for IInterchainToken.interchainTransferFrom function args
 */
export const encodeIInterchainTokenInterchainTransferFromArgs = ({
  sender,
  destinationChain,
  recipient,
  amount,
  metadata,
}: IInterchainTokenInterchainTransferFromArgs) =>
  [sender, destinationChain, recipient, amount, metadata] as const;

/**
 * Encoder function for IInterchainToken.interchainTransferFrom function data
 */
export const encodeIInterchainTokenInterchainTransferFromData = ({
  sender,
  destinationChain,
  recipient,
  amount,
  metadata,
}: IInterchainTokenInterchainTransferFromArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "interchainTransferFrom",
    abi: ABI_FILE.abi,
    args: [sender, destinationChain, recipient, amount, metadata],
  });

export type IInterchainTokenIsDistributorArgs = { addr: `0x${string}` };

/**
 * Factory function for IInterchainToken.isDistributor function args
 */
export const encodeIInterchainTokenIsDistributorArgs = ({
  addr,
}: IInterchainTokenIsDistributorArgs) => [addr] as const;

/**
 * Encoder function for IInterchainToken.isDistributor function data
 */
export const encodeIInterchainTokenIsDistributorData = ({
  addr,
}: IInterchainTokenIsDistributorArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "isDistributor",
    abi: ABI_FILE.abi,
    args: [addr],
  });

export type IInterchainTokenMintArgs = { to: `0x${string}`; amount: bigint };

/**
 * Factory function for IInterchainToken.mint function args
 */
export const encodeIInterchainTokenMintArgs = ({
  to,
  amount,
}: IInterchainTokenMintArgs) => [to, amount] as const;

/**
 * Encoder function for IInterchainToken.mint function data
 */
export const encodeIInterchainTokenMintData = ({
  to,
  amount,
}: IInterchainTokenMintArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "mint",
    abi: ABI_FILE.abi,
    args: [to, amount],
  });

export type IInterchainTokenProposeDistributorshipArgs = {
  distributor_: `0x${string}`;
};

/**
 * Factory function for IInterchainToken.proposeDistributorship function args
 */
export const encodeIInterchainTokenProposeDistributorshipArgs = ({
  distributor_,
}: IInterchainTokenProposeDistributorshipArgs) => [distributor_] as const;

/**
 * Encoder function for IInterchainToken.proposeDistributorship function data
 */
export const encodeIInterchainTokenProposeDistributorshipData = ({
  distributor_,
}: IInterchainTokenProposeDistributorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "proposeDistributorship",
    abi: ABI_FILE.abi,
    args: [distributor_],
  });

export type IInterchainTokenTransferArgs = {
  recipient: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IInterchainToken.transfer function args
 */
export const encodeIInterchainTokenTransferArgs = ({
  recipient,
  amount,
}: IInterchainTokenTransferArgs) => [recipient, amount] as const;

/**
 * Encoder function for IInterchainToken.transfer function data
 */
export const encodeIInterchainTokenTransferData = ({
  recipient,
  amount,
}: IInterchainTokenTransferArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transfer",
    abi: ABI_FILE.abi,
    args: [recipient, amount],
  });

export type IInterchainTokenTransferDistributorshipArgs = {
  distributor_: `0x${string}`;
};

/**
 * Factory function for IInterchainToken.transferDistributorship function args
 */
export const encodeIInterchainTokenTransferDistributorshipArgs = ({
  distributor_,
}: IInterchainTokenTransferDistributorshipArgs) => [distributor_] as const;

/**
 * Encoder function for IInterchainToken.transferDistributorship function data
 */
export const encodeIInterchainTokenTransferDistributorshipData = ({
  distributor_,
}: IInterchainTokenTransferDistributorshipArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferDistributorship",
    abi: ABI_FILE.abi,
    args: [distributor_],
  });

export type IInterchainTokenTransferFromArgs = {
  sender: `0x${string}`;
  recipient: `0x${string}`;
  amount: bigint;
};

/**
 * Factory function for IInterchainToken.transferFrom function args
 */
export const encodeIInterchainTokenTransferFromArgs = ({
  sender,
  recipient,
  amount,
}: IInterchainTokenTransferFromArgs) => [sender, recipient, amount] as const;

/**
 * Encoder function for IInterchainToken.transferFrom function data
 */
export const encodeIInterchainTokenTransferFromData = ({
  sender,
  recipient,
  amount,
}: IInterchainTokenTransferFromArgs): `0x${string}` =>
  encodeFunctionData({
    functionName: "transferFrom",
    abi: ABI_FILE.abi,
    args: [sender, recipient, amount],
  });

export const IINTERCHAIN_TOKEN_ENCODERS = {
  acceptDistributorship: {
    args: encodeIInterchainTokenAcceptDistributorshipArgs,
    data: encodeIInterchainTokenAcceptDistributorshipData,
  },
  allowance: {
    args: encodeIInterchainTokenAllowanceArgs,
    data: encodeIInterchainTokenAllowanceData,
  },
  approve: {
    args: encodeIInterchainTokenApproveArgs,
    data: encodeIInterchainTokenApproveData,
  },
  balanceOf: {
    args: encodeIInterchainTokenBalanceOfArgs,
    data: encodeIInterchainTokenBalanceOfData,
  },
  burn: {
    args: encodeIInterchainTokenBurnArgs,
    data: encodeIInterchainTokenBurnData,
  },
  hasRole: {
    args: encodeIInterchainTokenHasRoleArgs,
    data: encodeIInterchainTokenHasRoleData,
  },
  init: {
    args: encodeIInterchainTokenInitArgs,
    data: encodeIInterchainTokenInitData,
  },
  interchainTransfer: {
    args: encodeIInterchainTokenInterchainTransferArgs,
    data: encodeIInterchainTokenInterchainTransferData,
  },
  interchainTransferFrom: {
    args: encodeIInterchainTokenInterchainTransferFromArgs,
    data: encodeIInterchainTokenInterchainTransferFromData,
  },
  isDistributor: {
    args: encodeIInterchainTokenIsDistributorArgs,
    data: encodeIInterchainTokenIsDistributorData,
  },
  mint: {
    args: encodeIInterchainTokenMintArgs,
    data: encodeIInterchainTokenMintData,
  },
  proposeDistributorship: {
    args: encodeIInterchainTokenProposeDistributorshipArgs,
    data: encodeIInterchainTokenProposeDistributorshipData,
  },
  transfer: {
    args: encodeIInterchainTokenTransferArgs,
    data: encodeIInterchainTokenTransferData,
  },
  transferDistributorship: {
    args: encodeIInterchainTokenTransferDistributorshipArgs,
    data: encodeIInterchainTokenTransferDistributorshipData,
  },
  transferFrom: {
    args: encodeIInterchainTokenTransferFromArgs,
    data: encodeIInterchainTokenTransferFromData,
  },
};

export function createIInterchainTokenReadClient(
  publicClient: PublicContractClient<typeof ABI_FILE.abi>
) {
  return {
    allowance(allowanceArgs: IInterchainTokenAllowanceArgs) {
      const encoder = IINTERCHAIN_TOKEN_ENCODERS["allowance"];
      const encodedArgs = encoder.args(allowanceArgs);

      return publicClient.read("allowance", { args: encodedArgs });
    },
    balanceOf(balanceOfArgs: IInterchainTokenBalanceOfArgs) {
      const encoder = IINTERCHAIN_TOKEN_ENCODERS["balanceOf"];
      const encodedArgs = encoder.args(balanceOfArgs);

      return publicClient.read("balanceOf", { args: encodedArgs });
    },
    hasRole(hasRoleArgs: IInterchainTokenHasRoleArgs) {
      const encoder = IINTERCHAIN_TOKEN_ENCODERS["hasRole"];
      const encodedArgs = encoder.args(hasRoleArgs);

      return publicClient.read("hasRole", { args: encodedArgs });
    },
    isDistributor(isDistributorArgs: IInterchainTokenIsDistributorArgs) {
      const encoder = IINTERCHAIN_TOKEN_ENCODERS["isDistributor"];
      const encodedArgs = encoder.args(isDistributorArgs);

      return publicClient.read("isDistributor", { args: encodedArgs });
    },
  };
}