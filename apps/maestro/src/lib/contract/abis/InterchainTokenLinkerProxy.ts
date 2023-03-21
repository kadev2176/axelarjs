export default {
  _format: "hh-sol-artifact-1",
  contractName: "InterchainTokenLinkerProxy",
  sourceName: "contracts/proxies/InterchainTokenLinkerProxy.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "address",
          name: "implementationAddress",
          type: "address",
        },
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "setupParams",
          type: "bytes",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "AlreadyDeployed",
      type: "error",
    },
    {
      inputs: [],
      name: "AlreadyInitialized",
      type: "error",
    },
    {
      inputs: [],
      name: "DeployFailed",
      type: "error",
    },
    {
      inputs: [],
      name: "EmptyBytecode",
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
      name: "NotOwner",
      type: "error",
    },
    {
      inputs: [],
      name: "SetupFailed",
      type: "error",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      inputs: [
        {
          internalType: "bytes",
          name: "bytecode",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "setupParams",
          type: "bytes",
        },
      ],
      name: "finalUpgrade",
      outputs: [
        {
          internalType: "address",
          name: "finalImplementation_",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
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
      name: "isFinal",
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
          internalType: "bytes",
          name: "setupParams",
          type: "bytes",
        },
      ],
      name: "setup",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ],
  bytecode:
    "0x60806040523480156200001157600080fd5b506040516200120738038062001207833981016040819052620000349162000461565b8282828282826001600160a01b03821662000062576040516349e27cff60e01b815260040160405180910390fd5b60006200006e62000268565b6001600160a01b031614620000955760405162dc149f60e41b815260040160405180910390fd5b7f6ec6af55bf1e5f27006bfa01248d73e8894ba06f23f8002b047607ff2b1944ba80846001600160a01b0316638291286c6040518163ffffffff1660e01b815260040160206040518083038186803b158015620000f157600080fd5b505afa15801562000106573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200012c919062000541565b146200014b5760405163340aafcd60e11b815260040160405180910390fd5b83600080516020620011e783398151915255827f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c055815160001462000258576000846001600160a01b0316639ded06df60e01b84604051602401620001b191906200055b565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051620001f1919062000590565b600060405180830381855af49150503d80600081146200022e576040519150601f19603f3d011682016040523d82523d6000602084013e62000233565b606091505b505090508062000256576040516397905dfb60e01b815260040160405180910390fd5b505b50505050505050505050620005ae565b600062000274620002a0565b90506001600160a01b0381166200029d576200029a620002f160201b620003681760201c565b90505b90565b6000620002d97f80df4dfef2d6527a47431f6f203697684e26d83f81418443821420778d4c4e8d306200030560201b6200038d1760201c565b90506001600160a01b0381163b6200029d5750600090565b600080516020620011e78339815191525490565b6000808284604051806020016200031c90620003ed565b6020820181038252601f19601f820116604052508051906020012060405160200162000390939291907fff00000000000000000000000000000000000000000000000000000000000000815260609390931b6001600160601b03191660018401526015830191909152603582015260550190565b60408051601f1981840301815282825280516020918201206135a560f21b8285015260601b6001600160601b0319166022840152600160f81b60368401528151601781850301815260379093019091528151910120949350505050565b610194806200105383390190565b80516001600160a01b03811681146200041357600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200044b57818101518382015260200162000431565b838111156200045b576000848401525b50505050565b6000806000606084860312156200047757600080fd5b6200048284620003fb565b92506200049260208501620003fb565b60408501519092506001600160401b0380821115620004b057600080fd5b818601915086601f830112620004c557600080fd5b815181811115620004da57620004da62000418565b604051601f8201601f19908116603f0116810190838211818310171562000505576200050562000418565b816040528281528960208487010111156200051f57600080fd5b620005328360208301602088016200042e565b80955050505050509250925092565b6000602082840312156200055457600080fd5b5051919050565b60208152600082518060208401526200057c8160408501602087016200042e565b601f01601f19169190910160400192915050565b60008251620005a48184602087016200042e565b9190910192915050565b610a9580620005be6000396000f3fe6080604052600436106100435760003560e01c80635c60da1b1461007a5780638b4de469146100ac5780639ded06df146100cc578063f3418781146100ed5761004a565b3661004a57005b6000610054610112565b90503660008037600080366000845af43d6000803e808015610075573d6000f35b3d6000fd5b34801561008657600080fd5b5061008f610112565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100b857600080fd5b5061008f6100c7366004610700565b610153565b3480156100d857600080fd5b506100eb6100e73660046107db565b5050565b005b3480156100f957600080fd5b5061010261034d565b60405190151581526020016100a3565b600061011c6104b3565b90506001600160a01b03811661015057507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545b90565b7f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c054600090336001600160a01b038216146101ba576040517f30cd747100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006101c4610112565b6001600160a01b031614610204576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61022e7f80df4dfef2d6527a47431f6f203697684e26d83f81418443821420778d4c4e8d866104f6565b91508215610345576000826001600160a01b0316639ded06df60e01b868660405160240161025d92919061081d565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925290516102c8919061087c565b600060405180830381855af49150503d8060008114610303576040519150601f19603f3d011682016040523d82523d6000602084013e610308565b606091505b5050905080610343576040517f97905dfb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b509392505050565b6000806103586104b3565b6001600160a01b03161415905090565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6000808284604051806020016103a29061067b565b6020820181038252601f19601f820116604052508051906020012060405160200161041a939291907fff00000000000000000000000000000000000000000000000000000000000000815260609390931b6bffffffffffffffffffffffff191660018401526015830191909152603582015260550190565b60408051601f1981840301815282825280516020918201207fd6940000000000000000000000000000000000000000000000000000000000008285015260601b6bffffffffffffffffffffffff191660228401527f010000000000000000000000000000000000000000000000000000000000000060368401528151601781850301815260379093019091528151910120949350505050565b60006104df7f80df4dfef2d6527a47431f6f203697684e26d83f81418443821420778d4c4e8d3061038d565b90506001600160a01b0381163b6101505750600090565b6000610502833061038d565b90506001600160a01b0381163f15610546576040517fa6ef0ba100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815161057e576040517f21744a5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008360405161058d9061067b565b8190604051809103906000f59050801580156105ad573d6000803e3d6000fd5b5090506001600160a01b0381166105d75760405163b4f5411160e01b815260040160405180910390fd5b6040517e7743600000000000000000000000000000000000000000000000000000000081526001600160a01b03821690627743609061061a908690600401610898565b600060405180830381600087803b15801561063457600080fd5b505af1158015610648573d6000803e3d6000fd5b505050506001600160a01b0382163f6106745760405163b4f5411160e01b815260040160405180910390fd5b5092915050565b610194806108cc83390190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008083601f8401126106c957600080fd5b50813567ffffffffffffffff8111156106e157600080fd5b6020830191508360208285010111156106f957600080fd5b9250929050565b60008060006040848603121561071557600080fd5b833567ffffffffffffffff8082111561072d57600080fd5b818601915086601f83011261074157600080fd5b81358181111561075357610753610688565b604051601f8201601f19908116603f0116810190838211818310171561077b5761077b610688565b8160405282815289602084870101111561079457600080fd5b8260208601602083013760006020848301015280975050505060208601359150808211156107c157600080fd5b506107ce868287016106b7565b9497909650939450505050565b600080602083850312156107ee57600080fd5b823567ffffffffffffffff81111561080557600080fd5b610811858286016106b7565b90969095509350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60005b8381101561086757818101518382015260200161084f565b83811115610876576000848401525b50505050565b6000825161088e81846020870161084c565b9190910192915050565b60208152600082518060208401526108b781604085016020870161084c565b601f01601f1916919091016040019291505056fe608060405234801561001057600080fd5b50610174806100206000396000f3fe608060405234801561001057600080fd5b506004361061002a5760003560e01c80627743601461002f575b600080fd5b61004261003d36600461008d565b610044565b005b60008151602083016000f090508061005b57600080fd5b33ff5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561009f57600080fd5b813567ffffffffffffffff808211156100b757600080fd5b818401915084601f8301126100cb57600080fd5b8135818111156100dd576100dd61005e565b604051601f8201601f19908116603f011681019083821181831017156101055761010561005e565b8160405282815287602084870101111561011e57600080fd5b82602086016020830137600092810160200192909252509594505050505056fea264697066735822122018be06721a0a18ceea937df7a7728d8e5fa0473338ea98bf4b56d3f2276d0a6464736f6c63430008090033a26469706673582212207a56afadddc51af6fd62410e6417e1473b2286c64ffd9039d792541156319f9e64736f6c63430008090033608060405234801561001057600080fd5b50610174806100206000396000f3fe608060405234801561001057600080fd5b506004361061002a5760003560e01c80627743601461002f575b600080fd5b61004261003d36600461008d565b610044565b005b60008151602083016000f090508061005b57600080fd5b33ff5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561009f57600080fd5b813567ffffffffffffffff808211156100b757600080fd5b818401915084601f8301126100cb57600080fd5b8135818111156100dd576100dd61005e565b604051601f8201601f19908116603f011681019083821181831017156101055761010561005e565b8160405282815287602084870101111561011e57600080fd5b82602086016020830137600092810160200192909252509594505050505056fea264697066735822122018be06721a0a18ceea937df7a7728d8e5fa0473338ea98bf4b56d3f2276d0a6464736f6c63430008090033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc",
  deployedBytecode:
    "0x6080604052600436106100435760003560e01c80635c60da1b1461007a5780638b4de469146100ac5780639ded06df146100cc578063f3418781146100ed5761004a565b3661004a57005b6000610054610112565b90503660008037600080366000845af43d6000803e808015610075573d6000f35b3d6000fd5b34801561008657600080fd5b5061008f610112565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100b857600080fd5b5061008f6100c7366004610700565b610153565b3480156100d857600080fd5b506100eb6100e73660046107db565b5050565b005b3480156100f957600080fd5b5061010261034d565b60405190151581526020016100a3565b600061011c6104b3565b90506001600160a01b03811661015057507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc545b90565b7f02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c054600090336001600160a01b038216146101ba576040517f30cd747100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006101c4610112565b6001600160a01b031614610204576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61022e7f80df4dfef2d6527a47431f6f203697684e26d83f81418443821420778d4c4e8d866104f6565b91508215610345576000826001600160a01b0316639ded06df60e01b868660405160240161025d92919061081d565b60408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925290516102c8919061087c565b600060405180830381855af49150503d8060008114610303576040519150601f19603f3d011682016040523d82523d6000602084013e610308565b606091505b5050905080610343576040517f97905dfb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b509392505050565b6000806103586104b3565b6001600160a01b03161415905090565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6000808284604051806020016103a29061067b565b6020820181038252601f19601f820116604052508051906020012060405160200161041a939291907fff00000000000000000000000000000000000000000000000000000000000000815260609390931b6bffffffffffffffffffffffff191660018401526015830191909152603582015260550190565b60408051601f1981840301815282825280516020918201207fd6940000000000000000000000000000000000000000000000000000000000008285015260601b6bffffffffffffffffffffffff191660228401527f010000000000000000000000000000000000000000000000000000000000000060368401528151601781850301815260379093019091528151910120949350505050565b60006104df7f80df4dfef2d6527a47431f6f203697684e26d83f81418443821420778d4c4e8d3061038d565b90506001600160a01b0381163b6101505750600090565b6000610502833061038d565b90506001600160a01b0381163f15610546576040517fa6ef0ba100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815161057e576040517f21744a5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008360405161058d9061067b565b8190604051809103906000f59050801580156105ad573d6000803e3d6000fd5b5090506001600160a01b0381166105d75760405163b4f5411160e01b815260040160405180910390fd5b6040517e7743600000000000000000000000000000000000000000000000000000000081526001600160a01b03821690627743609061061a908690600401610898565b600060405180830381600087803b15801561063457600080fd5b505af1158015610648573d6000803e3d6000fd5b505050506001600160a01b0382163f6106745760405163b4f5411160e01b815260040160405180910390fd5b5092915050565b610194806108cc83390190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008083601f8401126106c957600080fd5b50813567ffffffffffffffff8111156106e157600080fd5b6020830191508360208285010111156106f957600080fd5b9250929050565b60008060006040848603121561071557600080fd5b833567ffffffffffffffff8082111561072d57600080fd5b818601915086601f83011261074157600080fd5b81358181111561075357610753610688565b604051601f8201601f19908116603f0116810190838211818310171561077b5761077b610688565b8160405282815289602084870101111561079457600080fd5b8260208601602083013760006020848301015280975050505060208601359150808211156107c157600080fd5b506107ce868287016106b7565b9497909650939450505050565b600080602083850312156107ee57600080fd5b823567ffffffffffffffff81111561080557600080fd5b610811858286016106b7565b90969095509350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60005b8381101561086757818101518382015260200161084f565b83811115610876576000848401525b50505050565b6000825161088e81846020870161084c565b9190910192915050565b60208152600082518060208401526108b781604085016020870161084c565b601f01601f1916919091016040019291505056fe608060405234801561001057600080fd5b50610174806100206000396000f3fe608060405234801561001057600080fd5b506004361061002a5760003560e01c80627743601461002f575b600080fd5b61004261003d36600461008d565b610044565b005b60008151602083016000f090508061005b57600080fd5b33ff5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561009f57600080fd5b813567ffffffffffffffff808211156100b757600080fd5b818401915084601f8301126100cb57600080fd5b8135818111156100dd576100dd61005e565b604051601f8201601f19908116603f011681019083821181831017156101055761010561005e565b8160405282815287602084870101111561011e57600080fd5b82602086016020830137600092810160200192909252509594505050505056fea264697066735822122018be06721a0a18ceea937df7a7728d8e5fa0473338ea98bf4b56d3f2276d0a6464736f6c63430008090033a26469706673582212207a56afadddc51af6fd62410e6417e1473b2286c64ffd9039d792541156319f9e64736f6c63430008090033",
  linkReferences: {},
  deployedLinkReferences: {},
} as const;