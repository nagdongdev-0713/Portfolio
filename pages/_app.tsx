import '../styles/Default.scss'
import type { AppProps } from 'next/app'
import "bootstrap-icons/font/bootstrap-icons.css";
import Mouse from '../components/Mouse';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>
          이연우 포트폴리오
        </title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta content="@salm0n_LEE" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:description" content="낙동12 Developer" />
        <meta property="og:site_name" content="Portfolio" />
      </Head>
      {/* 과하게 움직일시 살짝 버벅거리는 현상으로 인해 보류 */}
      {/* <Mouse /> */}
      <Component {...pageProps} />
    </>
  )
}
