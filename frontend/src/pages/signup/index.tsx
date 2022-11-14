import React, { useContext, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import styles from '../../../styles/home.module.scss'
import Logo from '../../../public/Logo.svg'
import Link from 'next/link'
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { Button } from '../../components/ui/Button'
import { AuthContext } from '../../contexts/AuthContext'

const FormValidationSignupSchema = zod.object({
  name: zod.string(),
  email: zod.string(),
  password: zod.string()
})

type SchemaFields = zod.infer<typeof FormValidationSignupSchema>

export default function Signup() {
  const { singUp } = useContext(AuthContext)

  const [loading, setLoading] = useState(false)

  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationSignupSchema)
  })

  const { handleSubmit, register, reset } = FormValidation

  async function handleSignup(data: SchemaFields) {
    const { name, email, password } = data

    setLoading(true)

    await singUp({
      name, email, password
    })

    setLoading(false)

    reset()
  }


  return (
    <>
      <Head>
        <title>Faça o seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={Logo} alt="logo" />

        <div className={styles.login}>
          <h2>Crie sua conta</h2>
          <form onSubmit={handleSubmit(handleSignup)}>
            <input
              placeholder='Digite seu nome'
              type="text"
              {...register("name")}
            />
            <input
              placeholder='Digite seu email'
              type="text"
              {...register("email")}
            />
            <input
              placeholder='Digite seu senha'
              type='password'
              {...register("password")}

            />
            <Button
              type="submit"
              loading={loading}
            >
              Cadastrar
            </Button>

          </form>


          <Link href="/" className={styles.text}>
            Ja possui uma conta? Faça login!
          </Link>
        </div>
      </div>
    </>
  )
}
