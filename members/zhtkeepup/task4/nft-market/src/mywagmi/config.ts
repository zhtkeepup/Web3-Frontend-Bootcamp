import { http, createConfig } from "wagmi";
import { mainnet, base, sepolia, optimism } from "wagmi/chains";

import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = "b0154ed86b1ca47aea929c0410e66c7a"; //  "<WALLETCONNECT_PROJECT_ID>";

export const config = createConfig({
  chains: [sepolia, mainnet, base],
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});

export const configS = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});

export const configA = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export const configB = createConfig({
  chains: [optimism],
  transports: {
    [optimism.id]: http(),
  },
});
