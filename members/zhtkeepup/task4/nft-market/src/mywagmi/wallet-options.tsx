import * as React from "react";
import { Connector, useConnect } from "wagmi";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  {
    // console.log("connector.uid:", connectors);
  }

  return connectors
    .filter((c) => c.id == "injected")
    .map((connector) => (
      <button key={connector.uid} onClick={() => connect({ connector })}>
        {
          // connector.name
          "Connect Wallewt"
        }
      </button>
    ));
}
