import Head from "next/head";
import { Header } from '../../components/Header';
import styles from './styles.module.scss';
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../services/apiClient";
import { canSSRAuth } from '../../utils/canSSRAuth'


const FormValidationNameCategorySchema = zod.object({
  name: zod.string()
})

type SchemaFields = zod.infer<typeof FormValidationNameCategorySchema>

export default function Category() {

  const FormValidation = useForm<SchemaFields>({
    resolver: zodResolver(FormValidationNameCategorySchema)
  })

  const { handleSubmit, register, reset } = FormValidation

  async function handleRegister(data: SchemaFields) {
    const { name } = data

    await api.post('/category', {
      name
    })

    toast.success('Categoria cadastrada com sucesso!')

    reset()
  }

  return (
    <>
      <Head>
        <title>Sistema de Pedidos - Categoria</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <h1>Cadastrar categoria</h1>

          <form
            onSubmit={handleSubmit(handleRegister)}
            className={styles.form}
          >
            <input
              type='text'
              placeholder='Digite o nome da categoria'
              className={styles.input}
              {...register("name")}
            />

            <button
              type='submit'
              className={styles.button}
            >
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  )
}

export const getServerSideProsp = canSSRAuth(async (context) => {
  return {
    props: {}
  }
})

