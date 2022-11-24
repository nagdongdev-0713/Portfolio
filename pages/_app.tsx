import '../styles/Default.scss'
import type { AppProps } from 'next/app'
import Mainpage from './mainpage'
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from '../components/Navbar';
import Mouse from '../components/Mouse';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      {/* <Mouse /> */}
      <Component {...pageProps} />
    </>
  )
}
