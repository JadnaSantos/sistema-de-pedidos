import { useRoute, RouteProp } from '@react-navigation/native'
import { Button, Container, Content, Text } from './styles';
import { Feather } from '@expo/vector-icons';

type RouteDetailsParams = {
  Order: {
    number: number | string;
    order_id: string;
  }
}

type OrderRouteProps = RouteProp<RouteDetailsParams, 'Order'>

export function Order() {
  const route = useRoute<OrderRouteProps>()
  return (
    <Container>
      <Content>
        <Text>Mesa : {route.params.number}</Text>

        <Button>
          <Feather name='trash-2' size={28} color='#ab222e' />
        </Button>
      </Content>
    </Container>
  )
}