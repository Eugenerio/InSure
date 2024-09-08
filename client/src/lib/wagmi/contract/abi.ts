export const insuranceAbi = [
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
    ] as const;

export const insuranceAddress =
    "0x3ed6f48ba9fca1a33e959a7628f5b59c15b6b6b9" as const;

export const insuranceConfig = {
    address: insuranceAddress,
    abi: insuranceAbi,
} as const;

