import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TermsPage from "./pages/TermsPage"
import NotFoundPage from "./pages/NotFoundPage"
import MainLayout from "./layouts/mainLayout"
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  ConnectButton,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, useAccount } from 'wagmi';
import { createConfig, http } from 'wagmi'
import {
 bsc,
 bscTestnet
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config2 = createConfig({
  chains: [bsc, bscTestnet],
  transports: {
    [bsc.id]: http('https://bsc-dataseed1.binance.org/'),
    [bscTestnet.id]: http('https://data-seed-prebsc-1-s1.binance.org:8545/'),
  },
})


const config = getDefaultConfig({
  appName: 'test',
  projectId: '94d093dcaee557e85968771be0d78314',
  chains: [bsc, bscTestnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/terms",
        element: <TermsPage />
      }
    ]
  },

])

const App = () => {
  return (
    <WagmiProvider config={config2}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact">
          <RouterProvider router={router} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App