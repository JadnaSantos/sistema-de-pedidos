import Head from "next/head";
import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from './styles.module.scss';
import { api } from "../../services/apiClient";
import { toast } from "react-toastify";

type ItemProps = {
  id: string;
  name: string;
}

export default function Product() {

  const [avatar, setAvatarUrl] = useState('')
  const [imageAvatar, setImageAvatar] = useState(null)

  const [categories, setCategories] = useState<ItemProps[]>([])
  const [categorySelected, setCategorySelected] = useState(0)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')


  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const image = event.target.files[0]

    if (!image) {
      return;
    }

    if (image.type === 'image/jpeg' || image.type === 'image/png') {
      setImageAvatar(image)
      setAvatarUrl(URL.createObjectURL(event.target.files[0]))
    }
  }

  const getResponseCategories = async () => {
    const response = await api.get('/category')
    setCategories(response.data)
  }


  useEffect(() => {
    getResponseCategories()
  }, [])

  function handleChangeCategory(event) {
    setCategorySelected(event.target.value)
  }

  async function handleRegister(event: FormEvent) {
    event.preventDefault()

    try {
      const data = new FormData()

      if (name === "" || price === '' || description === '' || imageAvatar === null) {
        toast.error('Preencha todos os campos ')
        return
      }

      data.append('name', name)
      data.append('price', price)
      data.append('description', description)
      data.append('category_id', categories[categorySelected].id)
      data.append('file', imageAvatar)

      await api.post('/product', data)

      toast.success('Cadastrado com sucesso!')

    } catch (error) {
      toast.error('Ops erro ao cadastrar')
    }

    setName('');
    setPrice('');
    setDescription('')
    setImageAvatar(null);
    setAvatarUrl('');
  }

  return (
    <>
      <Head>
        <title>Novo Produto - Sistema de Pedidos</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <h1>Novo Produto</h1>

          <form className={styles.form} onSubmit={handleRegister}>

            <label className={styles.label}>
              <span>+</span>
              <input
                type='file'
                className={styles.inputUpload}
                accept='image/png, image/jpeg'
                onChange={handleFile}
              />

              {avatar && (
                <Image
                  className={styles.preview}
                  src={avatar}
                  alt='Upload de image'
                  width={250}
                  height={250}
                />
              )}

            </label>


            <select value={categorySelected} onChange={handleChangeCategory}>
              {categories.map((item) => {
                return (
                  <option key={item.id}>
                    {item.name}
                  </option>
                )
              })}

            </select>


            <input
              type='text'
              placeholder='Digite o nome da categoria'
              className={styles.input}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <input
              type='text'
              placeholder='Preço do Produto'
              className={styles.input}
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />

            <textarea
              placeholder='Descreve seu produto'
              className={styles.input}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
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
    props: {

    }
  }
})
