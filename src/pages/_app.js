import '@/styles/globals.css';
import { GoogleFonts } from 'next-google-fonts';
import Head from 'next/head';
import { LanguageProvider } from '../../LanguageContext';

export default function App({ Component, pageProps }) {
  return (
  <LanguageProvider>
    <Head>
      <link rel='icon' href='/burger.png'/>
      <title>Santiago Pagge</title>
    </Head>
    <GoogleFonts href='https://fonts.googleapis.com/css2?family=Kanit&display=swap' />
    <Component {...pageProps} />
  </LanguageProvider>
  );
};