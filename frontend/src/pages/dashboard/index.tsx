import Head from "next/head"
import { Header } from "../../components/Header"
import styles from './styles.module.scss'
import { FiRefreshCcw } from 'react-icons/fi'
import { useEffect, useState } from "react"
import { api } from "../../services/apiClient"
import { ModalOrder } from "../../components/ModalOrder"


import Modal from 'react-modal';

interface OrderProps {
  id: string;
  table: string | number;
  status: boolean;
  draft: boolean;
  name: string | null;
}

export interface Order {
  id: string;
  amount: number;
  order_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    banner: string;
  },
  order: {
    id: string;
    table: string | number;
    status: boolean;
    name: string | null;
  }
}

export default function Dashboard() {
  const [order, setOrder] = useState<OrderProps[]>([]);
  const [modalItem, setModalItem] = useState<Order[]>()
  const [isOpenModal, setIsOpenModal] = useState(false)

  const getResponseListOrders = async () => {
    const response = await api.get('/orders')
    setOrder(response.data)
  }

  useEffect(() => {
    getResponseListOrders()
  }, [])

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  const handleOpenModalView = async (id: string) => {
    const response = await api.get('/orders/details', {
      params: {
        order_id: id,
      }
    })

    setModalItem(response.data)
    setIsOpenModal(true)
  }

  const handleRefreshOrders = async () => {
    const response = await api.get('/orders')

    setOrder(response.data)
  }

  Modal.setAppElement('#__next');



  const handleFinishItem = async (id: string) => {
    await api.put('/orders/finish', {
      order_id: id,
    })

    const response = await api.get('/orders')

    setOrder(response.data)
    setIsOpenModal(false)
  }

  return (
    <>
      <Head>
        <title>Sistema de Pedidos - Painel</title>
      </Head>

      <div>
        <Header />

        <main className={styles.container}>

          <div className={styles.content}>
            <h2>Ultimos pedidos</h2>
            <button onClick={handleRefreshOrders}>
              <FiRefreshCcw size={25} color="#015f43" />
            </button>
          </div>

          <article className={styles.list}>
            {order.length === 0 && (
              <span className={styles.emptyList}>Nenhum pedido encontrado</span>
            )}

            {order.map(item => (
              <section key={item.id} className={styles.orderItem}>
                <button onClick={() => handleOpenModalView(item.id)}>
                  <div className={styles.tag}></div>
                  <span>Mesa {item.table}</span>
                </button>
              </section>
            ))}
          </article>


        </main>

        {isOpenModal && (
          <ModalOrder
            isOpen={isOpenModal}
            onRequestClose={handleCloseModal}
            order={modalItem}
            handleFinishItem={handleFinishItem}
          />
        )}
      </div>
    </>
  )
}
