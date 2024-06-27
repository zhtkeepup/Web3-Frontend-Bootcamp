export const abi = [
  {
    name: "mint",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ internalType: "uint32", name: "tokenId", type: "uint32" }],
    outputs: [],
  },
] as const;

// erc20 0xd2A47929bF04DDc586ec3C2DDa7d56EbF3D2d225
// nft 0x8463fe9F3d76c5CD2B15069ADb4796BDe44aC266

export const abiErc20 = [
  {
    name: "balanceOf",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  },
] as const;

export const abiErc721 = [
  {
    name: "ownerOf",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    outputs: [{ internalType: "address", name: "", type: "address" }],
  },
] as const;

export const abiMarket = [
  {
    name: "list",
    type: "function",
    outputs: [],
    stateMutability: "nonpayable",
    inputs: [
      { internalType: "uint256", name: "tokenID", type: "uint256" },
      { internalType: "uint256", name: "price", type: "uint256" },
    ],
  },
  {
    name: "buy",
    type: "function",
    outputs: [],
    stateMutability: "nonpayable",
    inputs: [
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
  },
];
