import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppStateProvider } from './src/state/AppState';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AppStateProvider>
      <StatusBar style="dark" />
      <AppNavigator />
    </AppStateProvider>
  );
}
