import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App.jsx";
import "./index.css";
import { config, projectId } from "../src/utils/config.js";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { createWeb3Modal } from "@web3modal/wagmi";

const queryClient = new QueryClient();

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableOnramp: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router basename="/">
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            {<App />}
          </QueryClientProvider>
        </WagmiProvider>
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);
