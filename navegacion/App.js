import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import MyStack from './MyStack';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  return (
    <>
    <NavigationContainer>
            {/* Componente de navegación */}
      <MyStack />
    </NavigationContainer>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});