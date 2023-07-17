/* eslint-disable @typescript-eslint/consistent-type-imports */

// Generated by @wagmi/cli@1.3.0 on 7/11/2023 at 10:45:27 AM
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
// TokenManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenManagerABI = [
  { type: "error", inputs: [], name: "FlowLimitExceeded" },
  { type: "error", inputs: [], name: "GiveTokenFailed" },
  {
    type: "error",
    inputs: [{ name: "bytesAddress", internalType: "bytes", type: "bytes" }],
    name: "InvalidBytesLength",
  },
  { type: "error", inputs: [], name: "NotOperator" },
  { type: "error", inputs: [], name: "NotProxy" },
  { type: "error", inputs: [], name: "NotService" },
  { type: "error", inputs: [], name: "NotToken" },
  { type: "error", inputs: [], name: "TakeTokenFailed" },
  { type: "error", inputs: [], name: "TokenLinkerZeroAddress" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "flowLimit",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "FlowLimitSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "OperatorChanged",
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "destinationChain", internalType: "string", type: "string" },
      { name: "destinationAddress", internalType: "bytes", type: "bytes" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "callContractWithInterchainToken",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getFlowInAmount",
    outputs: [
      { name: "flowInAmount", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getFlowLimit",
    outputs: [{ name: "flowLimit", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getFlowOutAmount",
    outputs: [
      { name: "flowOutAmount", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "destinationAddress", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "giveToken",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [],
    name: "implementationType",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "interchainTokenService",
    outputs: [
      {
        name: "",
        internalType: "contract IInterchainTokenService",
        type: "address",
      },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "operator",
    outputs: [{ name: "operator_", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "destinationChain", internalType: "string", type: "string" },
      { name: "destinationAddress", internalType: "bytes", type: "bytes" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "metadata", internalType: "bytes", type: "bytes" },
    ],
    name: "sendToken",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "flowLimit", internalType: "uint256", type: "uint256" }],
    name: "setFlowLimit",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "operator_", internalType: "address", type: "address" }],
    name: "setOperator",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "params", internalType: "bytes", type: "bytes" }],
    name: "setup",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "tokenAddress",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "destinationChain", internalType: "string", type: "string" },
      { name: "destinationAddress", internalType: "bytes", type: "bytes" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "metadata", internalType: "bytes", type: "bytes" },
    ],
    name: "transmitInterchainTransfer",
    outputs: [],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenManagerABI}__.
 */
export function useTokenManagerRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof tokenManagerABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>,
    "abi"
  > = {} as any
) {
  return useContractRead({
    abi: tokenManagerABI,
    ...config,
  } as UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"getFlowInAmount"`.
 */
export function useTokenManagerGetFlowInAmount<
  TFunctionName extends "getFlowInAmount",
  TSelectData = ReadContractResult<typeof tokenManagerABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: tokenManagerABI,
    functionName: "getFlowInAmount",
    ...config,
  } as UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"getFlowLimit"`.
 */
export function useTokenManagerGetFlowLimit<
  TFunctionName extends "getFlowLimit",
  TSelectData = ReadContractResult<typeof tokenManagerABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: tokenManagerABI,
    functionName: "getFlowLimit",
    ...config,
  } as UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"getFlowOutAmount"`.
 */
export function useTokenManagerGetFlowOutAmount<
  TFunctionName extends "getFlowOutAmount",
  TSelectData = ReadContractResult<typeof tokenManagerABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: tokenManagerABI,
    functionName: "getFlowOutAmount",
    ...config,
  } as UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"implementationType"`.
 */
export function useTokenManagerImplementationType<
  TFunctionName extends "implementationType",
  TSelectData = ReadContractResult<typeof tokenManagerABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: tokenManagerABI,
    functionName: "implementationType",
    ...config,
  } as UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"interchainTokenService"`.
 */
export function useTokenManagerInterchainTokenService<
  TFunctionName extends "interchainTokenService",
  TSelectData = ReadContractResult<typeof tokenManagerABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: tokenManagerABI,
    functionName: "interchainTokenService",
    ...config,
  } as UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"operator"`.
 */
export function useTokenManagerOperator<
  TFunctionName extends "operator",
  TSelectData = ReadContractResult<typeof tokenManagerABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: tokenManagerABI,
    functionName: "operator",
    ...config,
  } as UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"tokenAddress"`.
 */
export function useTokenManagerTokenAddress<
  TFunctionName extends "tokenAddress",
  TSelectData = ReadContractResult<typeof tokenManagerABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>,
    "abi" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: tokenManagerABI,
    functionName: "tokenAddress",
    ...config,
  } as UseContractReadConfig<typeof tokenManagerABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenManagerABI}__.
 */
export function useTokenManagerWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenManagerABI,
          string
        >["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<typeof tokenManagerABI, TFunctionName, TMode> & {
        abi?: never;
      } = {} as any
) {
  return useContractWrite<typeof tokenManagerABI, TFunctionName, TMode>({
    abi: tokenManagerABI,
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"callContractWithInterchainToken"`.
 */
export function useTokenManagerCallContractWithInterchainToken<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenManagerABI,
          "callContractWithInterchainToken"
        >["request"]["abi"],
        "callContractWithInterchainToken",
        TMode
      > & { functionName?: "callContractWithInterchainToken" }
    : UseContractWriteConfig<
        typeof tokenManagerABI,
        "callContractWithInterchainToken",
        TMode
      > & {
        abi?: never;
        functionName?: "callContractWithInterchainToken";
      } = {} as any
) {
  return useContractWrite<
    typeof tokenManagerABI,
    "callContractWithInterchainToken",
    TMode
  >({
    abi: tokenManagerABI,
    functionName: "callContractWithInterchainToken",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"giveToken"`.
 */
export function useTokenManagerGiveToken<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenManagerABI,
          "giveToken"
        >["request"]["abi"],
        "giveToken",
        TMode
      > & { functionName?: "giveToken" }
    : UseContractWriteConfig<typeof tokenManagerABI, "giveToken", TMode> & {
        abi?: never;
        functionName?: "giveToken";
      } = {} as any
) {
  return useContractWrite<typeof tokenManagerABI, "giveToken", TMode>({
    abi: tokenManagerABI,
    functionName: "giveToken",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"sendToken"`.
 */
export function useTokenManagerSendToken<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenManagerABI,
          "sendToken"
        >["request"]["abi"],
        "sendToken",
        TMode
      > & { functionName?: "sendToken" }
    : UseContractWriteConfig<typeof tokenManagerABI, "sendToken", TMode> & {
        abi?: never;
        functionName?: "sendToken";
      } = {} as any
) {
  return useContractWrite<typeof tokenManagerABI, "sendToken", TMode>({
    abi: tokenManagerABI,
    functionName: "sendToken",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"setFlowLimit"`.
 */
export function useTokenManagerSetFlowLimit<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenManagerABI,
          "setFlowLimit"
        >["request"]["abi"],
        "setFlowLimit",
        TMode
      > & { functionName?: "setFlowLimit" }
    : UseContractWriteConfig<typeof tokenManagerABI, "setFlowLimit", TMode> & {
        abi?: never;
        functionName?: "setFlowLimit";
      } = {} as any
) {
  return useContractWrite<typeof tokenManagerABI, "setFlowLimit", TMode>({
    abi: tokenManagerABI,
    functionName: "setFlowLimit",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"setOperator"`.
 */
export function useTokenManagerSetOperator<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenManagerABI,
          "setOperator"
        >["request"]["abi"],
        "setOperator",
        TMode
      > & { functionName?: "setOperator" }
    : UseContractWriteConfig<typeof tokenManagerABI, "setOperator", TMode> & {
        abi?: never;
        functionName?: "setOperator";
      } = {} as any
) {
  return useContractWrite<typeof tokenManagerABI, "setOperator", TMode>({
    abi: tokenManagerABI,
    functionName: "setOperator",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"setup"`.
 */
export function useTokenManagerSetup<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenManagerABI,
          "setup"
        >["request"]["abi"],
        "setup",
        TMode
      > & { functionName?: "setup" }
    : UseContractWriteConfig<typeof tokenManagerABI, "setup", TMode> & {
        abi?: never;
        functionName?: "setup";
      } = {} as any
) {
  return useContractWrite<typeof tokenManagerABI, "setup", TMode>({
    abi: tokenManagerABI,
    functionName: "setup",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"transmitInterchainTransfer"`.
 */
export function useTokenManagerTransmitInterchainTransfer<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof tokenManagerABI,
          "transmitInterchainTransfer"
        >["request"]["abi"],
        "transmitInterchainTransfer",
        TMode
      > & { functionName?: "transmitInterchainTransfer" }
    : UseContractWriteConfig<
        typeof tokenManagerABI,
        "transmitInterchainTransfer",
        TMode
      > & {
        abi?: never;
        functionName?: "transmitInterchainTransfer";
      } = {} as any
) {
  return useContractWrite<
    typeof tokenManagerABI,
    "transmitInterchainTransfer",
    TMode
  >({
    abi: tokenManagerABI,
    functionName: "transmitInterchainTransfer",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenManagerABI}__.
 */
export function usePrepareTokenManagerWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenManagerABI, TFunctionName>,
    "abi"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: tokenManagerABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenManagerABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"callContractWithInterchainToken"`.
 */
export function usePrepareTokenManagerCallContractWithInterchainToken(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenManagerABI,
      "callContractWithInterchainToken"
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: tokenManagerABI,
    functionName: "callContractWithInterchainToken",
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenManagerABI, "callContractWithInterchainToken">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"giveToken"`.
 */
export function usePrepareTokenManagerGiveToken(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenManagerABI, "giveToken">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: tokenManagerABI,
    functionName: "giveToken",
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenManagerABI, "giveToken">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"sendToken"`.
 */
export function usePrepareTokenManagerSendToken(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenManagerABI, "sendToken">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: tokenManagerABI,
    functionName: "sendToken",
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenManagerABI, "sendToken">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"setFlowLimit"`.
 */
export function usePrepareTokenManagerSetFlowLimit(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenManagerABI, "setFlowLimit">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: tokenManagerABI,
    functionName: "setFlowLimit",
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenManagerABI, "setFlowLimit">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"setOperator"`.
 */
export function usePrepareTokenManagerSetOperator(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenManagerABI, "setOperator">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: tokenManagerABI,
    functionName: "setOperator",
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenManagerABI, "setOperator">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"setup"`.
 */
export function usePrepareTokenManagerSetup(
  config: Omit<
    UsePrepareContractWriteConfig<typeof tokenManagerABI, "setup">,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: tokenManagerABI,
    functionName: "setup",
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenManagerABI, "setup">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link tokenManagerABI}__ and `functionName` set to `"transmitInterchainTransfer"`.
 */
export function usePrepareTokenManagerTransmitInterchainTransfer(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof tokenManagerABI,
      "transmitInterchainTransfer"
    >,
    "abi" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: tokenManagerABI,
    functionName: "transmitInterchainTransfer",
    ...config,
  } as UsePrepareContractWriteConfig<typeof tokenManagerABI, "transmitInterchainTransfer">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenManagerABI}__.
 */
export function useTokenManagerEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof tokenManagerABI, TEventName>,
    "abi"
  > = {} as any
) {
  return useContractEvent({
    abi: tokenManagerABI,
    ...config,
  } as UseContractEventConfig<typeof tokenManagerABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenManagerABI}__ and `eventName` set to `"FlowLimitSet"`.
 */
export function useTokenManagerFlowLimitSetEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenManagerABI, "FlowLimitSet">,
    "abi" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: tokenManagerABI,
    eventName: "FlowLimitSet",
    ...config,
  } as UseContractEventConfig<typeof tokenManagerABI, "FlowLimitSet">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link tokenManagerABI}__ and `eventName` set to `"OperatorChanged"`.
 */
export function useTokenManagerOperatorChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof tokenManagerABI, "OperatorChanged">,
    "abi" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: tokenManagerABI,
    eventName: "OperatorChanged",
    ...config,
  } as UseContractEventConfig<typeof tokenManagerABI, "OperatorChanged">);
}