/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file was generated by scripts/codegen.ts
 *
 * Original abi file:
 * - node_modules/@axelar-network/interchain-token-service/artifacts/contracts/interfaces/IInterchainTokenFactory.sol/IInterchainTokenFactory.json
 *
 * DO NOT EDIT MANUALLY
 */

export default {
  contractName: "IInterchainTokenFactory",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "tokenAddress",
          type: "address",
        },
      ],
      name: "GatewayToken",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidChainName",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "minter",
          type: "address",
        },
      ],
      name: "NotMinter",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "NotOperator",
      type: "error",
    },
    {
      inputs: [],
      name: "ZeroAddress",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "tokenAddress",
          type: "address",
        },
      ],
      name: "canonicalInterchainTokenId",
      outputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "chainNameHash_",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "tokenAddress",
          type: "address",
        },
      ],
      name: "canonicalInterchainTokenSalt",
      outputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "chainNameHash",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "symbol",
          type: "string",
        },
        {
          internalType: "uint8",
          name: "decimals",
          type: "uint8",
        },
        {
          internalType: "uint256",
          name: "initialSupply",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "minter",
          type: "address",
        },
      ],
      name: "deployInterchainToken",
      outputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "originalChain",
          type: "string",
        },
        {
          internalType: "address",
          name: "originalTokenAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "destinationChain",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "gasValue",
          type: "uint256",
        },
      ],
      name: "deployRemoteCanonicalInterchainToken",
      outputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "originalChainName",
          type: "string",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "minter",
          type: "address",
        },
        {
          internalType: "string",
          name: "destinationChain",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "gasValue",
          type: "uint256",
        },
      ],
      name: "deployRemoteInterchainToken",
      outputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "deployer",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "interchainTokenAddress",
      outputs: [
        {
          internalType: "address",
          name: "tokenAddress",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "deployer",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "interchainTokenId",
      outputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "chainNameHash_",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "deployer",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "interchainTokenSalt",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "tokenAddress",
          type: "address",
        },
      ],
      name: "registerCanonicalInterchainToken",
      outputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
  ],
} as const;
