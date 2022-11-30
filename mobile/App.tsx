import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes'

import { AuthProvider } from './src/contexts/AuthContext';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar
            backgroundColor="#202022"
            barStyle="light-content"
            translucent={false}
          />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>

  );
}
