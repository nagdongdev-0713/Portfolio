import '../styles/Default.scss'
import type { AppProps } from 'next/app'
import "bootstrap-icons/font/bootstrap-icons.css";
import Mouse from '../components/Mouse';
import Footer from '../components/Footer';
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>
          이태일 포트폴리오
        </title>
        <meta content="이태일 포트폴리오" />
      </Head>
      {/* <Mouse /> */}
      <Component {...pageProps} />
    </>
  )
}
