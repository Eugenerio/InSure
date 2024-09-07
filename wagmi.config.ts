import { defineConfig } from "@wagmi/cli";
import { blockExplorer } from "@wagmi/cli/plugins";

export default defineConfig({
    out: "src/lib/wagmi/contracts/abi.ts",
    contracts: [],
    plugins: [
        blockExplorer({
            baseUrl: "https://optimism-sepolia.blockscout.com/api",
            contracts: [
                {
                    name: "Insurance",
                    address: "0x3ed6f48ba9fca1a33e959a7628f5b59c15b6b6b9",
                },
            ],
            getAddress({ address }) {
                if (typeof address === "string") return address;
                return Object.values(address)[0];
            },
            name: "Optimism Sepolia",
        }),
    ],
});
