import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../pages/Dashboard';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="dashboard"
        component={Dashboard}
      />
    </Navigator>
  )
}

