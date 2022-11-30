import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../pages/Dashboard';
import { Order } from '../pages/Order';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />

      <Screen
        name="order"
        component={Order}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}

