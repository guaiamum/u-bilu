
import "../styles/globals.css";

import { Provider as ReduxProvider } from 'react-redux'
import type { AppProps } from 'next/app'
import Head from "next/head";

import store, { persistor } from '../app/store'
import { PersistGate } from '../app/store/persist'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <title>Next.js PWA Example</title>

          <link rel="manifest" href="/manifest.json" />
          <link
            href="/icons/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/icons/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          {/*  */}
          <meta name="theme-color" content="#317EFB" />
          {/* FONTS */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </ReduxProvider>
  );
}
