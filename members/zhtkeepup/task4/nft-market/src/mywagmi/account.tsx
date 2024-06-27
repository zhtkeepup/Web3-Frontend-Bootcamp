import {
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useBalance,
} from "wagmi";

export function Account() {
  const { address, chain } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  const result = useBalance({
    address: address,
  });

  return (
    <div>
      <button onClick={() => disconnect()}>Disconnect</button>
      <p>chainName: {chain?.name}</p>
      <p>chainId: {chain?.id}</p>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && (
        <>
          <div>address: {ensName ? `${ensName} (${address})` : address}</div>
          <div>
            {result.data?.symbol} balance: {result.data?.formatted}
          </div>
        </>
      )}
    </div>
  );
}
