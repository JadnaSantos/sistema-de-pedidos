import Head from "next/head"
import { Header } from "../../components/Header"
import { canSSRAuth } from "../../utils/canSSRAuth"


export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Sistema de Pedidos - Painel</title>
      </Head>

      <div>
        <Header />
        <h1>Painel</h1>
      </div>
    </>
  )
}


export const getServerSideProsp = canSSRAuth(async (context) => {
  return {
    props: {}
  }
})
