import { type BaseError, useReadContracts, useAccount } from "wagmi";

const abiErc20 = [
  {
    name: "balanceOf",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  },
] as const;

const abiErc721 = [
  {
    name: "ownerOf",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    outputs: [{ internalType: "address", name: "", type: "address" }],
  },
] as const;

// erc20 0xd2A47929bF04DDc586ec3C2DDa7d56EbF3D2d225
// nft 0x8463fe9F3d76c5CD2B15069ADb4796BDe44aC266

const tokenContract = {
  address: "0xd2A47929bF04DDc586ec3C2DDa7d56EbF3D2d225",
  abi: abiErc20,
} as const;
const nftContract = {
  address: "0x8463fe9F3d76c5CD2B15069ADb4796BDe44aC266",
  abi: abiErc721,
} as const;

export function MyTokenNft() {
  const nftId = 1n;
  const { address } = useAccount();
  const { data, error, isPending } = useReadContracts({
    contracts: [
      {
        ...tokenContract,
        functionName: "balanceOf",
        args: [address],
      },
      {
        ...nftContract,
        functionName: "ownerOf",
        args: [nftId],
      },
    ],
  });

  const [tokenBalance, nftOnwer] = data || [];

  if (isPending) return <div>Loading...</div>;

  if (error)
    return (
      <div>Error: {(error as BaseError).shortMessage || error.message}</div>
    );

  return (
    <>
      <div>Token Balance: {tokenBalance?.result?.toString()}</div>
      <div>
        NFT[id={nftId}]'s owner: {nftOnwer?.result?.toString()}
      </div>
    </>
  );
}
