import Head from 'next/head'
import Mainpage from './mainpage'


export default function Home() {
  return (
    <div>
      <Head>
        <title>
          이태일 포트폴리오
        </title>
        <meta content="이태일 포트폴리오" />
      </Head>
      <Mainpage />
    </div>
  )
}
