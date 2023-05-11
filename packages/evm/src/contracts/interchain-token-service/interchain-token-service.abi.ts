export default {
  _format: "hh-sol-artifact-1",
  contractName: "InterchainTokenService",
  sourceName: "contracts/interchainTokenService/InterchainTokenService.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "gatewayAddress_",
          type: "address",
        },
        {
          internalType: "address",
          name: "gasServiceAddress_",
          type: "address",
        },
        {
          internalType: "address",
          name: "linkerRouterAddress_",
          type: "address",
        },
        {
          internalType: "address",
          name: "tokenDeployerAddress_",
          type: "address",
        },
        {
          internalType: "string",
          name: "chainName_",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "AlreadyRegistered",
      type: "error",
    },
    {
      inputs: [],
      name: "BurnFailed",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
      ],
      name: "ExceedMintLimit",
      type: "error",
    },
    {
      inputs: [],
      name: "GatewayToken",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidAddress",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidCodeHash",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidImplementation",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidOwner",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidStringLength",
      type: "error",
    },
    {
      inputs: [],
      name: "LengthMismatch",
      type: "error",
    },
    {
      inputs: [],
      name: "MintFailed",
      type: "error",
    },
    {
      inputs: [],
      name: "NotApprovedByGateway",
      type: "error",
    },
    {
      inputs: [],
      name: "NotGatewayToken",
      type: "error",
    },
    {
      inputs: [],
      name: "NotOriginToken",
      type: "error",
    },
    {
      inputs: [],
      name: "NotOwner",
      type: "error",
    },
    {
      inputs: [],
      name: "NotProxy",
      type: "error",
    },
    {
      inputs: [],
      name: "NotSelf",
      type: "error",
    },
    {
      inputs: [],
      name: "SetupFailed",
      type: "error",
    },
    {
      inputs: [],
      name: "TokenDeploymentFailed",
      type: "error",
    },
    {
      inputs: [],
      name: "TokenServiceZeroAddress",
      type: "error",
    },
    {
      inputs: [],
      name: "TransferFailed",
      type: "error",
    },
    {
      inputs: [],
      name: "TransferFromFailed",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferStarted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "sourceChain",
          type: "string",
        },
        {
          indexed: true,
          internalType: "address",
          name: "destinationAddress",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Receiving",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "sourceChain",
          type: "string",
        },
        {
          indexed: true,
          internalType: "address",
          name: "destinationAddress",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "ReceivingWithData",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "string",
          name: "destinationChain",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "gasValue",
          type: "uint256",
        },
      ],
      name: "RemoteTokenRegisterInitialized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "destinationChain",
          type: "string",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "destinationAddress",
          type: "bytes",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Sending",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "destinationChain",
          type: "string",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "destinationAddress",
          type: "bytes",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "SendingWithData",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "tokenAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "symbol",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "decimals",
          type: "uint8",
        },
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "TokenDeployed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "tokenAddress",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "native",
          type: "bool",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "gateway",
          type: "bool",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "remoteGateway",
          type: "bool",
        },
      ],
      name: "TokenRegistered",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newImplementation",
          type: "address",
        },
      ],
      name: "Upgraded",
      type: "event",
    },
    {
      inputs: [],
      name: "acceptOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
        {
          internalType: "string",
          name: "destinationChain",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "to",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "callContractWithInterToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "string",
          name: "destinationChain",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "to",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "callContractWithSelf",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "chainName",
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
      inputs: [],
      name: "contractId",
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
          internalType: "string",
          name: "tokenName",
          type: "string",
        },
        {
          internalType: "string",
          name: "tokenSymbol",
          type: "string",
        },
        {
          internalType: "uint8",
          name: "decimals",
          type: "uint8",
        },
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "string[]",
          name: "",
          type: "string[]",
        },
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
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
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
        {
          internalType: "string[]",
          name: "destinationChains",
          type: "string[]",
        },
        {
          internalType: "uint256[]",
          name: "gasValues",
          type: "uint256[]",
        },
      ],
      name: "deployRemoteTokens",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "commandId",
          type: "bytes32",
        },
        {
          internalType: "string",
          name: "sourceChain",
          type: "string",
        },
        {
          internalType: "string",
          name: "sourceAddress",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "payload",
          type: "bytes",
        },
      ],
      name: "execute",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "commandId",
          type: "bytes32",
        },
        {
          internalType: "string",
          name: "sourceChain",
          type: "string",
        },
        {
          internalType: "string",
          name: "sourceAddress",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "payload",
          type: "bytes",
        },
        {
          internalType: "string",
          name: "tokenSymbol",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "executeWithToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "gasService",
      outputs: [
        {
          internalType: "contract IAxelarGasService",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "gateway",
      outputs: [
        {
          internalType: "contract IAxelarGateway",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "key",
          type: "bytes32",
        },
      ],
      name: "getAddress",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "key",
          type: "bytes32",
        },
      ],
      name: "getBool",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "key",
          type: "bytes32",
        },
      ],
      name: "getBytes",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes",
        },
      ],
      stateMutability: "view",
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
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
      ],
      name: "getDeploymentAddress",
      outputs: [
        {
          internalType: "address",
          name: "deployment",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "key",
          type: "bytes32",
        },
      ],
      name: "getInt",
      outputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
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
      name: "getOriginTokenId",
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
          name: "tokenId",
          type: "bytes32",
        },
      ],
      name: "getOriginalChain",
      outputs: [
        {
          internalType: "string",
          name: "originalChain",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "key",
          type: "bytes32",
        },
      ],
      name: "getString",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
      ],
      name: "getTokenAddress",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
      ],
      name: "getTokenData",
      outputs: [
        {
          internalType: "bytes32",
          name: "tokenData",
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
      name: "getTokenId",
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
          name: "tokenId",
          type: "bytes32",
        },
      ],
      name: "getTokenMintLimit",
      outputs: [
        {
          internalType: "uint256",
          name: "mintLimit",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "key",
          type: "bytes32",
        },
      ],
      name: "getUint",
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
      inputs: [],
      name: "implementation",
      outputs: [
        {
          internalType: "address",
          name: "implementation_",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "linkerRouter",
      outputs: [
        {
          internalType: "contract ILinkerRouter",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "owner_",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pendingOwner",
      outputs: [
        {
          internalType: "address",
          name: "owner_",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "symbol",
          type: "string",
        },
      ],
      name: "registerOriginGatewayToken",
      outputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
      ],
      stateMutability: "nonpayable",
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
      name: "registerOriginToken",
      outputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "tokenAddress",
          type: "address",
        },
        {
          internalType: "string[]",
          name: "destinationChains",
          type: "string[]",
        },
        {
          internalType: "uint256[]",
          name: "gasValues",
          type: "uint256[]",
        },
      ],
      name: "registerOriginTokenAndDeployRemoteTokens",
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
          name: "symbol",
          type: "string",
        },
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
        {
          internalType: "string",
          name: "origin",
          type: "string",
        },
      ],
      name: "registerRemoteGatewayToken",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "string",
          name: "destinationChain",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "to",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "sendSelf",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "tokenId",
          type: "bytes32",
        },
        {
          internalType: "string",
          name: "destinationChain",
          type: "string",
        },
        {
          internalType: "bytes",
          name: "to",
          type: "bytes",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "sendToken",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "setup",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "tokenDeployer",
      outputs: [
        {
          internalType: "contract ITokenDeployer",
          name: "",
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
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newImplementation",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "newImplementationCodeHash",
          type: "bytes32",
        },
        {
          internalType: "bytes",
          name: "params",
          type: "bytes",
        },
      ],
      name: "upgrade",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x6101406040523480156200001257600080fd5b506040516200275638038062002756833981016040819052620000359162000182565b846001600160a01b0381166200005e5760405163e6c4247b60e01b815260040160405180910390fd5b6001600160a01b03908116608052851615806200008257506001600160a01b038416155b806200009557506001600160a01b038316155b15620000b457604051631b1dea0760e21b815260040160405180910390fd5b6001600160a01b0384811660a05283811660c052821660e052620000e481620000ff602090811b6200131a17901c565b6101205280516020909101206101005250620002d492505050565b805160009082901580620001145750601f8151115b156200013357604051638dc6ac0160e01b815260040160405180910390fd5b60006200014082620002ac565b915160ff169091179392505050565b80516001600160a01b03811681146200016757600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080600060a086880312156200019b57600080fd5b620001a6866200014f565b94506020620001b78188016200014f565b9450620001c7604088016200014f565b9350620001d7606088016200014f565b60808801519093506001600160401b0380821115620001f557600080fd5b818901915089601f8301126200020a57600080fd5b8151818111156200021f576200021f6200016c565b604051601f8201601f19908116603f011681019083821181831017156200024a576200024a6200016c565b816040528281528c868487010111156200026357600080fd5b600093505b8284101562000287578484018601518185018701529285019262000268565b82841115620002995760008684830101525b8096505050505050509295509295909350565b80516020808301519190811015620002ce576000198160200360031b1b821691505b50919050565b60805160a05160c05160e051610100516101205161240f6200034760003960006103740152600081816105b40152610b8e0152600081816103ec015281816111ac01526113fc015260006102b7015260006104c9015260008181610308015281816108bb01526109da015261240f6000f3fe6080604052600436106102a05760003560e01c80638d2431951161016e578063c2aa7afc116100cb578063dc97d9621161007f578063ec352e9211610064578063ec352e9214610811578063f153768614610831578063f2fde38b1461085157600080fd5b8063dc97d962146107b0578063e30c3978146107dd57600080fd5b8063d267a5cd116100b0578063d267a5cd14610767578063d2e0504214610782578063d8ab3e4b146107a257600080fd5b8063c2aa7afc1461073a578063c591cbdc1461075357600080fd5b8063a495389211610122578063b70bdb8a11610107578063b70bdb8a146106cd578063bd02d0f5146106ed578063c031a1801461071a57600080fd5b8063a49538921461068a578063b12e4410146106ad57600080fd5b8063986e791a11610153578063986e791a1461061d5780639ded06df1461064a578063a3499c731461066a57600080fd5b80638d243195146105d65780638da5cb5b146105e957600080fd5b80634db904781161021c5780637ae1cfca116101d05780638291286c116101b55780638291286c1461056057806384be642614610594578063864a0dcf146105a257600080fd5b80637ae1cfca146105005780637ce521931461054057600080fd5b80635c60da1b116102015780635c60da1b146104835780636a22d8cc146104b757806379ba5097146104eb57600080fd5b80634db904781461044e57806356e432b41461046357600080fd5b80631c93b03a116102735780632a2dae0a116102585780632a2dae0a146103da57806338f297171461040e578063491606581461042e57600080fd5b80631c93b03a1461036257806321f8a721146103a457600080fd5b80630a8a0287146102a5578063116191b6146102f65780631a98b2e01461032a5780631ad103d41461034c575b600080fd5b3480156102b157600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561030257600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b34801561033657600080fd5b5061034a610345366004611914565b610871565b005b61034a61035a366004611ab3565b505050505050565b34801561036e57600080fd5b506103967f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016102ed565b3480156103b057600080fd5b506102d96103bf366004611b55565b6000908152600260205260409020546001600160a01b031690565b3480156103e657600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b34801561041a57600080fd5b50610396610429366004611b55565b61097c565b34801561043a57600080fd5b5061034a610449366004611b6e565b610990565b61034a61045c366004611c57565b5050505050565b34801561046f57600080fd5b5061039661047e366004611b55565b610a92565b34801561048f57600080fd5b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546102d9565b3480156104c357600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b3480156104f757600080fd5b5061034a610aa0565b34801561050c57600080fd5b5061053061051b366004611b55565b60009081526004602052604090205460ff1690565b60405190151581526020016102ed565b34801561054c57600080fd5b5061039661055b366004611cf9565b610b8a565b34801561056c57600080fd5b506103967ff407da03daa7b4243ffb261daad9b01d221ea90ab941948cd48101563654ea8581565b61034a61035a366004611d16565b3480156105ae57600080fd5b506103967f000000000000000000000000000000000000000000000000000000000000000081565b6103966105e4366004611d71565b610bee565b3480156105f557600080fd5b507f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0546102d9565b34801561062957600080fd5b5061063d610638366004611b55565b610cc5565b6040516102ed9190611ebc565b34801561065657600080fd5b5061034a610665366004611ecf565b610d67565b34801561067657600080fd5b5061034a610685366004611f11565b610dd6565b34801561069657600080fd5b506103966106a5366004611ecf565b600092915050565b3480156106b957600080fd5b506102d96106c8366004611b55565b6110f2565b3480156106d957600080fd5b506103966106e8366004611cf9565b611103565b3480156106f957600080fd5b50610396610708366004611b55565b60009081526020819052604090205490565b34801561072657600080fd5b5061063d610735366004611b55565b611121565b610396610748366004611f6d565b600095945050505050565b61034a610761366004611fad565b50505050565b34801561077357600080fd5b5061034a61045c36600461202b565b34801561078e57600080fd5b506102d961079d366004612094565b61113e565b61034a6107613660046120c0565b3480156107bc57600080fd5b506103966107cb366004611b55565b60009081526005602052604090205490565b3480156107e957600080fd5b507f9855384122b55936fbfb8ca5120e63c6537a1ac40caf6ae33502b3c5da8c87d1546102d9565b34801561081d57600080fd5b5061063d61082c366004611b55565b611235565b34801561083d57600080fd5b5061039661084c366004611cf9565b611264565b34801561085d57600080fd5b5061034a61086c366004611cf9565b611272565b600085856040516108839291906120f5565b6040519081900381207f1876eed900000000000000000000000000000000000000000000000000000000825291506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631876eed990610900908e908e908e908e908e9089908d908d908d9060040161212e565b602060405180830381600087803b15801561091a57600080fd5b505af115801561092e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610952919061218d565b61096f57604051631403112d60e21b815260040160405180910390fd5b5050505050505050505050565b600061098a6107088361137f565b92915050565b600082826040516109a29291906120f5565b6040519081900381207f5f6970c300000000000000000000000000000000000000000000000000000000825291506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635f6970c390610a19908b908b908b908b908b9089906004016121af565b602060405180830381600087803b158015610a3357600080fd5b505af1158015610a47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6b919061218d565b610a8857604051631403112d60e21b815260040160405180910390fd5b5050505050505050565b600061098a610708836113ba565b6000610aca7f9855384122b55936fbfb8ca5120e63c6537a1ac40caf6ae33502b3c5da8c87d15490565b90506001600160a01b0381163314610b0e576040517f49e27cff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040516001600160a01b038216907f04dba622d284ed0014ee4b9a6a68386be1a4c08a4913ae272de89199cc68616390600090a260007f9855384122b55936fbfb8ca5120e63c6537a1ac40caf6ae33502b3c5da8c87d1557f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c055565b60007f000000000000000000000000000000000000000000000000000000000000000082604051602001610bd19291909182526001600160a01b0316602082015260400190565b604051602081830303815290604052805190602001209050919050565b60408051336020808301919091528183018890528251808303840181526060909201909252805191012060009095506000610ca88d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508c8c8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508e92508d91508c90506113f5565b9050610cb38161159c565b509d9c50505050505050505050505050565b6000818152600160205260409020805460609190610ce2906121f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0e906121f0565b8015610d5b5780601f10610d3057610100808354040283529160200191610d5b565b820191906000526020600020905b815481529060010190602001808311610d3e57829003601f168201915b50505050509050919050565b6000610d917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b03161415610dd2576040517fbf10dd3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b33610dff7f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c05490565b6001600160a01b031614610e26576040516330cd747160e01b815260040160405180910390fd5b306001600160a01b0316638291286c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e5f57600080fd5b505afa158015610e73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e97919061222b565b846001600160a01b0316638291286c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ed057600080fd5b505afa158015610ee4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f08919061222b565b14610f3f576040517f68155f9a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836001600160a01b03163f8314610f82576040517f8f84fb2400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015611097576000846001600160a01b0316639ded06df60e01b8484604051602401610faf929190612244565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090941693909317909252905161101a9190612260565b600060405180830381855af49150503d8060008114611055576040519150601f19603f3d011682016040523d82523d6000602084013e61105a565b606091505b5050905080611095576040517f97905dfb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b6040516001600160a01b038516907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a25050507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b600061098a61110083610a92565b90565b600061110e8261166f565b50505061111a8261159c565b5092915050565b6000818152600360205260409020805460609190610ce2906121f0565b604080516001600160a01b038416602080830191909152818301849052825180830384018152606090920190925280519101206000906040517fd2e05042000000000000000000000000000000000000000000000000000000008152306004820152602481018290529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d2e050429060440160206040518083038186803b1580156111f657600080fd5b505afa15801561120a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122e919061227c565b9392505050565b60606000611245610708846117e6565b6040805180820190915260ff821681526020810182905290915061122e565b600061098a61070883611821565b3361129b7f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c05490565b6001600160a01b0316146112c2576040516330cd747160e01b815260040160405180910390fd5b6040516001600160a01b038216907fd9be0e8e07417e00f2521db636cb53e316fd288f5051f16d2aa2bf0c3938a87690600090a27f9855384122b55936fbfb8ca5120e63c6537a1ac40caf6ae33502b3c5da8c87d155565b80516000908290158061132e5750601f8151115b15611365576040517f8dc6ac0100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061137082612299565b915160ff169091179392505050565b604080517f401bcfc5029e1f6f5692d8cde7027e270bed05c34b12983db1b3eea0834922ae6020820152908101829052600090606001610bd1565b604080517f82b3d0905b3ae8ace0f16d08d11a1f97e7acf26462b397887d9a5e8e48b2192d6020820152908101829052600090606001610bd1565b60008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166388b79b4060e01b89898989896040516024016114459594939291906122bd565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925290516114b09190612260565b600060405180830381855af49150503d80600081146114eb576040519150601f19603f3d011682016040523d82523d6000602084013e6114f0565b606091505b50915091508161152c576040517fd0a30aa600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80806020019051810190611540919061227c565b9250846001600160a01b0316836001600160a01b03167f7b71d93d9296a649a9142345e1f28f976ded4e1e98518d042f99faa3372a32658a8a8a6040516115899392919061230c565b60405180910390a3505095945050505050565b600080806115a984611264565b146115c757604051630ea075bf60e21b815260040160405180910390fd5b6115d083610b8a565b915060006115dd83610a92565b146115fb57604051630ea075bf60e21b815260040160405180910390fd5b611606836001611868565b905061161282826118a0565b61161c83836118bf565b60408051600181526000602082018190528183015290516001600160a01b0385169184917f7f12cf155e17e75b92dba1c4d8149e23fae9bcc8501707833b324c07356c40099181900360600190a3915091565b606080600080849050806001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156116b357600080fd5b505af11580156116c7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526116ef9190810190612345565b9350806001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561172c57600080fd5b505af1158015611740573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526117689190810190612345565b9250806001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156117a557600080fd5b505af11580156117b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117dd91906123bc565b93959294505050565b604080517feda5378191ad52ee725a341c729f88ee6061f587764dfea97127a947bd8ba91d6020820152908101829052600090606001610bd1565b60007f98417f4eb569850fa976ce98b067069f5aa6d1659af1946dcee3ac620b0adef782604051602001610bd19291909182526001600160a01b0316602082015260400190565b6001600160a01b038216811561098a577f80000000000000000000000000000000000000000000000000000000000000001792915050565b610dd26118ac836113ba565b8260009182526020829052604090912055565b610dd26118ac83611821565b60008083601f8401126118dd57600080fd5b50813567ffffffffffffffff8111156118f557600080fd5b60208301915083602082850101111561190d57600080fd5b9250929050565b60008060008060008060008060008060c08b8d03121561193357600080fd5b8a35995060208b013567ffffffffffffffff8082111561195257600080fd5b61195e8e838f016118cb565b909b50995060408d013591508082111561197757600080fd5b6119838e838f016118cb565b909950975060608d013591508082111561199c57600080fd5b6119a88e838f016118cb565b909750955060808d01359150808211156119c157600080fd5b506119ce8d828e016118cb565b9150809450508092505060a08b013590509295989b9194979a5092959850565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611a2d57611a2d6119ee565b604052919050565b600067ffffffffffffffff821115611a4f57611a4f6119ee565b50601f01601f191660200190565b600082601f830112611a6e57600080fd5b8135611a81611a7c82611a35565b611a04565b818152846020838601011115611a9657600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060008060a08789031215611acc57600080fd5b86359550602087013567ffffffffffffffff80821115611aeb57600080fd5b611af78a838b01611a5d565b96506040890135915080821115611b0d57600080fd5b611b198a838b01611a5d565b9550606089013594506080890135915080821115611b3657600080fd5b50611b4389828a016118cb565b979a9699509497509295939492505050565b600060208284031215611b6757600080fd5b5035919050565b60008060008060008060006080888a031215611b8957600080fd5b87359650602088013567ffffffffffffffff80821115611ba857600080fd5b611bb48b838c016118cb565b909850965060408a0135915080821115611bcd57600080fd5b611bd98b838c016118cb565b909650945060608a0135915080821115611bf257600080fd5b50611bff8a828b016118cb565b989b979a50959850939692959293505050565b60008083601f840112611c2457600080fd5b50813567ffffffffffffffff811115611c3c57600080fd5b6020830191508360208260051b850101111561190d57600080fd5b600080600080600060608688031215611c6f57600080fd5b85359450602086013567ffffffffffffffff80821115611c8e57600080fd5b611c9a89838a01611c12565b90965094506040880135915080821115611cb357600080fd5b50611cc088828901611c12565b969995985093965092949392505050565b6001600160a01b0381168114611ce657600080fd5b50565b8035611cf481611cd1565b919050565b600060208284031215611d0b57600080fd5b813561122e81611cd1565b60008060008060008060a08789031215611d2f57600080fd5b8635611d3a81611cd1565b9550602087013567ffffffffffffffff80821115611aeb57600080fd5b60ff81168114611ce657600080fd5b8035611cf481611d57565b600080600080600080600080600080600060e08c8e031215611d9257600080fd5b67ffffffffffffffff808d351115611da957600080fd5b611db68e8e358f016118cb565b909c509a5060208d0135811015611dcc57600080fd5b611ddc8e60208f01358f016118cb565b909a509850611ded60408e01611d66565b9750611dfb60608e01611ce9565b965060808d013595508060a08e01351115611e1557600080fd5b611e258e60a08f01358f01611c12565b909550935060c08d0135811015611e3b57600080fd5b50611e4c8d60c08e01358e01611c12565b81935080925050509295989b509295989b9093969950565b60005b83811015611e7f578181015183820152602001611e67565b838111156107615750506000910152565b60008151808452611ea8816020860160208601611e64565b601f01601f19169290920160200192915050565b60208152600061122e6020830184611e90565b60008060208385031215611ee257600080fd5b823567ffffffffffffffff811115611ef957600080fd5b611f05858286016118cb565b90969095509350505050565b60008060008060608587031215611f2757600080fd5b8435611f3281611cd1565b935060208501359250604085013567ffffffffffffffff811115611f5557600080fd5b611f61878288016118cb565b95989497509550505050565b600080600080600060608688031215611f8557600080fd5b8535611f9081611cd1565b9450602086013567ffffffffffffffff80821115611c8e57600080fd5b60008060008060808587031215611fc357600080fd5b8435611fce81611cd1565b9350602085013567ffffffffffffffff80821115611feb57600080fd5b611ff788838901611a5d565b9450604087013591508082111561200d57600080fd5b5061201a87828801611a5d565b949793965093946060013593505050565b60008060008060006060868803121561204357600080fd5b853567ffffffffffffffff8082111561205b57600080fd5b61206789838a016118cb565b909750955060208801359450604088013591508082111561208757600080fd5b50611cc0888289016118cb565b600080604083850312156120a757600080fd5b82356120b281611cd1565b946020939093013593505050565b600080600080608085870312156120d657600080fd5b84359350602085013567ffffffffffffffff80821115611feb57600080fd5b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b89815260c06020820152600061214860c083018a8c612105565b828103604084015261215b81898b612105565b90508660608401528281036080840152612176818688612105565b9150508260a08301529a9950505050505050505050565b60006020828403121561219f57600080fd5b8151801515811461122e57600080fd5b8681526080602082015260006121c9608083018789612105565b82810360408401526121dc818688612105565b915050826060830152979650505050505050565b600181811c9082168061220457607f821691505b6020821081141561222557634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561223d57600080fd5b5051919050565b602081526000612258602083018486612105565b949350505050565b60008251612272818460208701611e64565b9190910192915050565b60006020828403121561228e57600080fd5b815161122e81611cd1565b805160208083015191908110156122255760001960209190910360031b1b16919050565b60a0815260006122d060a0830188611e90565b82810360208401526122e28188611e90565b60ff96909616604084015250506001600160a01b0392909216606083015260809091015292915050565b60608152600061231f6060830186611e90565b82810360208401526123318186611e90565b91505060ff83166040830152949350505050565b60006020828403121561235757600080fd5b815167ffffffffffffffff81111561236e57600080fd5b8201601f8101841361237f57600080fd5b805161238d611a7c82611a35565b8181528560208385010111156123a257600080fd5b6123b3826020830160208601611e64565b95945050505050565b6000602082840312156123ce57600080fd5b815161122e81611d5756fea26469706673582212203323c3df59106e30b9748ff7ee4cd70977d14da87e5d5ddb20ca22e0aa91bc5964736f6c63430008090033",
  deployedBytecode:
    "0x6080604052600436106102a05760003560e01c80638d2431951161016e578063c2aa7afc116100cb578063dc97d9621161007f578063ec352e9211610064578063ec352e9214610811578063f153768614610831578063f2fde38b1461085157600080fd5b8063dc97d962146107b0578063e30c3978146107dd57600080fd5b8063d267a5cd116100b0578063d267a5cd14610767578063d2e0504214610782578063d8ab3e4b146107a257600080fd5b8063c2aa7afc1461073a578063c591cbdc1461075357600080fd5b8063a495389211610122578063b70bdb8a11610107578063b70bdb8a146106cd578063bd02d0f5146106ed578063c031a1801461071a57600080fd5b8063a49538921461068a578063b12e4410146106ad57600080fd5b8063986e791a11610153578063986e791a1461061d5780639ded06df1461064a578063a3499c731461066a57600080fd5b80638d243195146105d65780638da5cb5b146105e957600080fd5b80634db904781161021c5780637ae1cfca116101d05780638291286c116101b55780638291286c1461056057806384be642614610594578063864a0dcf146105a257600080fd5b80637ae1cfca146105005780637ce521931461054057600080fd5b80635c60da1b116102015780635c60da1b146104835780636a22d8cc146104b757806379ba5097146104eb57600080fd5b80634db904781461044e57806356e432b41461046357600080fd5b80631c93b03a116102735780632a2dae0a116102585780632a2dae0a146103da57806338f297171461040e578063491606581461042e57600080fd5b80631c93b03a1461036257806321f8a721146103a457600080fd5b80630a8a0287146102a5578063116191b6146102f65780631a98b2e01461032a5780631ad103d41461034c575b600080fd5b3480156102b157600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561030257600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b34801561033657600080fd5b5061034a610345366004611914565b610871565b005b61034a61035a366004611ab3565b505050505050565b34801561036e57600080fd5b506103967f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016102ed565b3480156103b057600080fd5b506102d96103bf366004611b55565b6000908152600260205260409020546001600160a01b031690565b3480156103e657600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b34801561041a57600080fd5b50610396610429366004611b55565b61097c565b34801561043a57600080fd5b5061034a610449366004611b6e565b610990565b61034a61045c366004611c57565b5050505050565b34801561046f57600080fd5b5061039661047e366004611b55565b610a92565b34801561048f57600080fd5b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546102d9565b3480156104c357600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b3480156104f757600080fd5b5061034a610aa0565b34801561050c57600080fd5b5061053061051b366004611b55565b60009081526004602052604090205460ff1690565b60405190151581526020016102ed565b34801561054c57600080fd5b5061039661055b366004611cf9565b610b8a565b34801561056c57600080fd5b506103967ff407da03daa7b4243ffb261daad9b01d221ea90ab941948cd48101563654ea8581565b61034a61035a366004611d16565b3480156105ae57600080fd5b506103967f000000000000000000000000000000000000000000000000000000000000000081565b6103966105e4366004611d71565b610bee565b3480156105f557600080fd5b507f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0546102d9565b34801561062957600080fd5b5061063d610638366004611b55565b610cc5565b6040516102ed9190611ebc565b34801561065657600080fd5b5061034a610665366004611ecf565b610d67565b34801561067657600080fd5b5061034a610685366004611f11565b610dd6565b34801561069657600080fd5b506103966106a5366004611ecf565b600092915050565b3480156106b957600080fd5b506102d96106c8366004611b55565b6110f2565b3480156106d957600080fd5b506103966106e8366004611cf9565b611103565b3480156106f957600080fd5b50610396610708366004611b55565b60009081526020819052604090205490565b34801561072657600080fd5b5061063d610735366004611b55565b611121565b610396610748366004611f6d565b600095945050505050565b61034a610761366004611fad565b50505050565b34801561077357600080fd5b5061034a61045c36600461202b565b34801561078e57600080fd5b506102d961079d366004612094565b61113e565b61034a6107613660046120c0565b3480156107bc57600080fd5b506103966107cb366004611b55565b60009081526005602052604090205490565b3480156107e957600080fd5b507f9855384122b55936fbfb8ca5120e63c6537a1ac40caf6ae33502b3c5da8c87d1546102d9565b34801561081d57600080fd5b5061063d61082c366004611b55565b611235565b34801561083d57600080fd5b5061039661084c366004611cf9565b611264565b34801561085d57600080fd5b5061034a61086c366004611cf9565b611272565b600085856040516108839291906120f5565b6040519081900381207f1876eed900000000000000000000000000000000000000000000000000000000825291506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631876eed990610900908e908e908e908e908e9089908d908d908d9060040161212e565b602060405180830381600087803b15801561091a57600080fd5b505af115801561092e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610952919061218d565b61096f57604051631403112d60e21b815260040160405180910390fd5b5050505050505050505050565b600061098a6107088361137f565b92915050565b600082826040516109a29291906120f5565b6040519081900381207f5f6970c300000000000000000000000000000000000000000000000000000000825291506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635f6970c390610a19908b908b908b908b908b9089906004016121af565b602060405180830381600087803b158015610a3357600080fd5b505af1158015610a47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6b919061218d565b610a8857604051631403112d60e21b815260040160405180910390fd5b5050505050505050565b600061098a610708836113ba565b6000610aca7f9855384122b55936fbfb8ca5120e63c6537a1ac40caf6ae33502b3c5da8c87d15490565b90506001600160a01b0381163314610b0e576040517f49e27cff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040516001600160a01b038216907f04dba622d284ed0014ee4b9a6a68386be1a4c08a4913ae272de89199cc68616390600090a260007f9855384122b55936fbfb8ca5120e63c6537a1ac40caf6ae33502b3c5da8c87d1557f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c055565b60007f000000000000000000000000000000000000000000000000000000000000000082604051602001610bd19291909182526001600160a01b0316602082015260400190565b604051602081830303815290604052805190602001209050919050565b60408051336020808301919091528183018890528251808303840181526060909201909252805191012060009095506000610ca88d8d8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508c8c8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508e92508d91508c90506113f5565b9050610cb38161159c565b509d9c50505050505050505050505050565b6000818152600160205260409020805460609190610ce2906121f0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0e906121f0565b8015610d5b5780601f10610d3057610100808354040283529160200191610d5b565b820191906000526020600020905b815481529060010190602001808311610d3e57829003601f168201915b50505050509050919050565b6000610d917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b03161415610dd2576040517fbf10dd3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b33610dff7f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c05490565b6001600160a01b031614610e26576040516330cd747160e01b815260040160405180910390fd5b306001600160a01b0316638291286c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e5f57600080fd5b505afa158015610e73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e97919061222b565b846001600160a01b0316638291286c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ed057600080fd5b505afa158015610ee4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f08919061222b565b14610f3f576040517f68155f9a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836001600160a01b03163f8314610f82576040517f8f84fb2400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8015611097576000846001600160a01b0316639ded06df60e01b8484604051602401610faf929190612244565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090941693909317909252905161101a9190612260565b600060405180830381855af49150503d8060008114611055576040519150601f19603f3d011682016040523d82523d6000602084013e61105a565b606091505b5050905080611095576040517f97905dfb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b6040516001600160a01b038516907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a25050507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b600061098a61110083610a92565b90565b600061110e8261166f565b50505061111a8261159c565b5092915050565b6000818152600360205260409020805460609190610ce2906121f0565b604080516001600160a01b038416602080830191909152818301849052825180830384018152606090920190925280519101206000906040517fd2e05042000000000000000000000000000000000000000000000000000000008152306004820152602481018290529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063d2e050429060440160206040518083038186803b1580156111f657600080fd5b505afa15801561120a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122e919061227c565b9392505050565b60606000611245610708846117e6565b6040805180820190915260ff821681526020810182905290915061122e565b600061098a61070883611821565b3361129b7f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c05490565b6001600160a01b0316146112c2576040516330cd747160e01b815260040160405180910390fd5b6040516001600160a01b038216907fd9be0e8e07417e00f2521db636cb53e316fd288f5051f16d2aa2bf0c3938a87690600090a27f9855384122b55936fbfb8ca5120e63c6537a1ac40caf6ae33502b3c5da8c87d155565b80516000908290158061132e5750601f8151115b15611365576040517f8dc6ac0100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061137082612299565b915160ff169091179392505050565b604080517f401bcfc5029e1f6f5692d8cde7027e270bed05c34b12983db1b3eea0834922ae6020820152908101829052600090606001610bd1565b604080517f82b3d0905b3ae8ace0f16d08d11a1f97e7acf26462b397887d9a5e8e48b2192d6020820152908101829052600090606001610bd1565b60008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166388b79b4060e01b89898989896040516024016114459594939291906122bd565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925290516114b09190612260565b600060405180830381855af49150503d80600081146114eb576040519150601f19603f3d011682016040523d82523d6000602084013e6114f0565b606091505b50915091508161152c576040517fd0a30aa600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80806020019051810190611540919061227c565b9250846001600160a01b0316836001600160a01b03167f7b71d93d9296a649a9142345e1f28f976ded4e1e98518d042f99faa3372a32658a8a8a6040516115899392919061230c565b60405180910390a3505095945050505050565b600080806115a984611264565b146115c757604051630ea075bf60e21b815260040160405180910390fd5b6115d083610b8a565b915060006115dd83610a92565b146115fb57604051630ea075bf60e21b815260040160405180910390fd5b611606836001611868565b905061161282826118a0565b61161c83836118bf565b60408051600181526000602082018190528183015290516001600160a01b0385169184917f7f12cf155e17e75b92dba1c4d8149e23fae9bcc8501707833b324c07356c40099181900360600190a3915091565b606080600080849050806001600160a01b03166306fdde036040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156116b357600080fd5b505af11580156116c7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526116ef9190810190612345565b9350806001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561172c57600080fd5b505af1158015611740573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526117689190810190612345565b9250806001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156117a557600080fd5b505af11580156117b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117dd91906123bc565b93959294505050565b604080517feda5378191ad52ee725a341c729f88ee6061f587764dfea97127a947bd8ba91d6020820152908101829052600090606001610bd1565b60007f98417f4eb569850fa976ce98b067069f5aa6d1659af1946dcee3ac620b0adef782604051602001610bd19291909182526001600160a01b0316602082015260400190565b6001600160a01b038216811561098a577f80000000000000000000000000000000000000000000000000000000000000001792915050565b610dd26118ac836113ba565b8260009182526020829052604090912055565b610dd26118ac83611821565b60008083601f8401126118dd57600080fd5b50813567ffffffffffffffff8111156118f557600080fd5b60208301915083602082850101111561190d57600080fd5b9250929050565b60008060008060008060008060008060c08b8d03121561193357600080fd5b8a35995060208b013567ffffffffffffffff8082111561195257600080fd5b61195e8e838f016118cb565b909b50995060408d013591508082111561197757600080fd5b6119838e838f016118cb565b909950975060608d013591508082111561199c57600080fd5b6119a88e838f016118cb565b909750955060808d01359150808211156119c157600080fd5b506119ce8d828e016118cb565b9150809450508092505060a08b013590509295989b9194979a5092959850565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611a2d57611a2d6119ee565b604052919050565b600067ffffffffffffffff821115611a4f57611a4f6119ee565b50601f01601f191660200190565b600082601f830112611a6e57600080fd5b8135611a81611a7c82611a35565b611a04565b818152846020838601011115611a9657600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060008060a08789031215611acc57600080fd5b86359550602087013567ffffffffffffffff80821115611aeb57600080fd5b611af78a838b01611a5d565b96506040890135915080821115611b0d57600080fd5b611b198a838b01611a5d565b9550606089013594506080890135915080821115611b3657600080fd5b50611b4389828a016118cb565b979a9699509497509295939492505050565b600060208284031215611b6757600080fd5b5035919050565b60008060008060008060006080888a031215611b8957600080fd5b87359650602088013567ffffffffffffffff80821115611ba857600080fd5b611bb48b838c016118cb565b909850965060408a0135915080821115611bcd57600080fd5b611bd98b838c016118cb565b909650945060608a0135915080821115611bf257600080fd5b50611bff8a828b016118cb565b989b979a50959850939692959293505050565b60008083601f840112611c2457600080fd5b50813567ffffffffffffffff811115611c3c57600080fd5b6020830191508360208260051b850101111561190d57600080fd5b600080600080600060608688031215611c6f57600080fd5b85359450602086013567ffffffffffffffff80821115611c8e57600080fd5b611c9a89838a01611c12565b90965094506040880135915080821115611cb357600080fd5b50611cc088828901611c12565b969995985093965092949392505050565b6001600160a01b0381168114611ce657600080fd5b50565b8035611cf481611cd1565b919050565b600060208284031215611d0b57600080fd5b813561122e81611cd1565b60008060008060008060a08789031215611d2f57600080fd5b8635611d3a81611cd1565b9550602087013567ffffffffffffffff80821115611aeb57600080fd5b60ff81168114611ce657600080fd5b8035611cf481611d57565b600080600080600080600080600080600060e08c8e031215611d9257600080fd5b67ffffffffffffffff808d351115611da957600080fd5b611db68e8e358f016118cb565b909c509a5060208d0135811015611dcc57600080fd5b611ddc8e60208f01358f016118cb565b909a509850611ded60408e01611d66565b9750611dfb60608e01611ce9565b965060808d013595508060a08e01351115611e1557600080fd5b611e258e60a08f01358f01611c12565b909550935060c08d0135811015611e3b57600080fd5b50611e4c8d60c08e01358e01611c12565b81935080925050509295989b509295989b9093969950565b60005b83811015611e7f578181015183820152602001611e67565b838111156107615750506000910152565b60008151808452611ea8816020860160208601611e64565b601f01601f19169290920160200192915050565b60208152600061122e6020830184611e90565b60008060208385031215611ee257600080fd5b823567ffffffffffffffff811115611ef957600080fd5b611f05858286016118cb565b90969095509350505050565b60008060008060608587031215611f2757600080fd5b8435611f3281611cd1565b935060208501359250604085013567ffffffffffffffff811115611f5557600080fd5b611f61878288016118cb565b95989497509550505050565b600080600080600060608688031215611f8557600080fd5b8535611f9081611cd1565b9450602086013567ffffffffffffffff80821115611c8e57600080fd5b60008060008060808587031215611fc357600080fd5b8435611fce81611cd1565b9350602085013567ffffffffffffffff80821115611feb57600080fd5b611ff788838901611a5d565b9450604087013591508082111561200d57600080fd5b5061201a87828801611a5d565b949793965093946060013593505050565b60008060008060006060868803121561204357600080fd5b853567ffffffffffffffff8082111561205b57600080fd5b61206789838a016118cb565b909750955060208801359450604088013591508082111561208757600080fd5b50611cc0888289016118cb565b600080604083850312156120a757600080fd5b82356120b281611cd1565b946020939093013593505050565b600080600080608085870312156120d657600080fd5b84359350602085013567ffffffffffffffff80821115611feb57600080fd5b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b89815260c06020820152600061214860c083018a8c612105565b828103604084015261215b81898b612105565b90508660608401528281036080840152612176818688612105565b9150508260a08301529a9950505050505050505050565b60006020828403121561219f57600080fd5b8151801515811461122e57600080fd5b8681526080602082015260006121c9608083018789612105565b82810360408401526121dc818688612105565b915050826060830152979650505050505050565b600181811c9082168061220457607f821691505b6020821081141561222557634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561223d57600080fd5b5051919050565b602081526000612258602083018486612105565b949350505050565b60008251612272818460208701611e64565b9190910192915050565b60006020828403121561228e57600080fd5b815161122e81611cd1565b805160208083015191908110156122255760001960209190910360031b1b16919050565b60a0815260006122d060a0830188611e90565b82810360208401526122e28188611e90565b60ff96909616604084015250506001600160a01b0392909216606083015260809091015292915050565b60608152600061231f6060830186611e90565b82810360208401526123318186611e90565b91505060ff83166040830152949350505050565b60006020828403121561235757600080fd5b815167ffffffffffffffff81111561236e57600080fd5b8201601f8101841361237f57600080fd5b805161238d611a7c82611a35565b8181528560208385010111156123a257600080fd5b6123b3826020830160208601611e64565b95945050505050565b6000602082840312156123ce57600080fd5b815161122e81611d5756fea26469706673582212203323c3df59106e30b9748ff7ee4cd70977d14da87e5d5ddb20ca22e0aa91bc5964736f6c63430008090033",
  linkReferences: {},
  deployedLinkReferences: {},
} as const;