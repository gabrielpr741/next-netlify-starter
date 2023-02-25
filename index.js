import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sac-Hotline!</title>
        <link rel="icon" type="image/png" href="https://ri.oi.com.br/wp-content/themes/mziq_oi_ri/assets/img/logo-new-2.png"/>
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
