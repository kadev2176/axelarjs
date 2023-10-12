/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from "wagmi";
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from "wagmi/actions";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// InterchainTokenService
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const interchainTokenServiceABI = [
  {
    stateMutability: "nonpayable",
    type: "constructor",
    inputs: [
      {
        name: "tokenManagerDeployer_",
        internalType: "address",
        type: "address",
      },
      {
        name: "standardizedTokenDeployer_",
        internalType: "address",
        type: "address",
      },
      { name: "gateway_", internalType: "address", type: "address" },
      { name: "gasService_", internalType: "address", type: "address" },
      {
        name: "remoteAddressValidator_",
        internalType: "address",
        type: "address",
      },
      {
        name: "tokenManagerImplementations",
        internalType: "address[]",
        type: "address[]",
      },
      { name: "chainName_", internalType: "string", type: "string" },
    ],
  },
  {
    type: "error",
    inputs: [{ name: "commandId", internalType: "bytes32", type: "bytes32" }],
    name: "AlreadyExecuted",
  },
  { type: "error", inputs: [], name: "AlreadyExpressCalled" },
  {
    type: "error",
    inputs: [
      { name: "contractAddress", internalType: "address", type: "address" },
    ],
    name: "DoesNotAcceptExpressExecute",
  },
  {
    type: "error",
    inputs: [
      { name: "contractAddress", internalType: "address", type: "address" },
    ],
    name: "ExecuteWithInterchainTokenFailed",
  },
  { type: "error", inputs: [], name: "GatewayToken" },
  { type: "error", inputs: [], name: "InvalidAddress" },
  {
    type: "error",
    inputs: [{ name: "bytesAddress", internalType: "bytes", type: "bytes" }],
    name: "InvalidBytesLength",
  },
  { type: "error", inputs: [], name: "InvalidCodeHash" },
  { type: "error", inputs: [], name: "InvalidImplementation" },
  {
    type: "error",
    inputs: [{ name: "version", internalType: "uint32", type: "uint32" }],
    name: "InvalidMetadataVersion",
  },
  { type: "error", inputs: [], name: "InvalidOwner" },
  { type: "error", inputs: [], name: "InvalidStringLength" },
  { type: "error", inputs: [], name: "InvalidTokenManagerImplementation" },
  { type: "error", inputs: [], name: "LengthMismatch" },
  {
    type: "error",
    inputs: [{ name: "err", internalType: "bytes", type: "bytes" }],
    name: "MulticallFailed",
  },
  { type: "error", inputs: [], name: "NotApprovedByGateway" },
  { type: "error", inputs: [], name: "NotCanonicalTokenManager" },
  { type: "error", inputs: [], name: "NotOperator" },
  { type: "error", inputs: [], name: "NotOwner" },
  { type: "error", inputs: [], name: "NotProxy" },
  { type: "error", inputs: [], name: "NotRemoteService" },
  { type: "error", inputs: [], name: "NotTokenManager" },
  { type: "error", inputs: [], name: "Paused" },
  { type: "error", inputs: [], name: "SameDestinationAsCaller" },
  { type: "error", inputs: [], name: "SelectorUnknown" },
  { type: "error", inputs: [], name: "SetupFailed" },
  { type: "error", inputs: [], name: "StandardizedTokenDeploymentFailed" },
  { type: "error", inputs: [], name: "TokenManagerDeploymentFailed" },
  {
    type: "error",
    inputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
    name: "TokenManagerDoesNotExist",
  },
  { type: "error", inputs: [], name: "TokenTransferFailed" },
  { type: "error", inputs: [], name: "ZeroAddress" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "deployer",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "salt", internalType: "bytes32", type: "bytes32", indexed: true },
    ],
    name: "CustomTokenIdClaimed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "destinationAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "sendHash",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "expressCaller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "ExpressExecutionFulfilled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "sourceChain",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "sourceAddress",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      {
        name: "destinationAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "data", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "sendHash",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "expressCaller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "ExpressExecutionWithDataFulfilled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "destinationAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "sendHash",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "expressCaller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "ExpressReceive",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "sourceChain",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "sourceAddress",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      {
        name: "destinationAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "data", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "sendHash",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "expressCaller",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "ExpressReceiveWithData",
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
      { name: "paused", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "PausedSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "tokenName",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "tokenSymbol",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "tokenDecimals",
        internalType: "uint8",
        type: "uint8",
        indexed: false,
      },
      {
        name: "distributor",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      { name: "operator", internalType: "bytes", type: "bytes", indexed: true },
      {
        name: "destinationChain",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "gasValue",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "RemoteStandardizedTokenAndManagerDeploymentInitialized",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "destinationChain",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "gasValue",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "tokenManagerType",
        internalType: "enum ITokenManagerType.TokenManagerType",
        type: "uint8",
        indexed: true,
      },
      { name: "params", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "RemoteTokenManagerDeploymentInitialized",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
      {
        name: "symbol",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "decimals",
        internalType: "uint8",
        type: "uint8",
        indexed: false,
      },
      {
        name: "mintAmount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "mintTo",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "StandardizedTokenDeployed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "tokenManagerType",
        internalType: "enum ITokenManagerType.TokenManagerType",
        type: "uint8",
        indexed: true,
      },
      { name: "params", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "TokenManagerDeployed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "sourceChain",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "destinationAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "TokenReceived",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "sourceChain",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "destinationAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "sourceAddress",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      { name: "data", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "TokenReceivedWithData",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: false,
      },
      {
        name: "destinationChain",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "destinationAddress",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "TokenSent",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenId",
        internalType: "bytes32",
        type: "bytes32",
        indexed: false,
      },
      {
        name: "destinationChain",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "destinationAddress",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "sourceAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "data", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "TokenSentWithData",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "newImplementation",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Upgraded",
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [],
    name: "contractId",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "name", internalType: "string", type: "string" },
      { name: "symbol", internalType: "string", type: "string" },
      { name: "decimals", internalType: "uint8", type: "uint8" },
      { name: "distributor", internalType: "bytes", type: "bytes" },
      { name: "operator", internalType: "bytes", type: "bytes" },
      { name: "destinationChain", internalType: "string", type: "string" },
      { name: "gasValue", internalType: "uint256", type: "uint256" },
    ],
    name: "deployAndRegisterRemoteStandardizedToken",
    outputs: [],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "name", internalType: "string", type: "string" },
      { name: "symbol", internalType: "string", type: "string" },
      { name: "decimals", internalType: "uint8", type: "uint8" },
      { name: "mintAmount", internalType: "uint256", type: "uint256" },
      { name: "distributor", internalType: "address", type: "address" },
    ],
    name: "deployAndRegisterStandardizedToken",
    outputs: [],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      {
        name: "tokenManagerType",
        internalType: "enum ITokenManagerType.TokenManagerType",
        type: "uint8",
      },
      { name: "params", internalType: "bytes", type: "bytes" },
    ],
    name: "deployCustomTokenManager",
    outputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "tokenId", internalType: "bytes32", type: "bytes32" },
      { name: "destinationChain", internalType: "string", type: "string" },
      { name: "gasValue", internalType: "uint256", type: "uint256" },
    ],
    name: "deployRemoteCanonicalToken",
    outputs: [],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "destinationChain", internalType: "string", type: "string" },
      {
        name: "tokenManagerType",
        internalType: "enum ITokenManagerType.TokenManagerType",
        type: "uint8",
      },
      { name: "params", internalType: "bytes", type: "bytes" },
      { name: "gasValue", internalType: "uint256", type: "uint256" },
    ],
    name: "deployRemoteCustomTokenManager",
    outputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "commandId", internalType: "bytes32", type: "bytes32" },
      { name: "sourceChain", internalType: "string", type: "string" },
      { name: "sourceAddress", internalType: "string", type: "string" },
      { name: "payload", internalType: "bytes", type: "bytes" },
    ],
    name: "execute",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "commandId", internalType: "bytes32", type: "bytes32" },
      { name: "sourceChain", internalType: "string", type: "string" },
      { name: "sourceAddress", internalType: "string", type: "string" },
      { name: "payload", internalType: "bytes", type: "bytes" },
      { name: "tokenSymbol", internalType: "string", type: "string" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "executeWithToken",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "tokenId", internalType: "bytes32", type: "bytes32" },
      { name: "destinationAddress", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "commandId", internalType: "bytes32", type: "bytes32" },
    ],
    name: "expressReceiveToken",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "tokenId", internalType: "bytes32", type: "bytes32" },
      { name: "sourceChain", internalType: "string", type: "string" },
      { name: "sourceAddress", internalType: "bytes", type: "bytes" },
      { name: "destinationAddress", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
      { name: "commandId", internalType: "bytes32", type: "bytes32" },
    ],
    name: "expressReceiveTokenWithData",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "gasService",
    outputs: [
      { name: "", internalType: "contract IAxelarGasService", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "gateway",
    outputs: [
      { name: "", internalType: "contract IAxelarGateway", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "tokenAddress", internalType: "address", type: "address" },
    ],
    name: "getCanonicalTokenId",
    outputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "getChainName",
    outputs: [{ name: "name", internalType: "string", type: "string" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "sender", internalType: "address", type: "address" },
      { name: "salt", internalType: "bytes32", type: "bytes32" },
    ],
    name: "getCustomTokenId",
    outputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "tokenId", internalType: "bytes32", type: "bytes32" },
      { name: "destinationAddress", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "commandId", internalType: "bytes32", type: "bytes32" },
    ],
    name: "getExpressReceiveToken",
    outputs: [
      { name: "expressCaller", internalType: "address", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "tokenId", internalType: "bytes32", type: "bytes32" },
      { name: "sourceChain", internalType: "string", type: "string" },
      { name: "sourceAddress", internalType: "bytes", type: "bytes" },
      { name: "destinationAddress", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
      { name: "commandId", internalType: "bytes32", type: "bytes32" },
    ],
    name: "getExpressReceiveTokenWithData",
    outputs: [
      { name: "expressCaller", internalType: "address", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
    name: "getFlowInAmount",
    outputs: [
      { name: "flowInAmount", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
    name: "getFlowLimit",
    outputs: [{ name: "flowLimit", internalType: "uint256", type: "uint256" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
    name: "getFlowOutAmount",
    outputs: [
      { name: "flowOutAmount", internalType: "uint256", type: "uint256" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [
      { name: "tokenManagerType", internalType: "uint256", type: "uint256" },
    ],
    name: "getImplementation",
    outputs: [
      { name: "tokenManagerAddress", internalType: "address", type: "address" },
    ],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "operator", internalType: "bytes", type: "bytes" },
      { name: "tokenAddress", internalType: "address", type: "address" },
      {
        name: "liquidityPoolAddress",
        internalType: "address",
        type: "address",
      },
    ],
    name: "getParamsLiquidityPool",
    outputs: [{ name: "params", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "operator", internalType: "bytes", type: "bytes" },
      { name: "tokenAddress", internalType: "address", type: "address" },
    ],
    name: "getParamsLockUnlock",
    outputs: [{ name: "params", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "pure",
    type: "function",
    inputs: [
      { name: "operator", internalType: "bytes", type: "bytes" },
      { name: "tokenAddress", internalType: "address", type: "address" },
    ],
    name: "getParamsMintBurn",
    outputs: [{ name: "params", internalType: "bytes", type: "bytes" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
    name: "getStandardizedTokenAddress",
    outputs: [
      { name: "tokenAddress", internalType: "address", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
    name: "getTokenAddress",
    outputs: [
      { name: "tokenAddress", internalType: "address", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
    name: "getTokenManagerAddress",
    outputs: [
      { name: "tokenManagerAddress", internalType: "address", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
    name: "getValidTokenManagerAddress",
    outputs: [
      { name: "tokenManagerAddress", internalType: "address", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "implementation",
    outputs: [
      { name: "implementation_", internalType: "address", type: "address" },
    ],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "isPaused",
    outputs: [{ name: "paused", internalType: "bool", type: "bool" }],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [{ name: "data", internalType: "bytes[]", type: "bytes[]" }],
    name: "multicall",
    outputs: [{ name: "results", internalType: "bytes[]", type: "bytes[]" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "operator",
    outputs: [{ name: "operator_", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "owner_", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "pendingOwner",
    outputs: [{ name: "owner_", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "proposeOwnership",
    outputs: [],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "tokenAddress", internalType: "address", type: "address" },
    ],
    name: "registerCanonicalToken",
    outputs: [{ name: "tokenId", internalType: "bytes32", type: "bytes32" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "remoteAddressValidator",
    outputs: [
      {
        name: "",
        internalType: "contract IRemoteAddressValidator",
        type: "address",
      },
    ],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "tokenIds", internalType: "bytes32[]", type: "bytes32[]" },
      { name: "flowLimits", internalType: "uint256[]", type: "uint256[]" },
    ],
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
    inputs: [{ name: "paused", internalType: "bool", type: "bool" }],
    name: "setPaused",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "data", internalType: "bytes", type: "bytes" }],
    name: "setup",
    outputs: [],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "standardizedTokenDeployer",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "view",
    type: "function",
    inputs: [],
    name: "tokenManagerDeployer",
    outputs: [{ name: "", internalType: "address", type: "address" }],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
  },
  {
    stateMutability: "payable",
    type: "function",
    inputs: [
      { name: "tokenId", internalType: "bytes32", type: "bytes32" },
      { name: "sourceAddress", internalType: "address", type: "address" },
      { name: "destinationChain", internalType: "string", type: "string" },
      { name: "destinationAddress", internalType: "bytes", type: "bytes" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "metadata", internalType: "bytes", type: "bytes" },
    ],
    name: "transmitSendToken",
    outputs: [],
  },
  {
    stateMutability: "nonpayable",
    type: "function",
    inputs: [
      { name: "newImplementation", internalType: "address", type: "address" },
      {
        name: "newImplementationCodeHash",
        internalType: "bytes32",
        type: "bytes32",
      },
      { name: "params", internalType: "bytes", type: "bytes" },
    ],
    name: "upgrade",
    outputs: [],
  },
] as const;

export const interchainTokenServiceAddress =
  "0xF786e21509A9D50a9aFD033B5940A2b7D872C208" as const;

export const interchainTokenServiceConfig = {
  address: interchainTokenServiceAddress,
  abi: interchainTokenServiceABI,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__.
 */
export function useInterchainTokenServiceRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"contractId"`.
 */
export function useInterchainTokenServiceContractId<
  TFunctionName extends "contractId",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "contractId",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"gasService"`.
 */
export function useInterchainTokenServiceGasService<
  TFunctionName extends "gasService",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "gasService",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"gateway"`.
 */
export function useInterchainTokenServiceGateway<
  TFunctionName extends "gateway",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "gateway",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getCanonicalTokenId"`.
 */
export function useInterchainTokenServiceGetCanonicalTokenId<
  TFunctionName extends "getCanonicalTokenId",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getCanonicalTokenId",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getChainName"`.
 */
export function useInterchainTokenServiceGetChainName<
  TFunctionName extends "getChainName",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getChainName",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getCustomTokenId"`.
 */
export function useInterchainTokenServiceGetCustomTokenId<
  TFunctionName extends "getCustomTokenId",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getCustomTokenId",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getExpressReceiveToken"`.
 */
export function useInterchainTokenServiceGetExpressReceiveToken<
  TFunctionName extends "getExpressReceiveToken",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getExpressReceiveToken",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getExpressReceiveTokenWithData"`.
 */
export function useInterchainTokenServiceGetExpressReceiveTokenWithData<
  TFunctionName extends "getExpressReceiveTokenWithData",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getExpressReceiveTokenWithData",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getFlowInAmount"`.
 */
export function useInterchainTokenServiceGetFlowInAmount<
  TFunctionName extends "getFlowInAmount",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getFlowInAmount",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getFlowLimit"`.
 */
export function useInterchainTokenServiceGetFlowLimit<
  TFunctionName extends "getFlowLimit",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getFlowLimit",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getFlowOutAmount"`.
 */
export function useInterchainTokenServiceGetFlowOutAmount<
  TFunctionName extends "getFlowOutAmount",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getFlowOutAmount",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getImplementation"`.
 */
export function useInterchainTokenServiceGetImplementation<
  TFunctionName extends "getImplementation",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getImplementation",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getParamsLiquidityPool"`.
 */
export function useInterchainTokenServiceGetParamsLiquidityPool<
  TFunctionName extends "getParamsLiquidityPool",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getParamsLiquidityPool",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getParamsLockUnlock"`.
 */
export function useInterchainTokenServiceGetParamsLockUnlock<
  TFunctionName extends "getParamsLockUnlock",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getParamsLockUnlock",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getParamsMintBurn"`.
 */
export function useInterchainTokenServiceGetParamsMintBurn<
  TFunctionName extends "getParamsMintBurn",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getParamsMintBurn",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getStandardizedTokenAddress"`.
 */
export function useInterchainTokenServiceGetStandardizedTokenAddress<
  TFunctionName extends "getStandardizedTokenAddress",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getStandardizedTokenAddress",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getTokenAddress"`.
 */
export function useInterchainTokenServiceGetTokenAddress<
  TFunctionName extends "getTokenAddress",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getTokenAddress",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getTokenManagerAddress"`.
 */
export function useInterchainTokenServiceGetTokenManagerAddress<
  TFunctionName extends "getTokenManagerAddress",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getTokenManagerAddress",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"getValidTokenManagerAddress"`.
 */
export function useInterchainTokenServiceGetValidTokenManagerAddress<
  TFunctionName extends "getValidTokenManagerAddress",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "getValidTokenManagerAddress",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"implementation"`.
 */
export function useInterchainTokenServiceImplementation<
  TFunctionName extends "implementation",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "implementation",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"isPaused"`.
 */
export function useInterchainTokenServiceIsPaused<
  TFunctionName extends "isPaused",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "isPaused",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"operator"`.
 */
export function useInterchainTokenServiceOperator<
  TFunctionName extends "operator",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "operator",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"owner"`.
 */
export function useInterchainTokenServiceOwner<
  TFunctionName extends "owner",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "owner",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"pendingOwner"`.
 */
export function useInterchainTokenServicePendingOwner<
  TFunctionName extends "pendingOwner",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "pendingOwner",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"remoteAddressValidator"`.
 */
export function useInterchainTokenServiceRemoteAddressValidator<
  TFunctionName extends "remoteAddressValidator",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "remoteAddressValidator",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"standardizedTokenDeployer"`.
 */
export function useInterchainTokenServiceStandardizedTokenDeployer<
  TFunctionName extends "standardizedTokenDeployer",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "standardizedTokenDeployer",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"tokenManagerDeployer"`.
 */
export function useInterchainTokenServiceTokenManagerDeployer<
  TFunctionName extends "tokenManagerDeployer",
  TSelectData = ReadContractResult<
    typeof interchainTokenServiceABI,
    TFunctionName
  >
>(
  config: Omit<
    UseContractReadConfig<
      typeof interchainTokenServiceABI,
      TFunctionName,
      TSelectData
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return useContractRead({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "tokenManagerDeployer",
    ...config,
  } as UseContractReadConfig<typeof interchainTokenServiceABI, TFunctionName, TSelectData>);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__.
 */
export function useInterchainTokenServiceWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          string
        >["request"]["abi"],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        TFunctionName,
        TMode
      > & {
        abi?: never;
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    TFunctionName,
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function useInterchainTokenServiceAcceptOwnership<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "acceptOwnership"
        >["request"]["abi"],
        "acceptOwnership",
        TMode
      > & { functionName?: "acceptOwnership" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "acceptOwnership",
        TMode
      > & {
        abi?: never;
        functionName?: "acceptOwnership";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "acceptOwnership",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "acceptOwnership",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"deployAndRegisterRemoteStandardizedToken"`.
 */
export function useInterchainTokenServiceDeployAndRegisterRemoteStandardizedToken<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "deployAndRegisterRemoteStandardizedToken"
        >["request"]["abi"],
        "deployAndRegisterRemoteStandardizedToken",
        TMode
      > & { functionName?: "deployAndRegisterRemoteStandardizedToken" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "deployAndRegisterRemoteStandardizedToken",
        TMode
      > & {
        abi?: never;
        functionName?: "deployAndRegisterRemoteStandardizedToken";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "deployAndRegisterRemoteStandardizedToken",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "deployAndRegisterRemoteStandardizedToken",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"deployAndRegisterStandardizedToken"`.
 */
export function useInterchainTokenServiceDeployAndRegisterStandardizedToken<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "deployAndRegisterStandardizedToken"
        >["request"]["abi"],
        "deployAndRegisterStandardizedToken",
        TMode
      > & { functionName?: "deployAndRegisterStandardizedToken" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "deployAndRegisterStandardizedToken",
        TMode
      > & {
        abi?: never;
        functionName?: "deployAndRegisterStandardizedToken";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "deployAndRegisterStandardizedToken",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "deployAndRegisterStandardizedToken",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"deployCustomTokenManager"`.
 */
export function useInterchainTokenServiceDeployCustomTokenManager<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "deployCustomTokenManager"
        >["request"]["abi"],
        "deployCustomTokenManager",
        TMode
      > & { functionName?: "deployCustomTokenManager" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "deployCustomTokenManager",
        TMode
      > & {
        abi?: never;
        functionName?: "deployCustomTokenManager";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "deployCustomTokenManager",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "deployCustomTokenManager",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"deployRemoteCanonicalToken"`.
 */
export function useInterchainTokenServiceDeployRemoteCanonicalToken<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "deployRemoteCanonicalToken"
        >["request"]["abi"],
        "deployRemoteCanonicalToken",
        TMode
      > & { functionName?: "deployRemoteCanonicalToken" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "deployRemoteCanonicalToken",
        TMode
      > & {
        abi?: never;
        functionName?: "deployRemoteCanonicalToken";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "deployRemoteCanonicalToken",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "deployRemoteCanonicalToken",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"deployRemoteCustomTokenManager"`.
 */
export function useInterchainTokenServiceDeployRemoteCustomTokenManager<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "deployRemoteCustomTokenManager"
        >["request"]["abi"],
        "deployRemoteCustomTokenManager",
        TMode
      > & { functionName?: "deployRemoteCustomTokenManager" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "deployRemoteCustomTokenManager",
        TMode
      > & {
        abi?: never;
        functionName?: "deployRemoteCustomTokenManager";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "deployRemoteCustomTokenManager",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "deployRemoteCustomTokenManager",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"execute"`.
 */
export function useInterchainTokenServiceExecute<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "execute"
        >["request"]["abi"],
        "execute",
        TMode
      > & { functionName?: "execute" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "execute",
        TMode
      > & {
        abi?: never;
        functionName?: "execute";
      } = {} as any
) {
  return useContractWrite<typeof interchainTokenServiceABI, "execute", TMode>({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "execute",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"executeWithToken"`.
 */
export function useInterchainTokenServiceExecuteWithToken<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "executeWithToken"
        >["request"]["abi"],
        "executeWithToken",
        TMode
      > & { functionName?: "executeWithToken" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "executeWithToken",
        TMode
      > & {
        abi?: never;
        functionName?: "executeWithToken";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "executeWithToken",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "executeWithToken",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"expressReceiveToken"`.
 */
export function useInterchainTokenServiceExpressReceiveToken<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "expressReceiveToken"
        >["request"]["abi"],
        "expressReceiveToken",
        TMode
      > & { functionName?: "expressReceiveToken" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "expressReceiveToken",
        TMode
      > & {
        abi?: never;
        functionName?: "expressReceiveToken";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "expressReceiveToken",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "expressReceiveToken",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"expressReceiveTokenWithData"`.
 */
export function useInterchainTokenServiceExpressReceiveTokenWithData<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "expressReceiveTokenWithData"
        >["request"]["abi"],
        "expressReceiveTokenWithData",
        TMode
      > & { functionName?: "expressReceiveTokenWithData" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "expressReceiveTokenWithData",
        TMode
      > & {
        abi?: never;
        functionName?: "expressReceiveTokenWithData";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "expressReceiveTokenWithData",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "expressReceiveTokenWithData",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"multicall"`.
 */
export function useInterchainTokenServiceMulticall<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "multicall"
        >["request"]["abi"],
        "multicall",
        TMode
      > & { functionName?: "multicall" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "multicall",
        TMode
      > & {
        abi?: never;
        functionName?: "multicall";
      } = {} as any
) {
  return useContractWrite<typeof interchainTokenServiceABI, "multicall", TMode>(
    {
      abi: interchainTokenServiceABI,
      address: interchainTokenServiceAddress,
      functionName: "multicall",
      ...config,
    } as any
  );
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"proposeOwnership"`.
 */
export function useInterchainTokenServiceProposeOwnership<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "proposeOwnership"
        >["request"]["abi"],
        "proposeOwnership",
        TMode
      > & { functionName?: "proposeOwnership" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "proposeOwnership",
        TMode
      > & {
        abi?: never;
        functionName?: "proposeOwnership";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "proposeOwnership",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "proposeOwnership",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"registerCanonicalToken"`.
 */
export function useInterchainTokenServiceRegisterCanonicalToken<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "registerCanonicalToken"
        >["request"]["abi"],
        "registerCanonicalToken",
        TMode
      > & { functionName?: "registerCanonicalToken" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "registerCanonicalToken",
        TMode
      > & {
        abi?: never;
        functionName?: "registerCanonicalToken";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "registerCanonicalToken",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "registerCanonicalToken",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"setFlowLimit"`.
 */
export function useInterchainTokenServiceSetFlowLimit<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "setFlowLimit"
        >["request"]["abi"],
        "setFlowLimit",
        TMode
      > & { functionName?: "setFlowLimit" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "setFlowLimit",
        TMode
      > & {
        abi?: never;
        functionName?: "setFlowLimit";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "setFlowLimit",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "setFlowLimit",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"setOperator"`.
 */
export function useInterchainTokenServiceSetOperator<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "setOperator"
        >["request"]["abi"],
        "setOperator",
        TMode
      > & { functionName?: "setOperator" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "setOperator",
        TMode
      > & {
        abi?: never;
        functionName?: "setOperator";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "setOperator",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "setOperator",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"setPaused"`.
 */
export function useInterchainTokenServiceSetPaused<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "setPaused"
        >["request"]["abi"],
        "setPaused",
        TMode
      > & { functionName?: "setPaused" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "setPaused",
        TMode
      > & {
        abi?: never;
        functionName?: "setPaused";
      } = {} as any
) {
  return useContractWrite<typeof interchainTokenServiceABI, "setPaused", TMode>(
    {
      abi: interchainTokenServiceABI,
      address: interchainTokenServiceAddress,
      functionName: "setPaused",
      ...config,
    } as any
  );
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"setup"`.
 */
export function useInterchainTokenServiceSetup<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "setup"
        >["request"]["abi"],
        "setup",
        TMode
      > & { functionName?: "setup" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "setup",
        TMode
      > & {
        abi?: never;
        functionName?: "setup";
      } = {} as any
) {
  return useContractWrite<typeof interchainTokenServiceABI, "setup", TMode>({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "setup",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useInterchainTokenServiceTransferOwnership<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "transferOwnership"
        >["request"]["abi"],
        "transferOwnership",
        TMode
      > & { functionName?: "transferOwnership" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "transferOwnership",
        TMode
      > & {
        abi?: never;
        functionName?: "transferOwnership";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "transferOwnership",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "transferOwnership",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"transmitSendToken"`.
 */
export function useInterchainTokenServiceTransmitSendToken<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "transmitSendToken"
        >["request"]["abi"],
        "transmitSendToken",
        TMode
      > & { functionName?: "transmitSendToken" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "transmitSendToken",
        TMode
      > & {
        abi?: never;
        functionName?: "transmitSendToken";
      } = {} as any
) {
  return useContractWrite<
    typeof interchainTokenServiceABI,
    "transmitSendToken",
    TMode
  >({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "transmitSendToken",
    ...config,
  } as any);
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"upgrade"`.
 */
export function useInterchainTokenServiceUpgrade<
  TMode extends WriteContractMode = undefined
>(
  config: TMode extends "prepared"
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof interchainTokenServiceABI,
          "upgrade"
        >["request"]["abi"],
        "upgrade",
        TMode
      > & { functionName?: "upgrade" }
    : UseContractWriteConfig<
        typeof interchainTokenServiceABI,
        "upgrade",
        TMode
      > & {
        abi?: never;
        functionName?: "upgrade";
      } = {} as any
) {
  return useContractWrite<typeof interchainTokenServiceABI, "upgrade", TMode>({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "upgrade",
    ...config,
  } as any);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__.
 */
export function usePrepareInterchainTokenServiceWrite<
  TFunctionName extends string
>(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      TFunctionName
    >,
    "abi" | "address"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, TFunctionName>);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function usePrepareInterchainTokenServiceAcceptOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "acceptOwnership"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "acceptOwnership",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "acceptOwnership">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"deployAndRegisterRemoteStandardizedToken"`.
 */
export function usePrepareInterchainTokenServiceDeployAndRegisterRemoteStandardizedToken(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "deployAndRegisterRemoteStandardizedToken"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "deployAndRegisterRemoteStandardizedToken",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "deployAndRegisterRemoteStandardizedToken">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"deployAndRegisterStandardizedToken"`.
 */
export function usePrepareInterchainTokenServiceDeployAndRegisterStandardizedToken(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "deployAndRegisterStandardizedToken"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "deployAndRegisterStandardizedToken",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "deployAndRegisterStandardizedToken">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"deployCustomTokenManager"`.
 */
export function usePrepareInterchainTokenServiceDeployCustomTokenManager(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "deployCustomTokenManager"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "deployCustomTokenManager",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "deployCustomTokenManager">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"deployRemoteCanonicalToken"`.
 */
export function usePrepareInterchainTokenServiceDeployRemoteCanonicalToken(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "deployRemoteCanonicalToken"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "deployRemoteCanonicalToken",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "deployRemoteCanonicalToken">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"deployRemoteCustomTokenManager"`.
 */
export function usePrepareInterchainTokenServiceDeployRemoteCustomTokenManager(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "deployRemoteCustomTokenManager"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "deployRemoteCustomTokenManager",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "deployRemoteCustomTokenManager">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"execute"`.
 */
export function usePrepareInterchainTokenServiceExecute(
  config: Omit<
    UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "execute">,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "execute",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "execute">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"executeWithToken"`.
 */
export function usePrepareInterchainTokenServiceExecuteWithToken(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "executeWithToken"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "executeWithToken",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "executeWithToken">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"expressReceiveToken"`.
 */
export function usePrepareInterchainTokenServiceExpressReceiveToken(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "expressReceiveToken"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "expressReceiveToken",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "expressReceiveToken">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"expressReceiveTokenWithData"`.
 */
export function usePrepareInterchainTokenServiceExpressReceiveTokenWithData(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "expressReceiveTokenWithData"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "expressReceiveTokenWithData",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "expressReceiveTokenWithData">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"multicall"`.
 */
export function usePrepareInterchainTokenServiceMulticall(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "multicall"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "multicall",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "multicall">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"proposeOwnership"`.
 */
export function usePrepareInterchainTokenServiceProposeOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "proposeOwnership"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "proposeOwnership",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "proposeOwnership">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"registerCanonicalToken"`.
 */
export function usePrepareInterchainTokenServiceRegisterCanonicalToken(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "registerCanonicalToken"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "registerCanonicalToken",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "registerCanonicalToken">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"setFlowLimit"`.
 */
export function usePrepareInterchainTokenServiceSetFlowLimit(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "setFlowLimit"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "setFlowLimit",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "setFlowLimit">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"setOperator"`.
 */
export function usePrepareInterchainTokenServiceSetOperator(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "setOperator"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "setOperator",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "setOperator">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"setPaused"`.
 */
export function usePrepareInterchainTokenServiceSetPaused(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "setPaused"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "setPaused",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "setPaused">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"setup"`.
 */
export function usePrepareInterchainTokenServiceSetup(
  config: Omit<
    UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "setup">,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "setup",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "setup">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareInterchainTokenServiceTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "transferOwnership"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "transferOwnership",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "transferOwnership">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"transmitSendToken"`.
 */
export function usePrepareInterchainTokenServiceTransmitSendToken(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof interchainTokenServiceABI,
      "transmitSendToken"
    >,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "transmitSendToken",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "transmitSendToken">);
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `functionName` set to `"upgrade"`.
 */
export function usePrepareInterchainTokenServiceUpgrade(
  config: Omit<
    UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "upgrade">,
    "abi" | "address" | "functionName"
  > = {} as any
) {
  return usePrepareContractWrite({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    functionName: "upgrade",
    ...config,
  } as UsePrepareContractWriteConfig<typeof interchainTokenServiceABI, "upgrade">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__.
 */
export function useInterchainTokenServiceEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof interchainTokenServiceABI, TEventName>,
    "abi" | "address"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, TEventName>);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"CustomTokenIdClaimed"`.
 */
export function useInterchainTokenServiceCustomTokenIdClaimedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof interchainTokenServiceABI,
      "CustomTokenIdClaimed"
    >,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "CustomTokenIdClaimed",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "CustomTokenIdClaimed">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"ExpressExecutionFulfilled"`.
 */
export function useInterchainTokenServiceExpressExecutionFulfilledEvent(
  config: Omit<
    UseContractEventConfig<
      typeof interchainTokenServiceABI,
      "ExpressExecutionFulfilled"
    >,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "ExpressExecutionFulfilled",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "ExpressExecutionFulfilled">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"ExpressExecutionWithDataFulfilled"`.
 */
export function useInterchainTokenServiceExpressExecutionWithDataFulfilledEvent(
  config: Omit<
    UseContractEventConfig<
      typeof interchainTokenServiceABI,
      "ExpressExecutionWithDataFulfilled"
    >,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "ExpressExecutionWithDataFulfilled",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "ExpressExecutionWithDataFulfilled">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"ExpressReceive"`.
 */
export function useInterchainTokenServiceExpressReceiveEvent(
  config: Omit<
    UseContractEventConfig<typeof interchainTokenServiceABI, "ExpressReceive">,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "ExpressReceive",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "ExpressReceive">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"ExpressReceiveWithData"`.
 */
export function useInterchainTokenServiceExpressReceiveWithDataEvent(
  config: Omit<
    UseContractEventConfig<
      typeof interchainTokenServiceABI,
      "ExpressReceiveWithData"
    >,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "ExpressReceiveWithData",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "ExpressReceiveWithData">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"OperatorChanged"`.
 */
export function useInterchainTokenServiceOperatorChangedEvent(
  config: Omit<
    UseContractEventConfig<typeof interchainTokenServiceABI, "OperatorChanged">,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "OperatorChanged",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "OperatorChanged">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"OwnershipTransferStarted"`.
 */
export function useInterchainTokenServiceOwnershipTransferStartedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof interchainTokenServiceABI,
      "OwnershipTransferStarted"
    >,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "OwnershipTransferStarted",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "OwnershipTransferStarted">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useInterchainTokenServiceOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<
      typeof interchainTokenServiceABI,
      "OwnershipTransferred"
    >,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "OwnershipTransferred",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "OwnershipTransferred">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"PausedSet"`.
 */
export function useInterchainTokenServicePausedSetEvent(
  config: Omit<
    UseContractEventConfig<typeof interchainTokenServiceABI, "PausedSet">,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "PausedSet",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "PausedSet">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"RemoteStandardizedTokenAndManagerDeploymentInitialized"`.
 */
export function useInterchainTokenServiceRemoteStandardizedTokenAndManagerDeploymentInitializedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof interchainTokenServiceABI,
      "RemoteStandardizedTokenAndManagerDeploymentInitialized"
    >,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "RemoteStandardizedTokenAndManagerDeploymentInitialized",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "RemoteStandardizedTokenAndManagerDeploymentInitialized">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"RemoteTokenManagerDeploymentInitialized"`.
 */
export function useInterchainTokenServiceRemoteTokenManagerDeploymentInitializedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof interchainTokenServiceABI,
      "RemoteTokenManagerDeploymentInitialized"
    >,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "RemoteTokenManagerDeploymentInitialized",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "RemoteTokenManagerDeploymentInitialized">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"StandardizedTokenDeployed"`.
 */
export function useInterchainTokenServiceStandardizedTokenDeployedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof interchainTokenServiceABI,
      "StandardizedTokenDeployed"
    >,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "StandardizedTokenDeployed",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "StandardizedTokenDeployed">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"TokenManagerDeployed"`.
 */
export function useInterchainTokenServiceTokenManagerDeployedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof interchainTokenServiceABI,
      "TokenManagerDeployed"
    >,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "TokenManagerDeployed",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "TokenManagerDeployed">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"TokenReceived"`.
 */
export function useInterchainTokenServiceTokenReceivedEvent(
  config: Omit<
    UseContractEventConfig<typeof interchainTokenServiceABI, "TokenReceived">,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "TokenReceived",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "TokenReceived">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"TokenReceivedWithData"`.
 */
export function useInterchainTokenServiceTokenReceivedWithDataEvent(
  config: Omit<
    UseContractEventConfig<
      typeof interchainTokenServiceABI,
      "TokenReceivedWithData"
    >,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "TokenReceivedWithData",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "TokenReceivedWithData">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"TokenSent"`.
 */
export function useInterchainTokenServiceTokenSentEvent(
  config: Omit<
    UseContractEventConfig<typeof interchainTokenServiceABI, "TokenSent">,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "TokenSent",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "TokenSent">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"TokenSentWithData"`.
 */
export function useInterchainTokenServiceTokenSentWithDataEvent(
  config: Omit<
    UseContractEventConfig<
      typeof interchainTokenServiceABI,
      "TokenSentWithData"
    >,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "TokenSentWithData",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "TokenSentWithData">);
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link interchainTokenServiceABI}__ and `eventName` set to `"Upgraded"`.
 */
export function useInterchainTokenServiceUpgradedEvent(
  config: Omit<
    UseContractEventConfig<typeof interchainTokenServiceABI, "Upgraded">,
    "abi" | "address" | "eventName"
  > = {} as any
) {
  return useContractEvent({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    eventName: "Upgraded",
    ...config,
  } as UseContractEventConfig<typeof interchainTokenServiceABI, "Upgraded">);
}
