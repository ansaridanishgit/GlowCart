import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import { AuthProvider } from './src/Context/AuthContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FiltersProvider } from './src/Context/FiltersContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <FiltersProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </FiltersProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
