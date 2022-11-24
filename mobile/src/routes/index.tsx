import React from "react";

import { View, ActivityIndicator } from "react-native";

import { AuthRoutes } from "./auth.routes"
import { AppRoutes } from "./app.routes"

export function Routes() {
  const isAuthenticated = false;
  const loading = false;

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#f1f1f1',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator size={60} color='#202022' />
      </View>
    )
  }

  return (
    isAuthenticated ? <AppRoutes /> : <AuthRoutes />
  )
}
