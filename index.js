import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sac-Hotline!</title>
        <link rel="icon" type="image/png" href="https://media.glassdoor.com/sqll/5705884/tahto-squarelogo-1646295180355.png"/>
      </Head>

      <main>
        <Header title="Suporte SAC-HOTLINE" />
        <p className="description">
          Tudo o que você precisa em um só lugar <code>tahto.netlify.app</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
