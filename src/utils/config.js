import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { bsc, bscTestnet } from "wagmi/chains";
import { cookieStorage, createStorage } from "wagmi";

// 1. Get projectId at https://cloud.walletconnect.com
export const projectId = "f1f04c6e3e1f3f779388b174b77cd23d";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "http://localhost:5173", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [bsc, bscTestnet];

export const config = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
  storage: createStorage({
    storage: cookieStorage,
  }),
});
