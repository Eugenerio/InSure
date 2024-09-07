export const insuranceAbi = [{
    "_format": "hh-sol-artifact-1",
    "contractName": "Insurance",
    "sourceName": "contracts/Insurance.sol",
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_initialOwner",
                    "type": "address"
                },
                {
                    "internalType": "contract IERC20Metadata",
                    "name": "_insuredToken",
                    "type": "address"
                },
                {
                    "internalType": "contract IERC20Metadata",
                    "name": "_treasuryToken",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_policyPriceAPR",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_threshold",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_oracleDecimals",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "CalldataMustHaveValidPayload",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "CalldataOverOrUnderFlow",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "CanNotPickMedianOfEmptyArray",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DataPackageTimestampMustNotBeZero",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DataPackageTimestampsMustBeEqual",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "DataTimestampCannotBeZero",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EachSignerMustProvideTheSameValue",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "EmptyCalldataPointersArr",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ExpiredPolicy",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "GetDataServiceIdNotImplemented",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "IncorrectUnsignedMetadataSize",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "receivedSignersCount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "requiredSignersCount",
                    "type": "uint256"
                }
            ],
            "name": "InsufficientNumberOfUniqueSigners",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidCalldataPointer",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "PolicyAlreadyExists",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "currentPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "threshold",
                    "type": "uint256"
                }
            ],
            "name": "PriceAboveThreshold",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "currentPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "threshold",
                    "type": "uint256"
                }
            ],
            "name": "PriceUnderThreshold",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RedstonePayloadMustHaveAtLeastOneDataPackage",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "receivedSigner",
                    "type": "address"
                }
            ],
            "name": "SignerNotAuthorised",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "TimestampIsNotValid",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "TimestampsMustBeEqual",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "valueByteSize",
                    "type": "uint256"
                }
            ],
            "name": "TooLargeValueByteSize",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnauthorizatedHolder",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "UnexistantPolicy",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "policyId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "holder",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "insuredAmount",
                    "type": "uint256"
                }
            ],
            "name": "PolicyCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "policyId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "repaymentAmount",
                    "type": "uint256"
                }
            ],
            "name": "PolicyRepayed",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "YEAR_DURATION",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "addLiquidity",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "values",
                    "type": "uint256[]"
                }
            ],
            "name": "aggregateValues",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "collectFee",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "insuredAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "duration",
                    "type": "uint256"
                }
            ],
            "name": "createPolicy",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "policyId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "extractTimestampsAndAssertAllAreEqual",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "extractedTimestamp",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "signerAddress",
                    "type": "address"
                }
            ],
            "name": "getAllMockAuthorised",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "signerAddress",
                    "type": "address"
                }
            ],
            "name": "getAllMockExceptLastOneAuthorised",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "signerAddress",
                    "type": "address"
                }
            ],
            "name": "getAuthorisedMockSignerIndex",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "signerAddress",
                    "type": "address"
                }
            ],
            "name": "getAuthorisedSignerIndex",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getDataServiceId",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "policyId",
                    "type": "uint256"
                }
            ],
            "name": "getRepayment",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "repaymentAmount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getUniqueSignersThreshold",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "policyHolder",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "insuredAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "startTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "duration",
                    "type": "uint256"
                }
            ],
            "name": "hashPolicy",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "policyId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "insuredToken",
            "outputs": [
                {
                    "internalType": "contract IERC20Metadata",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "oracleDecimals",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "policyId",
                    "type": "uint256"
                }
            ],
            "name": "policies",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "policyHolder",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "insuredAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "startTimestamp",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTimestamp",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "policyPriceAPR",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "threshold",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "treasuryToken",
            "outputs": [
                {
                    "internalType": "contract IERC20Metadata",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "receivedTimestampMilliseconds",
                    "type": "uint256"
                }
            ],
            "name": "validateTimestamp",
            "outputs": [],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "widthdrawLiquidity",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "0x60806040523480156200001157600080fd5b506040516200382838038062003828833981810160405281019062000037919062000438565b620000576200004b6200013260201b60201c565b6200013a60201b60201c565b6200006886620001fe60201b60201c565b84600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600381905550816004819055507f555344540000000000000000000000000000000000000000000000000000000060058190555080600681905550505050505050620005ef565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6200020e6200029460201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000280576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000277906200055b565b60405180910390fd5b62000291816200013a60201b60201c565b50565b620002a46200013260201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620002ca6200032560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000323576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200031a90620005cd565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003808262000353565b9050919050565b620003928162000373565b81146200039e57600080fd5b50565b600081519050620003b28162000387565b92915050565b6000620003c58262000373565b9050919050565b620003d781620003b8565b8114620003e357600080fd5b50565b600081519050620003f781620003cc565b92915050565b6000819050919050565b6200041281620003fd565b81146200041e57600080fd5b50565b600081519050620004328162000407565b92915050565b60008060008060008060c087890312156200045857620004576200034e565b5b60006200046889828a01620003a1565b96505060206200047b89828a01620003e6565b95505060406200048e89828a01620003e6565b9450506060620004a189828a0162000421565b9350506080620004b489828a0162000421565b92505060a0620004c789828a0162000421565b9150509295509295509295565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600062000543602683620004d4565b91506200055082620004e5565b604082019050919050565b60006020820190508181036000830152620005768162000534565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620005b5602083620004d4565b9150620005c2826200057d565b602082019050919050565b60006020820190508181036000830152620005e881620005a6565b9050919050565b61322980620005ff6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806395d89b41116100de578063d22158fa11610097578063e68b52e711610071578063e68b52e7146104a0578063f2fde38b146104be578063f50b2efe146104da578063f90c4924146104f65761018e565b8063d22158fa14610433578063d3e8948314610463578063d4d5d32a146104965761018e565b806395d89b4114610349578063b24ebfcc14610367578063b2ce514b14610397578063b715b861146103b5578063c274583a146103e5578063c7e2f28e146104035761018e565b806348b02adf1161014b578063715018a611610125578063715018a6146102c15780637e484605146102cb5780638da5cb5b146102fb57806395262d9f146103195761018e565b806348b02adf1461026957806351c6590a1461028757806355a547d5146102a35761018e565b80630dc0ba721461019357806314b21c3c146101b15780632b796968146101cd5780633ce142f5146101eb578063429989f01461021b57806342cde4e81461024b575b600080fd5b61019b610514565b6040516101a89190612619565b60405180910390f35b6101cb60048036038101906101c69190612674565b61051c565b005b6101d56105c8565b6040516101e29190612720565b60405180910390f35b61020560048036038101906102009190612779565b6105ee565b60405161021291906127c2565b60405180910390f35b61023560048036038101906102309190612779565b610600565b60405161024291906127c2565b60405180910390f35b610253610c84565b6040516102609190612619565b60405180910390f35b610271610c8a565b60405161027e9190612619565b60405180910390f35b6102a1600480360381019061029c9190612674565b610c90565b005b6102ab610d3e565b6040516102b89190612619565b60405180910390f35b6102c9610ea2565b005b6102e560048036038101906102e09190612674565b610eb6565b6040516102f29190612619565b60405180910390f35b610303611193565b60405161031091906127ec565b60405180910390f35b610333600480360381019061032e9190612779565b6111bc565b60405161034091906127c2565b60405180910390f35b6103516111ce565b60405161035e9190612820565b60405180910390f35b610381600480360381019061037c9190612994565b6111d4565b60405161038e9190612619565b60405180910390f35b61039f6111e6565b6040516103ac9190612720565b60405180910390f35b6103cf60048036038101906103ca91906129dd565b61120c565b6040516103dc9190612619565b60405180910390f35b6103ed611248565b6040516103fa9190612ac3565b60405180910390f35b61041d60048036038101906104189190612ae5565b61127c565b60405161042a9190612619565b60405180910390f35b61044d60048036038101906104489190612779565b611566565b60405161045a91906127c2565b60405180910390f35b61047d60048036038101906104789190612674565b6115fc565b60405161048d9493929190612b25565b60405180910390f35b61049e61164c565b005b6104a8611792565b6040516104b59190612619565b60405180910390f35b6104d860048036038101906104d39190612779565b611798565b005b6104f460048036038101906104ef9190612674565b61181b565b005b6104fe61185e565b60405161050b91906127c2565b60405180910390f35b6301e1338081565b610524611867565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610581929190612b6a565b6020604051808303816000875af11580156105a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c49190612bcb565b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006105f9826111bc565b9050919050565b600073f39fd6e51aad88f6f4ce6ab8827279cfffb9226673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106525760009050610c7f565b7370997970c51812dc3a010c7d01b50e0d17dc79c873ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106a25760019050610c7f565b733c44cdddb6a900fa2b585dd299e03d12fa4293bc73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106f25760029050610c7f565b7390f79bf6eb2c4f870365e785982e1f101e93b90673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107425760039050610c7f565b7315d34aaf54267db7d7c367839aaf71a00a2c6a6573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107925760049050610c7f565b739965507d1a55bcc2695c58ba16fb37d819b0a4dc73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107e25760059050610c7f565b73976ea74026e726554db657fa54763abd0c3a0aa973ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108325760069050610c7f565b7314dc79964da2c08b23698b3d3cc7ca32193d995573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108825760079050610c7f565b7323618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108d25760089050610c7f565b73a0ee7a142d267c1f36714e4a8f75612f20a7972073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109225760099050610c7f565b73bcd4042de499d14e55001ccbb24a551f3b95409673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361097257600a9050610c7f565b7371be63f3384f5fb98995898a86b02fb2426c578873ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109c257600b9050610c7f565b73fabb0ac9d68b0b445fb7357272ff202c5651694a73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a1257600c9050610c7f565b731cbd3b2770909d4e10f157cabc84c7264073c9ec73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a6257600d9050610c7f565b73df3e18d64bc6a983f673ab319ccae4f1a57c709773ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ab257600e9050610c7f565b73cd3b766ccdd6ae721141f452c550ca635964ce7173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b0257600f9050610c7f565b732546bcd3c84621e976d8185a91a922ae77ecec3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b525760109050610c7f565b73bda5747bfd65f08deb54cb465eb87d40e51b197e73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ba25760119050610c7f565b73dd2fd4581271e230360230f9337d5c0430bf44c073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610bf25760129050610c7f565b738626f6940e2eb28930efb4cef49b2d1f2c9c119973ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c425760139050610c7f565b816040517fec459bc0000000000000000000000000000000000000000000000000000000008152600401610c7691906127ec565b60405180910390fd5b919050565b60045481565b60035481565b610c98611867565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610cf793929190612bf8565b6020604051808303816000875af1158015610d16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3a9190612bcb565b5050565b600080610d496118e5565b90506000610d56826119f6565b8161ffff169150809350819250505060008103610d9f576040517f8552ff3c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b81811015610e9c576000610db584611a66565b9050600080606886610dc79190612c5e565b90506000816000369050610ddb9190612c92565b90508035925060008365ffffffffffff1603610e23576040517f336dc9d000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008803610e3b578265ffffffffffff169750610e7d565b878365ffffffffffff1614610e7c576040517fd9d1f46500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b8387610e899190612c5e565b9650505050508080600101915050610da2565b50505090565b610eaa611867565b610eb46000611aa5565b565b600080600760008481526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610f58576040517f6e3da05200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610fe1576040517f5cf35e6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b428160030154101561101f576040517f0e92ddd000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061102c600554611b69565b905060045481111561107957806004546040517f29524920000000000000000000000000000000000000000000000000000000008152600401611070929190612cc6565b60405180910390fd5b600654600a6110889190612e22565b81600654600a6110989190612e22565b6110a29190612c92565b83600101546110b19190612e6d565b6110bb9190612ede565b9250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33856040518363ffffffff1660e01b815260040161111a929190612b6a565b6020604051808303816000875af1158015611139573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115d9190612bcb565b5082847fcc226262d991683790f4321c51bb6b1a86690cbfd8de6aea52f9a6890e16c86a60405160405180910390a35050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006111c782611566565b9050919050565b60055481565b60006111df82611c05565b9050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000848484846040516020016112259493929190612f78565b6040516020818303038152906040528051906020012060001c9050949350505050565b60606040517f608b530700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060646301e133806112909190612e6d565b836003548661129f9190612e6d565b6112a99190612e6d565b6112b39190612ede565b905060006112c2600554611b69565b905060045481101561130f57806004546040517fd449f3a5000000000000000000000000000000000000000000000000000000008152600401611306929190612cc6565b60405180910390fd5b61131b3386428761120c565b9250600073ffffffffffffffffffffffffffffffffffffffff166007600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146113b9576040517f84d27a2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180608001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200186815260200142815260200185426113f89190612c5e565b8152506007600085815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030155905050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016114d593929190612bf8565b6020604051808303816000875af11580156114f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115189190612bcb565b50843373ffffffffffffffffffffffffffffffffffffffff16847f601882301d3e3fce7fe3a99d4bb17ef5b6699b417bdd29f2bfb82e19fcbcb66060405160405180910390a4505092915050565b6000738626f6940e2eb28930efb4cef49b2d1f2c9c119973ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036115ec57816040517fec459bc00000000000000000000000000000000000000000000000000000000081526004016115e391906127ec565b60405180910390fd5b6115f582610600565b9050919050565b60076020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154905084565b611654611867565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016116ee91906127ec565b602060405180830381865afa15801561170b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172f9190612fdb565b6040518363ffffffff1660e01b815260040161174c929190612b6a565b6020604051808303816000875af115801561176b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061178f9190612bcb565b50565b60065481565b6117a0611867565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361180f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118069061307a565b60405180910390fd5b61181881611aa5565b50565b6501812f2590c081101561185b576040517f355b874300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b6000600a905090565b61186f611c17565b73ffffffffffffffffffffffffffffffffffffffff1661188d611193565b73ffffffffffffffffffffffffffffffffffffffff16146118e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118da906130e6565b60405180910390fd5b565b60008060203603356602ed57011e000081166602ed57011e0000149150508061193a576040517fe7764c9e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000803690506029111561197a576040517f5796f78a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b602936033590506000600960038362ffffff166119979190612c5e565b6119a19190612c5e565b905060003690506002826119b59190612c5e565b11156119ed576040517fc30a7bd700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80935050505090565b6000806000602084611a089190612c5e565b90506000369050811115611a48576040517f5796f78a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80360335925082600285611a5c9190612c5e565b9250925050915091565b6000806000611a7484611c1f565b91509150604e816020611a879190612c5e565b83611a929190612e6d565b611a9c9190612c5e565b92505050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080600167ffffffffffffffff811115611b8757611b86612851565b5b604051908082528060200260200182016040528015611bb55781602001602082028036833780820191505090505b5090508281600081518110611bcd57611bcc613106565b5b602002602001018181525050611be281611c81565b600081518110611bf557611bf4613106565b5b6020026020010151915050919050565b6000611c1082611ca6565b9050919050565b600033905090565b60008060008060006020604187611c369190612c5e565b611c409190612c5e565b6000369050611c4f9190612c92565b905080359250600381611c629190612c92565b9050803591508262ffffff1694508163ffffffff169350505050915091565b6060600080611c8f84611dfb565b91509150611c9c8161181b565b8192505050919050565b60006002825103611d0657600282600181518110611cc757611cc6613106565b5b602002602001015183600081518110611ce357611ce2613106565b5b6020026020010151611cf59190612c5e565b611cff9190612ede565b9050611df6565b6000825103611d41576040517f9e198af900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d4a82612076565b600060028351611d5a9190612ede565b9050600060028451611d6c9190613135565b03611dd7576000838281518110611d8657611d85613106565b5b602002602001015184600184611d9c9190612c92565b81518110611dad57611dac613106565b5b6020026020010151611dbf9190612c5e565b9050600281611dce9190612ede565b92505050611df6565b828181518110611dea57611de9613106565b5b60200260200101519150505b919050565b6060600080835167ffffffffffffffff811115611e1b57611e1a612851565b5b604051908082528060200260200182016040528015611e495781602001602082028036833780820191505090505b5090506000845167ffffffffffffffff811115611e6957611e68612851565b5b604051908082528060200260200182016040528015611e975781602001602082028036833780820191505090505b5090506000855167ffffffffffffffff811115611eb757611eb6612851565b5b604051908082528060200260200182016040528015611eea57816020015b6060815260200190600190039081611ed55790505b50905060005b8651811015611f7757611f0161185e565b60ff1667ffffffffffffffff811115611f1d57611f1c612851565b5b604051908082528060200260200182016040528015611f4b5781602001602082028036833780820191505090505b50828281518110611f5f57611f5e613106565b5b60200260200101819052508080600101915050611ef0565b506000611f826118e5565b90506000611f8f826119f6565b8161ffff16915080935081925050506000604051905060005b8281101561205e576000611fbf8b898989896120c9565b809250819650505060008103612001576040517fdfb25a7900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b888114158015612012575060008914155b15612049576040517f4cbc474200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80985082604052818060010192505050611fa8565b506120698487612395565b9750505050505050915091565b805160208201602082028101815b818110156120c257825b818110156120b65781518151808210156120a9578084528183525b505060208101905061208e565b50602081019050612084565b5050505050565b60008060008060006120da86611c1f565b915091506000806060600080600d6020876120f59190612c5e565b886121009190612e6d565b61210a9190612c5e565b9150600060688c61211b9190612c5e565b600036905061212a9190612c92565b905060008360418e61213c9190612c5e565b6121469190612c5e565b60003690506121559190612c92565b9050612161848261218f565b94508360208601209550813592506121ab565b60006040519050818152602081019050818101604052919050565b600061219a83612174565b838382376020810391505092915050565b8265ffffffffffff169a506121cc8660418f6121c79190612c5e565b6124dc565b96506121d7876105ee565b60ff16995050505050505050604e866121f09190612c5e565b955060008060005b84811015612382576020848a61220e9190612c5e565b6122189190612c5e565b9850612224898561255b565b809350819450505060005b8d51811015612374578d818151811061224b5761224a613106565b5b602002602001015184036123675760008c828151811061226e5761226d613106565b5b6020026020010151905061228281896125d6565b1580156122b2575061229261185e565b60ff168e83815181106122a8576122a7613106565b5b6020026020010151105b1561236157838c83815181106122cb576122ca613106565b5b60200260200101518f84815181106122e6576122e5613106565b5b6020026020010151815181106122ff576122fe613106565b5b6020026020010181815250508d828151811061231e5761231d613106565b5b60200260200101805180919061233390613166565b8152505061234181896125ef565b8d838151811061235457612353613106565b5b6020026020010181815250505b50612374565b808060010191505061222f565b5080806001019150506121f8565b5050508594505050509550959350505050565b60606000835167ffffffffffffffff8111156123b4576123b3612851565b5b6040519080825280602002602001820160405280156123e25781602001602082028036833780820191505090505b50905060006123ef61185e565b60ff16905060005b85518110156124d0578185828151811061241457612413613106565b5b6020026020010151101561247b5784818151811061243557612434613106565b5b6020026020010151826040517f2b13aef5000000000000000000000000000000000000000000000000000000008152600401612472929190612cc6565b60405180910390fd5b60006124a087838151811061249357612492613106565b5b60200260200101516111d4565b9050808483815181106124b6576124b5613106565b5b6020026020010181815250505080806001019150506123f7565b50819250505092915050565b6000806000808436038035935060208101905080359250602081019050803560001a9150506001868285856040516000815260200160405260405161252494939291906131ae565b6020604051602081039080840390855afa158015612546573d6000803e3d6000fd5b50505060206040510351935050505092915050565b60008060008460003690506125709190612c92565b90508035925060208101359150602184106125c257836040517fc000fc420000000000000000000000000000000000000000000000000000000081526004016125b99190612619565b60405180910390fd5b6008846020030282901c9150509250929050565b600080826001901b841690506000811191505092915050565b6000816001901b8317905092915050565b6000819050919050565b61261381612600565b82525050565b600060208201905061262e600083018461260a565b92915050565b6000604051905090565b600080fd5b600080fd5b61265181612600565b811461265c57600080fd5b50565b60008135905061266e81612648565b92915050565b60006020828403121561268a5761268961263e565b5b60006126988482850161265f565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006126e66126e16126dc846126a1565b6126c1565b6126a1565b9050919050565b60006126f8826126cb565b9050919050565b600061270a826126ed565b9050919050565b61271a816126ff565b82525050565b60006020820190506127356000830184612711565b92915050565b6000612746826126a1565b9050919050565b6127568161273b565b811461276157600080fd5b50565b6000813590506127738161274d565b92915050565b60006020828403121561278f5761278e61263e565b5b600061279d84828501612764565b91505092915050565b600060ff82169050919050565b6127bc816127a6565b82525050565b60006020820190506127d760008301846127b3565b92915050565b6127e68161273b565b82525050565b600060208201905061280160008301846127dd565b92915050565b6000819050919050565b61281a81612807565b82525050565b60006020820190506128356000830184612811565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61288982612840565b810181811067ffffffffffffffff821117156128a8576128a7612851565b5b80604052505050565b60006128bb612634565b90506128c78282612880565b919050565b600067ffffffffffffffff8211156128e7576128e6612851565b5b602082029050602081019050919050565b600080fd5b600061291061290b846128cc565b6128b1565b90508083825260208201905060208402830185811115612933576129326128f8565b5b835b8181101561295c5780612948888261265f565b845260208401935050602081019050612935565b5050509392505050565b600082601f83011261297b5761297a61283b565b5b813561298b8482602086016128fd565b91505092915050565b6000602082840312156129aa576129a961263e565b5b600082013567ffffffffffffffff8111156129c8576129c7612643565b5b6129d484828501612966565b91505092915050565b600080600080608085870312156129f7576129f661263e565b5b6000612a0587828801612764565b9450506020612a168782880161265f565b9350506040612a278782880161265f565b9250506060612a388782880161265f565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b60005b83811015612a7e578082015181840152602081019050612a63565b60008484015250505050565b6000612a9582612a44565b612a9f8185612a4f565b9350612aaf818560208601612a60565b612ab881612840565b840191505092915050565b60006020820190508181036000830152612add8184612a8a565b905092915050565b60008060408385031215612afc57612afb61263e565b5b6000612b0a8582860161265f565b9250506020612b1b8582860161265f565b9150509250929050565b6000608082019050612b3a60008301876127dd565b612b47602083018661260a565b612b54604083018561260a565b612b61606083018461260a565b95945050505050565b6000604082019050612b7f60008301856127dd565b612b8c602083018461260a565b9392505050565b60008115159050919050565b612ba881612b93565b8114612bb357600080fd5b50565b600081519050612bc581612b9f565b92915050565b600060208284031215612be157612be061263e565b5b6000612bef84828501612bb6565b91505092915050565b6000606082019050612c0d60008301866127dd565b612c1a60208301856127dd565b612c27604083018461260a565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612c6982612600565b9150612c7483612600565b9250828201905080821115612c8c57612c8b612c2f565b5b92915050565b6000612c9d82612600565b9150612ca883612600565b9250828203905081811115612cc057612cbf612c2f565b5b92915050565b6000604082019050612cdb600083018561260a565b612ce8602083018461260a565b9392505050565b60008160011c9050919050565b6000808291508390505b6001851115612d4657808604811115612d2257612d21612c2f565b5b6001851615612d315780820291505b8081029050612d3f85612cef565b9450612d06565b94509492505050565b600082612d5f5760019050612e1b565b81612d6d5760009050612e1b565b8160018114612d835760028114612d8d57612dbc565b6001915050612e1b565b60ff841115612d9f57612d9e612c2f565b5b8360020a915084821115612db657612db5612c2f565b5b50612e1b565b5060208310610133831016604e8410600b8410161715612df15782820a905083811115612dec57612deb612c2f565b5b612e1b565b612dfe8484846001612cfc565b92509050818404811115612e1557612e14612c2f565b5b81810290505b9392505050565b6000612e2d82612600565b9150612e3883612600565b9250612e657fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612d4f565b905092915050565b6000612e7882612600565b9150612e8383612600565b9250828202612e9181612600565b91508282048414831517612ea857612ea7612c2f565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612ee982612600565b9150612ef483612600565b925082612f0457612f03612eaf565b5b828204905092915050565b60008160601b9050919050565b6000612f2782612f0f565b9050919050565b6000612f3982612f1c565b9050919050565b612f51612f4c8261273b565b612f2e565b82525050565b6000819050919050565b612f72612f6d82612600565b612f57565b82525050565b6000612f848287612f40565b601482019150612f948286612f61565b602082019150612fa48285612f61565b602082019150612fb48284612f61565b60208201915081905095945050505050565b600081519050612fd581612648565b92915050565b600060208284031215612ff157612ff061263e565b5b6000612fff84828501612fc6565b91505092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000613064602683612a4f565b915061306f82613008565b604082019050919050565b6000602082019050818103600083015261309381613057565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006130d0602083612a4f565b91506130db8261309a565b602082019050919050565b600060208201905081810360008301526130ff816130c3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061314082612600565b915061314b83612600565b92508261315b5761315a612eaf565b5b828206905092915050565b600061317182612600565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036131a3576131a2612c2f565b5b600182019050919050565b60006080820190506131c36000830187612811565b6131d060208301866127b3565b6131dd6040830185612811565b6131ea6060830184612811565b9594505050505056fea2646970667358221220bfffe66c38bb98ad4f5fae2b3081ed0ad8cd692df5c803e6c84c9c6485886b0164736f6c63430008180033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061018e5760003560e01c806395d89b41116100de578063d22158fa11610097578063e68b52e711610071578063e68b52e7146104a0578063f2fde38b146104be578063f50b2efe146104da578063f90c4924146104f65761018e565b8063d22158fa14610433578063d3e8948314610463578063d4d5d32a146104965761018e565b806395d89b4114610349578063b24ebfcc14610367578063b2ce514b14610397578063b715b861146103b5578063c274583a146103e5578063c7e2f28e146104035761018e565b806348b02adf1161014b578063715018a611610125578063715018a6146102c15780637e484605146102cb5780638da5cb5b146102fb57806395262d9f146103195761018e565b806348b02adf1461026957806351c6590a1461028757806355a547d5146102a35761018e565b80630dc0ba721461019357806314b21c3c146101b15780632b796968146101cd5780633ce142f5146101eb578063429989f01461021b57806342cde4e81461024b575b600080fd5b61019b610514565b6040516101a89190612619565b60405180910390f35b6101cb60048036038101906101c69190612674565b61051c565b005b6101d56105c8565b6040516101e29190612720565b60405180910390f35b61020560048036038101906102009190612779565b6105ee565b60405161021291906127c2565b60405180910390f35b61023560048036038101906102309190612779565b610600565b60405161024291906127c2565b60405180910390f35b610253610c84565b6040516102609190612619565b60405180910390f35b610271610c8a565b60405161027e9190612619565b60405180910390f35b6102a1600480360381019061029c9190612674565b610c90565b005b6102ab610d3e565b6040516102b89190612619565b60405180910390f35b6102c9610ea2565b005b6102e560048036038101906102e09190612674565b610eb6565b6040516102f29190612619565b60405180910390f35b610303611193565b60405161031091906127ec565b60405180910390f35b610333600480360381019061032e9190612779565b6111bc565b60405161034091906127c2565b60405180910390f35b6103516111ce565b60405161035e9190612820565b60405180910390f35b610381600480360381019061037c9190612994565b6111d4565b60405161038e9190612619565b60405180910390f35b61039f6111e6565b6040516103ac9190612720565b60405180910390f35b6103cf60048036038101906103ca91906129dd565b61120c565b6040516103dc9190612619565b60405180910390f35b6103ed611248565b6040516103fa9190612ac3565b60405180910390f35b61041d60048036038101906104189190612ae5565b61127c565b60405161042a9190612619565b60405180910390f35b61044d60048036038101906104489190612779565b611566565b60405161045a91906127c2565b60405180910390f35b61047d60048036038101906104789190612674565b6115fc565b60405161048d9493929190612b25565b60405180910390f35b61049e61164c565b005b6104a8611792565b6040516104b59190612619565b60405180910390f35b6104d860048036038101906104d39190612779565b611798565b005b6104f460048036038101906104ef9190612674565b61181b565b005b6104fe61185e565b60405161050b91906127c2565b60405180910390f35b6301e1338081565b610524611867565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610581929190612b6a565b6020604051808303816000875af11580156105a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c49190612bcb565b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006105f9826111bc565b9050919050565b600073f39fd6e51aad88f6f4ce6ab8827279cfffb9226673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106525760009050610c7f565b7370997970c51812dc3a010c7d01b50e0d17dc79c873ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106a25760019050610c7f565b733c44cdddb6a900fa2b585dd299e03d12fa4293bc73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106f25760029050610c7f565b7390f79bf6eb2c4f870365e785982e1f101e93b90673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107425760039050610c7f565b7315d34aaf54267db7d7c367839aaf71a00a2c6a6573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107925760049050610c7f565b739965507d1a55bcc2695c58ba16fb37d819b0a4dc73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107e25760059050610c7f565b73976ea74026e726554db657fa54763abd0c3a0aa973ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108325760069050610c7f565b7314dc79964da2c08b23698b3d3cc7ca32193d995573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108825760079050610c7f565b7323618e81e3f5cdf7f54c3d65f7fbc0abf5b21e8f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108d25760089050610c7f565b73a0ee7a142d267c1f36714e4a8f75612f20a7972073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109225760099050610c7f565b73bcd4042de499d14e55001ccbb24a551f3b95409673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361097257600a9050610c7f565b7371be63f3384f5fb98995898a86b02fb2426c578873ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109c257600b9050610c7f565b73fabb0ac9d68b0b445fb7357272ff202c5651694a73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a1257600c9050610c7f565b731cbd3b2770909d4e10f157cabc84c7264073c9ec73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a6257600d9050610c7f565b73df3e18d64bc6a983f673ab319ccae4f1a57c709773ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ab257600e9050610c7f565b73cd3b766ccdd6ae721141f452c550ca635964ce7173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b0257600f9050610c7f565b732546bcd3c84621e976d8185a91a922ae77ecec3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b525760109050610c7f565b73bda5747bfd65f08deb54cb465eb87d40e51b197e73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ba25760119050610c7f565b73dd2fd4581271e230360230f9337d5c0430bf44c073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610bf25760129050610c7f565b738626f6940e2eb28930efb4cef49b2d1f2c9c119973ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c425760139050610c7f565b816040517fec459bc0000000000000000000000000000000000000000000000000000000008152600401610c7691906127ec565b60405180910390fd5b919050565b60045481565b60035481565b610c98611867565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b8152600401610cf793929190612bf8565b6020604051808303816000875af1158015610d16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3a9190612bcb565b5050565b600080610d496118e5565b90506000610d56826119f6565b8161ffff169150809350819250505060008103610d9f576040517f8552ff3c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b81811015610e9c576000610db584611a66565b9050600080606886610dc79190612c5e565b90506000816000369050610ddb9190612c92565b90508035925060008365ffffffffffff1603610e23576040517f336dc9d000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008803610e3b578265ffffffffffff169750610e7d565b878365ffffffffffff1614610e7c576040517fd9d1f46500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b8387610e899190612c5e565b9650505050508080600101915050610da2565b50505090565b610eaa611867565b610eb46000611aa5565b565b600080600760008481526020019081526020016000209050600073ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610f58576040517f6e3da05200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610fe1576040517f5cf35e6e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b428160030154101561101f576040517f0e92ddd000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061102c600554611b69565b905060045481111561107957806004546040517f29524920000000000000000000000000000000000000000000000000000000008152600401611070929190612cc6565b60405180910390fd5b600654600a6110889190612e22565b81600654600a6110989190612e22565b6110a29190612c92565b83600101546110b19190612e6d565b6110bb9190612ede565b9250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33856040518363ffffffff1660e01b815260040161111a929190612b6a565b6020604051808303816000875af1158015611139573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115d9190612bcb565b5082847fcc226262d991683790f4321c51bb6b1a86690cbfd8de6aea52f9a6890e16c86a60405160405180910390a35050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006111c782611566565b9050919050565b60055481565b60006111df82611c05565b9050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000848484846040516020016112259493929190612f78565b6040516020818303038152906040528051906020012060001c9050949350505050565b60606040517f608b530700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008060646301e133806112909190612e6d565b836003548661129f9190612e6d565b6112a99190612e6d565b6112b39190612ede565b905060006112c2600554611b69565b905060045481101561130f57806004546040517fd449f3a5000000000000000000000000000000000000000000000000000000008152600401611306929190612cc6565b60405180910390fd5b61131b3386428761120c565b9250600073ffffffffffffffffffffffffffffffffffffffff166007600085815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146113b9576040517f84d27a2200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180608001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200186815260200142815260200185426113f89190612c5e565b8152506007600085815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030155905050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016114d593929190612bf8565b6020604051808303816000875af11580156114f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115189190612bcb565b50843373ffffffffffffffffffffffffffffffffffffffff16847f601882301d3e3fce7fe3a99d4bb17ef5b6699b417bdd29f2bfb82e19fcbcb66060405160405180910390a4505092915050565b6000738626f6940e2eb28930efb4cef49b2d1f2c9c119973ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036115ec57816040517fec459bc00000000000000000000000000000000000000000000000000000000081526004016115e391906127ec565b60405180910390fd5b6115f582610600565b9050919050565b60076020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154905084565b611654611867565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016116ee91906127ec565b602060405180830381865afa15801561170b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172f9190612fdb565b6040518363ffffffff1660e01b815260040161174c929190612b6a565b6020604051808303816000875af115801561176b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061178f9190612bcb565b50565b60065481565b6117a0611867565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361180f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118069061307a565b60405180910390fd5b61181881611aa5565b50565b6501812f2590c081101561185b576040517f355b874300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b6000600a905090565b61186f611c17565b73ffffffffffffffffffffffffffffffffffffffff1661188d611193565b73ffffffffffffffffffffffffffffffffffffffff16146118e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118da906130e6565b60405180910390fd5b565b60008060203603356602ed57011e000081166602ed57011e0000149150508061193a576040517fe7764c9e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000803690506029111561197a576040517f5796f78a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b602936033590506000600960038362ffffff166119979190612c5e565b6119a19190612c5e565b905060003690506002826119b59190612c5e565b11156119ed576040517fc30a7bd700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80935050505090565b6000806000602084611a089190612c5e565b90506000369050811115611a48576040517f5796f78a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80360335925082600285611a5c9190612c5e565b9250925050915091565b6000806000611a7484611c1f565b91509150604e816020611a879190612c5e565b83611a929190612e6d565b611a9c9190612c5e565b92505050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080600167ffffffffffffffff811115611b8757611b86612851565b5b604051908082528060200260200182016040528015611bb55781602001602082028036833780820191505090505b5090508281600081518110611bcd57611bcc613106565b5b602002602001018181525050611be281611c81565b600081518110611bf557611bf4613106565b5b6020026020010151915050919050565b6000611c1082611ca6565b9050919050565b600033905090565b60008060008060006020604187611c369190612c5e565b611c409190612c5e565b6000369050611c4f9190612c92565b905080359250600381611c629190612c92565b9050803591508262ffffff1694508163ffffffff169350505050915091565b6060600080611c8f84611dfb565b91509150611c9c8161181b565b8192505050919050565b60006002825103611d0657600282600181518110611cc757611cc6613106565b5b602002602001015183600081518110611ce357611ce2613106565b5b6020026020010151611cf59190612c5e565b611cff9190612ede565b9050611df6565b6000825103611d41576040517f9e198af900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d4a82612076565b600060028351611d5a9190612ede565b9050600060028451611d6c9190613135565b03611dd7576000838281518110611d8657611d85613106565b5b602002602001015184600184611d9c9190612c92565b81518110611dad57611dac613106565b5b6020026020010151611dbf9190612c5e565b9050600281611dce9190612ede565b92505050611df6565b828181518110611dea57611de9613106565b5b60200260200101519150505b919050565b6060600080835167ffffffffffffffff811115611e1b57611e1a612851565b5b604051908082528060200260200182016040528015611e495781602001602082028036833780820191505090505b5090506000845167ffffffffffffffff811115611e6957611e68612851565b5b604051908082528060200260200182016040528015611e975781602001602082028036833780820191505090505b5090506000855167ffffffffffffffff811115611eb757611eb6612851565b5b604051908082528060200260200182016040528015611eea57816020015b6060815260200190600190039081611ed55790505b50905060005b8651811015611f7757611f0161185e565b60ff1667ffffffffffffffff811115611f1d57611f1c612851565b5b604051908082528060200260200182016040528015611f4b5781602001602082028036833780820191505090505b50828281518110611f5f57611f5e613106565b5b60200260200101819052508080600101915050611ef0565b506000611f826118e5565b90506000611f8f826119f6565b8161ffff16915080935081925050506000604051905060005b8281101561205e576000611fbf8b898989896120c9565b809250819650505060008103612001576040517fdfb25a7900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b888114158015612012575060008914155b15612049576040517f4cbc474200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80985082604052818060010192505050611fa8565b506120698487612395565b9750505050505050915091565b805160208201602082028101815b818110156120c257825b818110156120b65781518151808210156120a9578084528183525b505060208101905061208e565b50602081019050612084565b5050505050565b60008060008060006120da86611c1f565b915091506000806060600080600d6020876120f59190612c5e565b886121009190612e6d565b61210a9190612c5e565b9150600060688c61211b9190612c5e565b600036905061212a9190612c92565b905060008360418e61213c9190612c5e565b6121469190612c5e565b60003690506121559190612c92565b9050612161848261218f565b94508360208601209550813592506121ab565b60006040519050818152602081019050818101604052919050565b600061219a83612174565b838382376020810391505092915050565b8265ffffffffffff169a506121cc8660418f6121c79190612c5e565b6124dc565b96506121d7876105ee565b60ff16995050505050505050604e866121f09190612c5e565b955060008060005b84811015612382576020848a61220e9190612c5e565b6122189190612c5e565b9850612224898561255b565b809350819450505060005b8d51811015612374578d818151811061224b5761224a613106565b5b602002602001015184036123675760008c828151811061226e5761226d613106565b5b6020026020010151905061228281896125d6565b1580156122b2575061229261185e565b60ff168e83815181106122a8576122a7613106565b5b6020026020010151105b1561236157838c83815181106122cb576122ca613106565b5b60200260200101518f84815181106122e6576122e5613106565b5b6020026020010151815181106122ff576122fe613106565b5b6020026020010181815250508d828151811061231e5761231d613106565b5b60200260200101805180919061233390613166565b8152505061234181896125ef565b8d838151811061235457612353613106565b5b6020026020010181815250505b50612374565b808060010191505061222f565b5080806001019150506121f8565b5050508594505050509550959350505050565b60606000835167ffffffffffffffff8111156123b4576123b3612851565b5b6040519080825280602002602001820160405280156123e25781602001602082028036833780820191505090505b50905060006123ef61185e565b60ff16905060005b85518110156124d0578185828151811061241457612413613106565b5b6020026020010151101561247b5784818151811061243557612434613106565b5b6020026020010151826040517f2b13aef5000000000000000000000000000000000000000000000000000000008152600401612472929190612cc6565b60405180910390fd5b60006124a087838151811061249357612492613106565b5b60200260200101516111d4565b9050808483815181106124b6576124b5613106565b5b6020026020010181815250505080806001019150506123f7565b50819250505092915050565b6000806000808436038035935060208101905080359250602081019050803560001a9150506001868285856040516000815260200160405260405161252494939291906131ae565b6020604051602081039080840390855afa158015612546573d6000803e3d6000fd5b50505060206040510351935050505092915050565b60008060008460003690506125709190612c92565b90508035925060208101359150602184106125c257836040517fc000fc420000000000000000000000000000000000000000000000000000000081526004016125b99190612619565b60405180910390fd5b6008846020030282901c9150509250929050565b600080826001901b841690506000811191505092915050565b6000816001901b8317905092915050565b6000819050919050565b61261381612600565b82525050565b600060208201905061262e600083018461260a565b92915050565b6000604051905090565b600080fd5b600080fd5b61265181612600565b811461265c57600080fd5b50565b60008135905061266e81612648565b92915050565b60006020828403121561268a5761268961263e565b5b60006126988482850161265f565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006126e66126e16126dc846126a1565b6126c1565b6126a1565b9050919050565b60006126f8826126cb565b9050919050565b600061270a826126ed565b9050919050565b61271a816126ff565b82525050565b60006020820190506127356000830184612711565b92915050565b6000612746826126a1565b9050919050565b6127568161273b565b811461276157600080fd5b50565b6000813590506127738161274d565b92915050565b60006020828403121561278f5761278e61263e565b5b600061279d84828501612764565b91505092915050565b600060ff82169050919050565b6127bc816127a6565b82525050565b60006020820190506127d760008301846127b3565b92915050565b6127e68161273b565b82525050565b600060208201905061280160008301846127dd565b92915050565b6000819050919050565b61281a81612807565b82525050565b60006020820190506128356000830184612811565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61288982612840565b810181811067ffffffffffffffff821117156128a8576128a7612851565b5b80604052505050565b60006128bb612634565b90506128c78282612880565b919050565b600067ffffffffffffffff8211156128e7576128e6612851565b5b602082029050602081019050919050565b600080fd5b600061291061290b846128cc565b6128b1565b90508083825260208201905060208402830185811115612933576129326128f8565b5b835b8181101561295c5780612948888261265f565b845260208401935050602081019050612935565b5050509392505050565b600082601f83011261297b5761297a61283b565b5b813561298b8482602086016128fd565b91505092915050565b6000602082840312156129aa576129a961263e565b5b600082013567ffffffffffffffff8111156129c8576129c7612643565b5b6129d484828501612966565b91505092915050565b600080600080608085870312156129f7576129f661263e565b5b6000612a0587828801612764565b9450506020612a168782880161265f565b9350506040612a278782880161265f565b9250506060612a388782880161265f565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b60005b83811015612a7e578082015181840152602081019050612a63565b60008484015250505050565b6000612a9582612a44565b612a9f8185612a4f565b9350612aaf818560208601612a60565b612ab881612840565b840191505092915050565b60006020820190508181036000830152612add8184612a8a565b905092915050565b60008060408385031215612afc57612afb61263e565b5b6000612b0a8582860161265f565b9250506020612b1b8582860161265f565b9150509250929050565b6000608082019050612b3a60008301876127dd565b612b47602083018661260a565b612b54604083018561260a565b612b61606083018461260a565b95945050505050565b6000604082019050612b7f60008301856127dd565b612b8c602083018461260a565b9392505050565b60008115159050919050565b612ba881612b93565b8114612bb357600080fd5b50565b600081519050612bc581612b9f565b92915050565b600060208284031215612be157612be061263e565b5b6000612bef84828501612bb6565b91505092915050565b6000606082019050612c0d60008301866127dd565b612c1a60208301856127dd565b612c27604083018461260a565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612c6982612600565b9150612c7483612600565b9250828201905080821115612c8c57612c8b612c2f565b5b92915050565b6000612c9d82612600565b9150612ca883612600565b9250828203905081811115612cc057612cbf612c2f565b5b92915050565b6000604082019050612cdb600083018561260a565b612ce8602083018461260a565b9392505050565b60008160011c9050919050565b6000808291508390505b6001851115612d4657808604811115612d2257612d21612c2f565b5b6001851615612d315780820291505b8081029050612d3f85612cef565b9450612d06565b94509492505050565b600082612d5f5760019050612e1b565b81612d6d5760009050612e1b565b8160018114612d835760028114612d8d57612dbc565b6001915050612e1b565b60ff841115612d9f57612d9e612c2f565b5b8360020a915084821115612db657612db5612c2f565b5b50612e1b565b5060208310610133831016604e8410600b8410161715612df15782820a905083811115612dec57612deb612c2f565b5b612e1b565b612dfe8484846001612cfc565b92509050818404811115612e1557612e14612c2f565b5b81810290505b9392505050565b6000612e2d82612600565b9150612e3883612600565b9250612e657fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612d4f565b905092915050565b6000612e7882612600565b9150612e8383612600565b9250828202612e9181612600565b91508282048414831517612ea857612ea7612c2f565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612ee982612600565b9150612ef483612600565b925082612f0457612f03612eaf565b5b828204905092915050565b60008160601b9050919050565b6000612f2782612f0f565b9050919050565b6000612f3982612f1c565b9050919050565b612f51612f4c8261273b565b612f2e565b82525050565b6000819050919050565b612f72612f6d82612600565b612f57565b82525050565b6000612f848287612f40565b601482019150612f948286612f61565b602082019150612fa48285612f61565b602082019150612fb48284612f61565b60208201915081905095945050505050565b600081519050612fd581612648565b92915050565b600060208284031215612ff157612ff061263e565b5b6000612fff84828501612fc6565b91505092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000613064602683612a4f565b915061306f82613008565b604082019050919050565b6000602082019050818103600083015261309381613057565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006130d0602083612a4f565b91506130db8261309a565b602082019050919050565b600060208201905081810360008301526130ff816130c3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061314082612600565b915061314b83612600565b92508261315b5761315a612eaf565b5b828206905092915050565b600061317182612600565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036131a3576131a2612c2f565b5b600182019050919050565b60006080820190506131c36000830187612811565b6131d060208301866127b3565b6131dd6040830185612811565b6131ea6060830184612811565b9594505050505056fea2646970667358221220bfffe66c38bb98ad4f5fae2b3081ed0ad8cd692df5c803e6c84c9c6485886b0164736f6c63430008180033",
    "linkReferences": {},
    "deployedLinkReferences": {}
}] as const;


export const insuranceAddress =
    "0x3ed6f48ba9fca1a33e959a7628f5b59c15b6b6b9" as const;

export const insuranceConfig = {
    address: insuranceAddress,
    abi: insuranceAbi,
} as const;

