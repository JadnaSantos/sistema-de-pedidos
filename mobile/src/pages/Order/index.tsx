import { useRoute, RouteProp } from '@react-navigation/native'
import {
  Button,
  Container,
  Content,
  Text,
  DropDown,
  TextDropdown,
  QuantityContainer,
  Input,
  Actions,
  ButtonAction,
  ButtonActionText,
  ButtonAdvanced,
  ButtonAdvancedText
} from './styles';
import { Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ModalPicker } from '../../components/ModalPicker'

type RouteDetailsParams = {
  Order: {
    number: number | string;
    order_id: string;
  }
}

export type CategoryProps = {
  id: string;
  name: string;
}

type ProductProps = {
  id: string;
  name: string;

}

type OrderRouteProps = RouteProp<RouteDetailsParams, 'Order'>

export function Order() {
  const route = useRoute<OrderRouteProps>()
  const navigation = useNavigation()

  const [category, setCategory] = useState<CategoryProps[] | []>([])
  const [categorySelected, setCategorySelected] = useState<CategoryProps | undefined>()
  const [amount, setAmount] = useState('1')
  const [isOpenModal, setIsOpenModal] = useState(false)

  const [products, setProducts] = useState<ProductProps[] | []>([])
  const [productSelected, setProductSelected] = useState<ProductProps | undefined>()
  const [isOpenModalProduct, setIsOpenModalProduct] = useState(false)

  async function loadData() {
    const response = await api.get('/category')

    setCategory(response.data)
    setCategorySelected(response.data[0])
  }

  useEffect(() => {
    loadData()
  }, [])

  async function loadProduct() {
    const response = await api.get('/categories/products', {
      params: {
        category_id: categorySelected?.id
      }
    })

    setProducts(response.data)
    setProductSelected(response.data)
  }

  useEffect(() => {
    loadProduct
  }, [categorySelected])

  async function handleCloseOrder() {
    try {
      await api.delete('/orders', {
        params: {
          order_id: route.params?.order_id
        }
      })
      navigation.goBack();

    } catch (error) {
      console.log(error)
    }
  }

  function handleChangeCategory(item: CategoryProps) {
    setCategorySelected(item)
  }

  return (
    <>
      <Container>
        <Content>
          <Text>Mesa {route.params.number}</Text>

          <Button
            onPress={handleCloseOrder}
          >
            <Feather name='trash-2' size={28} color='#ab222e' />
          </Button>
        </Content>

        {category.length !== 0 && (
          <DropDown
            onPress={() => setIsOpenModal(true)}
          >
            <TextDropdown>{categorySelected?.name}</TextDropdown>
          </DropDown>
        )}

        {products.length !== 0 && (
          <DropDown>
            <TextDropdown>{productSelected?.name}</TextDropdown>
          </DropDown>
        )}

        <QuantityContainer>
          <TextDropdown>Quantidade</TextDropdown>
          <Input
            placeholder="Número da mesa"
            placeholderTextColor="#fff"
            keyboardType='numeric'
            value={amount}
            onChangeText={setAmount}
          />
        </QuantityContainer>

        <Actions>
          <ButtonAction>
            <ButtonActionText>+</ButtonActionText>
          </ButtonAction>

          <ButtonAdvanced>
            <ButtonAdvancedText>Avançar</ButtonAdvancedText>
          </ButtonAdvanced>

        </Actions>

        <Modal
          transparent={true}
          visible={isOpenModal}
          animationType='fade'
        >
          <ModalPicker
            handleCloseModal={() => setIsOpenModal(false)}
            options={category}
            selectecItem={handleChangeCategory}
          />
        </Modal>

      </Container >
    </>

  )
}
