import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../pages/Dashboard';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

