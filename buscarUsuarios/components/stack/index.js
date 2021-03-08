import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Buscador from '../views/buscador'
import Usuario from '../views/usuario'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Buscador}
            options={{
                title: 'Buscar usuario de GitHub'
            }}
        />
        <Stack.Screen 
            name="Profile" 
            component={Usuario}
            options={{
                title: 'Perfil'
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack