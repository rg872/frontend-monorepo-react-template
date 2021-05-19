import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web-next!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
