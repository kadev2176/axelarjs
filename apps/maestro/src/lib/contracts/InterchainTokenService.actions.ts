/* eslint-disable @typescript-eslint/consistent-type-imports */

import {
  getContract,
  GetContractArgs,
  prepareWriteContract,
  PrepareWriteContractConfig,
  readContract,
  ReadContractConfig,
  writeContract,
  WriteContractArgs,
  WriteContractPreparedArgs,
  WriteContractUnpreparedArgs,
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
// Core
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link getContract}__ with `abi` set to __{@link interchainTokenServiceABI}__.
 */
export function getInterchainTokenService(
  config: Omit<GetContractArgs, "abi" | "address">
) {
  return getContract({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    ...config,
  });
}

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link interchainTokenServiceABI}__.
 */
export function readInterchainTokenService<
  TAbi extends readonly unknown[] = typeof interchainTokenServiceABI,
  TFunctionName extends string = string
>(config: Omit<ReadContractConfig<TAbi, TFunctionName>, "abi" | "address">) {
  return readContract({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    ...config,
  } as unknown as ReadContractConfig<TAbi, TFunctionName>);
}

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link interchainTokenServiceABI}__.
 */
export function writeInterchainTokenService<TFunctionName extends string>(
  config:
    | Omit<
        WriteContractPreparedArgs<
          typeof interchainTokenServiceABI,
          TFunctionName
        >,
        "abi" | "address"
      >
    | Omit<
        WriteContractUnpreparedArgs<
          typeof interchainTokenServiceABI,
          TFunctionName
        >,
        "abi" | "address"
      >
) {
  return writeContract({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    ...config,
  } as unknown as WriteContractArgs<typeof interchainTokenServiceABI, TFunctionName>);
}

/**
 * Wraps __{@link prepareWriteContract}__ with `abi` set to __{@link interchainTokenServiceABI}__.
 */
export function prepareWriteInterchainTokenService<
  TAbi extends readonly unknown[] = typeof interchainTokenServiceABI,
  TFunctionName extends string = string
>(
  config: Omit<
    PrepareWriteContractConfig<TAbi, TFunctionName>,
    "abi" | "address"
  >
) {
  return prepareWriteContract({
    abi: interchainTokenServiceABI,
    address: interchainTokenServiceAddress,
    ...config,
  } as unknown as PrepareWriteContractConfig<TAbi, TFunctionName>);
}
