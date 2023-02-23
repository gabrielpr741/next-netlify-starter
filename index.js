import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sac-Hotline!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Suporte SAC-HL" />
        <p className="description">
          Tudo o que você precisa em um só lugar <code>tahto.netlify.app</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
