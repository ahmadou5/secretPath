'use client'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  
  x1Testnet,
  zetachainAthensTestnet,
  opBNBTestnet,
  bscTestnet,
  optimismSepolia,
  optimismGoerli,
  sepolia,
  baseGoerli,
  polygonMumbai
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";



export const config = getDefaultConfig({
  appName: 'Secret Dapp',
  projectId: 'fa7b299471fa848b2dc52a5e1529ac37',
  chains: [ x1Testnet,
    zetachainAthensTestnet,
    opBNBTestnet,
    bscTestnet,
    optimismSepolia,
    optimismGoerli,
    sepolia,
    baseGoerli,
    polygonMumbai],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

export const EthProvider = ({children}) => {
  return (
    <WagmiProvider  config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider coolMode={true}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};