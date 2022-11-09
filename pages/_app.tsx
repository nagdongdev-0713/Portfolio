import '../styles/Default.scss'
import type { AppProps } from 'next/app'
import Mainpage from './mainpage'
import "bootstrap-icons/font/bootstrap-icons.css";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Mainpage>
        <Component {...pageProps} />
      </Mainpage>
    </>
  )
}
