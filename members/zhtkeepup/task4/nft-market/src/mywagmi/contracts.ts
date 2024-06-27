import { abiErc20, abiErc721, abiMarket } from "./abi";

export const tokenContract = {
  address: "0xd2A47929bF04DDc586ec3C2DDa7d56EbF3D2d225",
  abi: abiErc20,
} as const;

export const nftContract = {
  address: "0x8463fe9F3d76c5CD2B15069ADb4796BDe44aC266",
  abi: abiErc721,
} as const;

export const marketContract = {
  address: "0x9c9648b2341831C6b5F8736d8d280D37aD3b1222",
  abi: abiMarket,
} as const;
