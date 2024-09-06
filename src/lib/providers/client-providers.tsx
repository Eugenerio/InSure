"use client";
import {ReactNode} from "react";
import { WagmiProvider } from "wagmi";
import {wagmiConfig} from "@/lib/wagmi/config";
import {QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {WCProvider} from "@/lib/context";

interface Props {
    children: ReactNode;
}

const queryClient = new QueryClient();

export const ClientProviders = ({ children }: Props) => {
    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <WCProvider>
                    {children}
                </WCProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}