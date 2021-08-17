module.exports = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_usdEthPairAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "firstDiceRoll",
            "type": "uint256"
          },
          {
            "internalType": "uint16[]",
            "name": "order",
            "type": "uint16[]"
          }
        ],
        "indexed": false,
        "internalType": "struct Inventory.AllocatedOrder",
        "name": "_allocatedOrder",
        "type": "tuple"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_orderPrice",
        "type": "uint256"
      }
    ],
    "name": "AllocateOrder",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "firstDiceRoll",
            "type": "uint256"
          },
          {
            "internalType": "uint16[]",
            "name": "order",
            "type": "uint16[]"
          }
        ],
        "indexed": false,
        "internalType": "struct Inventory.AllocatedOrder",
        "name": "_allocatedOrder",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_mythicOrderLine",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_customerAddr",
        "type": "address"
      }
    ],
    "name": "ClaimMythic",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_giftRecipient",
        "type": "address"
      }
    ],
    "name": "GiftOrder",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "PermanentlyLockStock",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_firstDiceRoll",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_commitBlock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_secondDiceRoll",
        "type": "uint256"
      }
    ],
    "name": "SecondDiceRoll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_usdToEthPairAddress",
        "type": "address"
      }
    ],
    "name": "UpdateUsdToEthPair",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "Withdraw",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_referrer",
        "type": "address"
      }
    ],
    "name": "WithdrawBonus",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
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
    "name": "IMMUTABLE_SYSTEM_ROLE",
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
    "name": "PRODUCT_OWNER_ROLE",
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
    "name": "TREASURER_ROLE",
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
    "inputs": [
      {
        "internalType": "uint112",
        "name": "_usdReserve",
        "type": "uint112"
      },
      {
        "internalType": "uint112",
        "name": "_ethReserve",
        "type": "uint112"
      },
      {
        "internalType": "uint256",
        "name": "_amountInUsd",
        "type": "uint256"
      }
    ],
    "name": "_calcWeiFromUsd",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16[]",
        "name": "_stockToAdd",
        "type": "uint16[]"
      }
    ],
    "name": "addStock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16[]",
        "name": "_giftOrder",
        "type": "uint16[]"
      },
      {
        "internalType": "address",
        "name": "_giftRecipient",
        "type": "address"
      }
    ],
    "name": "addStockAndGift",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16[]",
        "name": "_order",
        "type": "uint16[]"
      }
    ],
    "name": "calcOrderCostUsd",
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
        "internalType": "uint16[]",
        "name": "_order",
        "type": "uint16[]"
      }
    ],
    "name": "calcOrderCostWei",
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
        "components": [
          {
            "internalType": "uint256",
            "name": "firstDiceRoll",
            "type": "uint256"
          },
          {
            "internalType": "uint16[]",
            "name": "order",
            "type": "uint16[]"
          }
        ],
        "internalType": "struct Inventory.AllocatedOrder",
        "name": "_allocatedOrder",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "_mythicOrderLine",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_customerAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_secondDiceRoll",
        "type": "uint256"
      }
    ],
    "name": "claimMythicForCustomer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "firstDiceRoll",
            "type": "uint256"
          },
          {
            "internalType": "uint16[]",
            "name": "order",
            "type": "uint16[]"
          }
        ],
        "internalType": "struct Inventory.AllocatedOrder",
        "name": "_allocatedOrder",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "_mythicOrderLine",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_secondDiceRoll",
        "type": "uint256"
      }
    ],
    "name": "confirmMythic",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "firstDiceRoll",
            "type": "uint256"
          },
          {
            "internalType": "uint16[]",
            "name": "order",
            "type": "uint16[]"
          }
        ],
        "internalType": "struct Inventory.AllocatedOrder",
        "name": "_allocatedOrder",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "_secondDiceRoll",
        "type": "uint256"
      }
    ],
    "name": "decodeAllocation",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum Constants.Product",
            "name": "product",
            "type": "uint8"
          },
          {
            "internalType": "enum Constants.Rarity",
            "name": "rarity",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "heroPetType",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "chroma",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "potentialMythic",
            "type": "bool"
          }
        ],
        "internalType": "struct Inventory.DetailedAllocation[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_firstDiceRoll",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_commitBlock",
        "type": "uint256"
      }
    ],
    "name": "emitSecondDiceRoll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_userProvidedSeed",
        "type": "uint256"
      }
    ],
    "name": "getFirstDiceRoll",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "randomNumber",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_productId",
        "type": "uint8"
      }
    ],
    "name": "getProductCostUsd",
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
        "internalType": "uint8",
        "name": "_productId",
        "type": "uint8"
      }
    ],
    "name": "getProductCostWei",
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
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_firstDiceRoll",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_commitBlock",
        "type": "uint256"
      }
    ],
    "name": "getSecondDiceRoll",
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
        "name": "_amountInUsd",
        "type": "uint256"
      }
    ],
    "name": "getWeiPrice",
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
        "internalType": "uint16[]",
        "name": "_giftOrder",
        "type": "uint16[]"
      },
      {
        "internalType": "address",
        "name": "_giftRecipient",
        "type": "address"
      }
    ],
    "name": "giftPack",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "mythicOwner",
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
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "originalStock",
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
    "name": "permanentlyLockStock",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "productPrices",
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
        "internalType": "uint16[]",
        "name": "_order",
        "type": "uint16[]"
      },
      {
        "internalType": "address",
        "name": "_referrer",
        "type": "address"
      }
    ],
    "name": "purchase",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "referrerBonuses",
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
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "stockAvailable",
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
    "name": "stockFixed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_usdEthPairAddress",
        "type": "address"
      }
    ],
    "name": "updateUsdToEthPair",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "usdEthPairAddress",
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
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawBonus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];