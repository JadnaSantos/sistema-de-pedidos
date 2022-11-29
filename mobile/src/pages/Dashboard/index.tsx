import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../../contexts/AuthContext';

export function Dashboard() {
  const { singOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Tela de Dashboard</Text>
      <Button
        title="Sair do App"
        onPress={singOut}
      />

    </View>
  )
}
