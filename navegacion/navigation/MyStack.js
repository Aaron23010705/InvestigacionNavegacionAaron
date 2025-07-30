import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

// Se crea la función y lo que devolverá
const MyStack = () => {
  return (
    // Mandamos a llamar "NavigationContainer" y envolvemos toda la función en este tal y como en el archivo app
    <NavigationContainer>
      {/* Englobamos las pantallas en Stack.Navigator */}
      <Stack.Navigator>
        {/* Creamos cada pantalla con <Stack.Screen /> */}
        <Stack.Screen
          // Nombre de la pantalla
          name="Home"
          // Componente que será la pantalla
          component={HomeScreen}
          // Título de la pantalla
          options={{title: 'Inicio'}}
        />
        {/* Creamos otra pantalla con el nombre de Profile y el componente que se usará será el ProfileScreen */}
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{title: 'Perfil del Estudiante'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;