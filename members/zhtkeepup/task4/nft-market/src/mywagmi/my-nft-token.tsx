import { type BaseError, useReadContracts, useAccount } from "wagmi";

import { tokenContract, nftContract, marketContract } from "./contracts";

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
