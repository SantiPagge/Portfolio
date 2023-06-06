import '@/styles/globals.css'
import Head from 'next/head'
import { LanguageProvider } from '../../LanguageContext';

export default function App({ Component, pageProps }) {
  return (
  <LanguageProvider>
    <Head>
      <link rel='icon' href='/burger.png'/>
      <title>Santiago Pagge</title>
    </Head>
    <Component {...pageProps} />
  </LanguageProvider>
  );
};