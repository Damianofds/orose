import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { MetaMaskProvider } from "metamask-react";
import MetaMaskCard from '../components/connectorCards/MetaMaskCard';
import ProviderExample from '../components/ProviderExample';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MetaMaskProvider>
      <ChakraProvider>
      {/* <ProviderExample />
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <MetaMaskCard />
      </div> */}
        <Component {...pageProps} />
      </ChakraProvider>
    </MetaMaskProvider>
  )
}
