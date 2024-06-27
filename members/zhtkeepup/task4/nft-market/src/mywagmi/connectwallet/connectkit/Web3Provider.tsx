import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, sepolia, optimism } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

// const walletconnect_project_id=process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
const walletconnect_project_id = "b0154ed86b1ca47aea929c0410e66c7a";

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [sepolia],
    transports: {
      // RPC URL for each chain
      [sepolia.id]: http(),
      // `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`
    },

    // Required API Keys
    walletConnectProjectId: walletconnect_project_id,

    // Required App Info
    appName: "My NFT Market",

    // Optional App Info
    appDescription: "My NFT Market's Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
