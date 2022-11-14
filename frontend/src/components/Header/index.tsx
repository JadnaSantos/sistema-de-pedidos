import Link from 'next/link';
import styles from './styles.module.scss';
import Logo from '../../../public/Logo.svg';
import Image from 'next/image';
import { FiLogOut } from 'react-icons/fi'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react';


export function Header() {
  const { singOut } = useContext(AuthContext)
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href='/dashboard'>
          <Image
            src={Logo}
            width={190}
            height={60}
            alt="logo sistema de agendamento" />
        </Link>

        <nav className={styles.menu}>
          <Link href='/category'>
            <p>Categoria</p>
          </Link>

          <Link href='/product'>
            <p>Cardápio</p>
          </Link>


          <button
            onClick={singOut}
          >
            <FiLogOut
              color='#2078ac'
              size={24}
            />

          </button>
        </nav>

      </div>
    </header>
  )
}
