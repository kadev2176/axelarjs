/* eslint-disable @typescript-eslint/consistent-type-imports */

import {
  useContractEvent,
  UseContractEventConfig,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
} from "wagmi";
import {
  PrepareWriteContractResult,
  ReadContractResult,
  WriteContractMode,
} from "wagmi/actions";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20BurnableMintable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20BurnableMintableABI = [
  { type: "error", inputs: [], name: "InvalidAccount" },
  { type: "error", inputs: [], name: "InvalidOwner" },
  { type: "error", inputs: [], name: "NotOwner" },
  { type: "error", inputs: [], name: "NotSelf" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferStarted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "burnFrom",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "pendingOwner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "name_", internalType: "string", type: "string" },
      { name: "symbol_", internalType: "string", type: "string" },
      { name: "decimals_", internalType: "uint8", type: "uint8" },
      { name: "owner", internalType: "address", type: "address" },
    ],
    name: "setup",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "recipient", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "recipient", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20BurnableMintableABI}__.
 */
export function useIerc20BurnableMintableRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof ierc20BurnableMintableABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc20BurnableMintableABI,
      TFunctionName,
      TSelectData
    >,
    "abi"
  > = {} as any
) {
  return useContractRead({
    abi: ierc20BurnableMintableABI,
    ...config,
  } as UseContractReadConfig<typeof ierc20BurnableMintableABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"allowance"`.
 */
export function useIerc20BurnableMintableAllowance<
  TFunctionName extends "allowance",
  TSelectData = ReadContractResult<
    typeof ierc20BurnableMintableABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc20BurnableMintableABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: ierc20BurnableMintableABI,
    functionName: "allowance",
    ...config,
  } as UseContractReadConfig<typeof ierc20BurnableMintableABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useIerc20BurnableMintableBalanceOf<
  TFunctionName extends "balanceOf",
  TSelectData = ReadContractResult<
    typeof ierc20BurnableMintableABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc20BurnableMintableABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: ierc20BurnableMintableABI,
    functionName: "balanceOf",
    ...config,
  } as UseContractReadConfig<typeof ierc20BurnableMintableABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"decimals"`.
 */
export function useIerc20BurnableMintableDecimals<
  TFunctionName extends "decimals",
  TSelectData = ReadContractResult<
    typeof ierc20BurnableMintableABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc20BurnableMintableABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: ierc20BurnableMintableABI,
    functionName: "decimals",
    ...config,
  } as UseContractReadConfig<typeof ierc20BurnableMintableABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"name"`.
 */
export function useIerc20BurnableMintableName<
  TFunctionName extends "name",
  TSelectData = ReadContractResult<
    typeof ierc20BurnableMintableABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc20BurnableMintableABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: ierc20BurnableMintableABI,
    functionName: "name",
    ...config,
  } as UseContractReadConfig<typeof ierc20BurnableMintableABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"owner"`.
 */
export function useIerc20BurnableMintableOwner<
  TFunctionName extends "owner",
  TSelectData = ReadContractResult<
    typeof ierc20BurnableMintableABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc20BurnableMintableABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: ierc20BurnableMintableABI,
    functionName: "owner",
    ...config,
  } as UseContractReadConfig<typeof ierc20BurnableMintableABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"pendingOwner"`.
 */
export function useIerc20BurnableMintablePendingOwner<
  TFunctionName extends "pendingOwner",
  TSelectData = ReadContractResult<
    typeof ierc20BurnableMintableABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc20BurnableMintableABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: ierc20BurnableMintableABI,
    functionName: "pendingOwner",
    ...config,
  } as UseContractReadConfig<typeof ierc20BurnableMintableABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"symbol"`.
 */
export function useIerc20BurnableMintableSymbol<
  TFunctionName extends "symbol",
  TSelectData = ReadContractResult<
    typeof ierc20BurnableMintableABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc20BurnableMintableABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: ierc20BurnableMintableABI,
    functionName: "symbol",
    ...config,
  } as UseContractReadConfig<typeof ierc20BurnableMintableABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useIerc20BurnableMintableTotalSupply<
  TFunctionName extends "totalSupply",
  TSelectData = ReadContractResult<
    typeof ierc20BurnableMintableABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof ierc20BurnableMintableABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: ierc20BurnableMintableABI,
    functionName: "totalSupply",
    ...config,
  } as UseContractReadConfig<typeof ierc20BurnableMintableABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__.
 */
export function useIerc20BurnableMintableWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20BurnableMintableABI,
          string
        >["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof ierc20BurnableMintableABI,
        TFunctionName,
        TMode
      > & {
        abi?: never;
      } = {} as any
) {
  return useContractWrite<
    typeof ierc20BurnableMintableABI,
    TFunctionName,
    TMode
  >({ abi: ierc20BurnableMintableABI, ...config } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function useIerc20BurnableMintableAcceptOwnership<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20BurnableMintableABI,
          "acceptOwnership"
        >["request"]["abi"],
        "acceptOwnership",
        TMode
      > & { functionName?: "acceptOwnership" }
    : UseContractWriteConfig<
        typeof ierc20BurnableMintableABI,
        "acceptOwnership",
        TMode
      > & {
        abi?: never;
        functionName?: "acceptOwnership";
      } = {} as any
) {
  return useContractWrite<
    typeof ierc20BurnableMintableABI,
    "acceptOwnership",
    TMode
  >({
    abi: ierc20BurnableMintableABI,
    functionName: "acceptOwnership",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"approve"`.
 */
export function useIerc20BurnableMintableApprove<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20BurnableMintableABI,
          "approve"
        >["request"]["abi"],
        "approve",
        TMode
      > & { functionName?: "approve" }
    : UseContractWriteConfig<
        typeof ierc20BurnableMintableABI,
        "approve",
        TMode
      > & {
        abi?: never;
        functionName?: "approve";
      } = {} as any
) {
  return useContractWrite<typeof ierc20BurnableMintableABI, "approve", TMode>({
    abi: ierc20BurnableMintableABI,
    functionName: "approve",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"burnFrom"`.
 */
export function useIerc20BurnableMintableBurnFrom<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20BurnableMintableABI,
          "burnFrom"
        >["request"]["abi"],
        "burnFrom",
        TMode
      > & { functionName?: "burnFrom" }
    : UseContractWriteConfig<
        typeof ierc20BurnableMintableABI,
        "burnFrom",
        TMode
      > & {
        abi?: never;
        functionName?: "burnFrom";
      } = {} as any
) {
  return useContractWrite<typeof ierc20BurnableMintableABI, "burnFrom", TMode>({
    abi: ierc20BurnableMintableABI,
    functionName: "burnFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"mint"`.
 */
export function useIerc20BurnableMintableMint<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20BurnableMintableABI,
          "mint"
        >["request"]["abi"],
        "mint",
        TMode
      > & { functionName?: "mint" }
    : UseContractWriteConfig<
        typeof ierc20BurnableMintableABI,
        "mint",
        TMode
      > & {
        abi?: never;
        functionName?: "mint";
      } = {} as any
) {
  return useContractWrite<typeof ierc20BurnableMintableABI, "mint", TMode>({
    abi: ierc20BurnableMintableABI,
    functionName: "mint",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"setup"`.
 */
export function useIerc20BurnableMintableSetup<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20BurnableMintableABI,
          "setup"
        >["request"]["abi"],
        "setup",
        TMode
      > & { functionName?: "setup" }
    : UseContractWriteConfig<
        typeof ierc20BurnableMintableABI,
        "setup",
        TMode
      > & {
        abi?: never;
        functionName?: "setup";
      } = {} as any
) {
  return useContractWrite<typeof ierc20BurnableMintableABI, "setup", TMode>({
    abi: ierc20BurnableMintableABI,
    functionName: "setup",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"transfer"`.
 */
export function useIerc20BurnableMintableTransfer<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20BurnableMintableABI,
          "transfer"
        >["request"]["abi"],
        "transfer",
        TMode
      > & { functionName?: "transfer" }
    : UseContractWriteConfig<
        typeof ierc20BurnableMintableABI,
        "transfer",
        TMode
      > & {
        abi?: never;
        functionName?: "transfer";
      } = {} as any
) {
  return useContractWrite<typeof ierc20BurnableMintableABI, "transfer", TMode>({
    abi: ierc20BurnableMintableABI,
    functionName: "transfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useIerc20BurnableMintableTransferFrom<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20BurnableMintableABI,
          "transferFrom"
        >["request"]["abi"],
        "transferFrom",
        TMode
      > & { functionName?: "transferFrom" }
    : UseContractWriteConfig<
        typeof ierc20BurnableMintableABI,
        "transferFrom",
        TMode
      > & {
        abi?: never;
        functionName?: "transferFrom";
      } = {} as any
) {
  return useContractWrite<
    typeof ierc20BurnableMintableABI,
    "transferFrom",
    TMode
  >({
    abi: ierc20BurnableMintableABI,
    functionName: "transferFrom",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useIerc20BurnableMintableTransferOwnership<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof ierc20BurnableMintableABI,
          "transferOwnership"
        >["request"]["abi"],
        "transferOwnership",
        TMode
      > & { functionName?: "transferOwnership" }
    : UseContractWriteConfig<
        typeof ierc20BurnableMintableABI,
        "transferOwnership",
        TMode
      > & {
        abi?: never;
        functionName?: "transferOwnership";
      } = {} as any
) {
  return useContractWrite<
    typeof ierc20BurnableMintableABI,
    "transferOwnership",
    TMode
  >({
    abi: ierc20BurnableMintableABI,
    functionName: "transferOwnership",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__.
 */
export function usePrepareIerc20BurnableMintableWrite<
  TFunctionName extends string
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc20BurnableMintableABI,
      TFunctionName
    >,
    "abi"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: ierc20BurnableMintableABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function usePrepareIerc20BurnableMintableAcceptOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc20BurnableMintableABI,
      "acceptOwnership"
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: ierc20BurnableMintableABI,
    functionName: "acceptOwnership",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "acceptOwnership">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareIerc20BurnableMintableApprove(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "approve">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: ierc20BurnableMintableABI,
    functionName: "approve",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "approve">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"burnFrom"`.
 */
export function usePrepareIerc20BurnableMintableBurnFrom(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "burnFrom">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: ierc20BurnableMintableABI,
    functionName: "burnFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "burnFrom">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"mint"`.
 */
export function usePrepareIerc20BurnableMintableMint(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "mint">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: ierc20BurnableMintableABI,
    functionName: "mint",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "mint">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"setup"`.
 */
export function usePrepareIerc20BurnableMintableSetup(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "setup">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: ierc20BurnableMintableABI,
    functionName: "setup",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "setup">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareIerc20BurnableMintableTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "transfer">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: ierc20BurnableMintableABI,
    functionName: "transfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "transfer">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareIerc20BurnableMintableTransferFrom(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc20BurnableMintableABI,
      "transferFrom"
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: ierc20BurnableMintableABI,
    functionName: "transferFrom",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "transferFrom">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareIerc20BurnableMintableTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof ierc20BurnableMintableABI,
      "transferOwnership"
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: ierc20BurnableMintableABI,
    functionName: "transferOwnership",
    ...config,
  } as UsePrepareContractWriteConfig<typeof ierc20BurnableMintableABI, "transferOwnership">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20BurnableMintableABI}__.
 */
export function useIerc20BurnableMintableEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof ierc20BurnableMintableABI, TEventName>,
    "abi"
  > = {} as any
) {
  return useContractEvent({
    abi: ierc20BurnableMintableABI,
    ...config,
  } as UseContractEventConfig<typeof ierc20BurnableMintableABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `eventName` set to `"Approval"`.
 */
export function useIerc20BurnableMintableApprovalEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20BurnableMintableABI, "Approval">,
    "abi" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: ierc20BurnableMintableABI,
    eventName: "Approval",
    ...config,
  } as UseContractEventConfig<typeof ierc20BurnableMintableABI, "Approval">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `eventName` set to `"OwnershipTransferStarted"`.
 */
export function useIerc20BurnableMintableOwnershipTransferStartedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof ierc20BurnableMintableABI,
      "OwnershipTransferStarted"
    >,
    "abi" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: ierc20BurnableMintableABI,
    eventName: "OwnershipTransferStarted",
    ...config,
  } as UseContractEventConfig<typeof ierc20BurnableMintableABI, "OwnershipTransferStarted">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useIerc20BurnableMintableOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<
      typeof ierc20BurnableMintableABI,
      "OwnershipTransferred"
    >,
    "abi" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: ierc20BurnableMintableABI,
    eventName: "OwnershipTransferred",
    ...config,
  } as UseContractEventConfig<typeof ierc20BurnableMintableABI, "OwnershipTransferred">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link ierc20BurnableMintableABI}__ and `eventName` set to `"Transfer"`.
 */
export function useIerc20BurnableMintableTransferEvent(
  config: Omit<
    UseContractEventConfig<typeof ierc20BurnableMintableABI, "Transfer">,
    "abi" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: ierc20BurnableMintableABI,
    eventName: "Transfer",
    ...config,
  } as UseContractEventConfig<typeof ierc20BurnableMintableABI, "Transfer">);
}
