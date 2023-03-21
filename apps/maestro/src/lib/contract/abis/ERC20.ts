export default {
  _format: "hh-sol-artifact-1",
  contractName: "ERC20",
  sourceName: "contracts/ERC20.sol",
  abi: [
    {
      inputs: [],
      name: "InvalidAccount",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "subtractedValue",
          type: "uint256",
        },
      ],
      name: "decreaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "addedValue",
          type: "uint256",
        },
      ],
      name: "increaseAllowance",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "address",
          name: "recipient",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x608060405234801561001057600080fd5b5061052f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806370a082311161005b57806370a08231146100f2578063a457c2d714610112578063a9059cbb14610125578063dd62ed3e1461013857600080fd5b8063095ea7b31461008d57806318160ddd146100b557806323b872dd146100cc57806339509351146100df575b600080fd5b6100a061009b3660046103e0565b610163565b60405190151581526020015b60405180910390f35b6100be60025481565b6040519081526020016100ac565b6100a06100da36600461040a565b610179565b6100a06100ed3660046103e0565b6101d0565b6100be610100366004610446565b60006020819052908152604090205481565b6100a06101203660046103e0565b610207565b6100a06101333660046103e0565b61023e565b6100be610146366004610468565b600160209081526000928352604080842090915290825290205481565b600061017033848461024b565b50600192915050565b6001600160a01b038316600090815260016020908152604080832033845290915281205460001981146101ba576101ba85336101b586856104ca565b61024b565b6101c58585856102e8565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916101709185906101b59086906104e1565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916101709185906101b59086906104ca565b60006101703384846102e8565b6001600160a01b038316158061026857506001600160a01b038216155b1561028657604051630da30f6560e31b815260040160405180910390fd5b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316158061030557506001600160a01b038216155b1561032357604051630da30f6560e31b815260040160405180910390fd5b6001600160a01b0383166000908152602081905260408120805483929061034b9084906104ca565b90915550506001600160a01b038216600090815260208190526040812080548392906103789084906104e1565b92505081905550816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516102db91815260200190565b80356001600160a01b03811681146103db57600080fd5b919050565b600080604083850312156103f357600080fd5b6103fc836103c4565b946020939093013593505050565b60008060006060848603121561041f57600080fd5b610428846103c4565b9250610436602085016103c4565b9150604084013590509250925092565b60006020828403121561045857600080fd5b610461826103c4565b9392505050565b6000806040838503121561047b57600080fd5b610484836103c4565b9150610492602084016103c4565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156104dc576104dc61049b565b500390565b600082198211156104f4576104f461049b565b50019056fea26469706673582212200050fe7d0fc20d985da288da86c5158d4d09d151b33eb8518883a9070dbf3fcd64736f6c63430008090033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106100885760003560e01c806370a082311161005b57806370a08231146100f2578063a457c2d714610112578063a9059cbb14610125578063dd62ed3e1461013857600080fd5b8063095ea7b31461008d57806318160ddd146100b557806323b872dd146100cc57806339509351146100df575b600080fd5b6100a061009b3660046103e0565b610163565b60405190151581526020015b60405180910390f35b6100be60025481565b6040519081526020016100ac565b6100a06100da36600461040a565b610179565b6100a06100ed3660046103e0565b6101d0565b6100be610100366004610446565b60006020819052908152604090205481565b6100a06101203660046103e0565b610207565b6100a06101333660046103e0565b61023e565b6100be610146366004610468565b600160209081526000928352604080842090915290825290205481565b600061017033848461024b565b50600192915050565b6001600160a01b038316600090815260016020908152604080832033845290915281205460001981146101ba576101ba85336101b586856104ca565b61024b565b6101c58585856102e8565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916101709185906101b59086906104e1565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916101709185906101b59086906104ca565b60006101703384846102e8565b6001600160a01b038316158061026857506001600160a01b038216155b1561028657604051630da30f6560e31b815260040160405180910390fd5b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038316158061030557506001600160a01b038216155b1561032357604051630da30f6560e31b815260040160405180910390fd5b6001600160a01b0383166000908152602081905260408120805483929061034b9084906104ca565b90915550506001600160a01b038216600090815260208190526040812080548392906103789084906104e1565b92505081905550816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516102db91815260200190565b80356001600160a01b03811681146103db57600080fd5b919050565b600080604083850312156103f357600080fd5b6103fc836103c4565b946020939093013593505050565b60008060006060848603121561041f57600080fd5b610428846103c4565b9250610436602085016103c4565b9150604084013590509250925092565b60006020828403121561045857600080fd5b610461826103c4565b9392505050565b6000806040838503121561047b57600080fd5b610484836103c4565b9150610492602084016103c4565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156104dc576104dc61049b565b500390565b600082198211156104f4576104f461049b565b50019056fea26469706673582212200050fe7d0fc20d985da288da86c5158d4d09d151b33eb8518883a9070dbf3fcd64736f6c63430008090033",
  linkReferences: {},
  deployedLinkReferences: {},
};
