import '../styles/globals.css';
// import axios from 'axios';
import type { AppProps } from 'next/app';
// import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // const [isHashValid, setIsHashValid] = useState(false);

  // useEffect(() => {
  //   axios
  //     .post('/api/validate-hash', { hash: window.Telegram.WebApp.initData })
  //     .then((response) => setIsHashValid(response.status === 200));
  // }, []);

  // if (!isHashValid) {
  //   return null;
  // }
  return <Component {...pageProps} />;
}

export default MyApp;
