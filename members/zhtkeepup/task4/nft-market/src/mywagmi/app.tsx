// 1. Import modules
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, useAccount } from "wagmi";
import { config } from "./config";

import { SendTransaction } from "./send-transaction";

import { Account } from "./account";
import { WalletOptions } from "./wallet-options";
// import { ReadContract } from "./read-contract";

import { MyTokenNft } from "./my-nft-token";

// 2. Set up a React Query client.
const queryClient = new QueryClient();

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected)
    return (
      <>
        <Account />
        <MyTokenNft></MyTokenNft>
      </>
    );
  return <WalletOptions />;
}

function App() {
  // 3. Wrap app with Wagmi and React Query context.
  return (
    <div style={{ marginLeft: "100px" }}>
      <WagmiProvider config={config}>
        ^_^
        <QueryClientProvider client={queryClient}>
          <ConnectWallet />
          +++++1+
          <SendTransaction />
          +++++2+
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default App;
