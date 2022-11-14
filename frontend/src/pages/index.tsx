import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import styles from '../../styles/home.module.scss'
import { Button } from '../components/ui/Button';
import { AuthContext } from '../contexts/AuthContext';
import Logo from '../../public/Logo.svg'
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import Head from 'next/head'
import { canSSRGuest } from '../utils/canSSRGuest'


const FormValidationSchema = zod.object({
  email: zod.string(),
  password: zod.string()
})

type SchemaFields = zod.infer<typeof FormValidationSchema>

export default function Home() {

  const { signIn } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSchema)
  })

  const { handleSubmit, register, reset } = FormValidation

  async function handleLogin(data: SchemaFields) {
    const { email, password } = data

    setLoading(true)

    await signIn({
      email, password
    })

    setLoading(false)

    reset()
  }

  return (
    <>
      <Head>
        <title>Sistema de Pedidos - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={Logo} alt="logo sistema de agendamento" />

        <div className={styles.login}>
          <form onSubmit={handleSubmit(handleLogin)}>
            <input
              placeholder="Digite seu email"
              type="text"
              required
              {...register("email")}
            />

            <input
              placeholder="Sua senha"
              required
              type="password"
              {...register("password")}
            />

            <Button
              type="submit"
              loading={loading}
            >
              Acessar
            </Button>
          </form>

          <Link href="/signup" className={styles.text}>
            Nao possui uma conta? Cadastre-se
          </Link>

        </div>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (context) => {
  return {
    props: {}
  }
})
