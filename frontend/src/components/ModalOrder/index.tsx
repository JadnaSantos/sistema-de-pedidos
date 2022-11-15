import Modal from 'react-modal';
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'
import { Order } from '../../pages/dashboard';

interface ModalOrderProps {
  isOpen: boolean;
  onRequestClose: () => void;
  handleFinishItem: (id: string) => void;
  order: Order[]
}

export function ModalOrder({ isOpen, onRequestClose, order, handleFinishItem }: ModalOrderProps) {

  const customStyles = {
    content: {
      top: ' 50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',

      padding: '30px',
      backgroundColor: '#202022',

      transform: 'translate(-50%, -50%)',
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
        style={{ background: 'transparent', border: 0 }}
      >
        <FiX size={45} color='#ab222e' />
      </button>

      <div className={styles.container}>

        <h2>Detalhes do Pedido</h2>
        <span className={styles.table}>
          Mesa: <strong> {order[0].order.table}</strong>
        </span>

        {order.map(item => (
          <section
            key={item.id}
            className={styles.content}
          >
            <span>
              {item.amount} - {item.product.name}
            </span>
            <span
              className={styles.description}
            >
              {item.product.description}
            </span>
          </section>
        ))}

        <button
          className={styles.button}
          onClick={() => { handleFinishItem(order[0].order_id) }}
        >
          Concluir pedido
        </button>

      </div>
    </Modal>
  )
}
