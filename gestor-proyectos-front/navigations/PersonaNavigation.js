import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Persona from '../screens/Persona';
import PersonaFormulario from '../screens/PersonaFormulario';

const Stack = createStackNavigator();

const PersonaNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Persona">
      <Stack.Screen name="Persona" component={Persona} options={{ title: 'Lista de Personas' }} />
      <Stack.Screen name="PersonaFormulario" component={PersonaFormulario} options={{ title: 'Formulario de Persona' }} />
    </Stack.Navigator>
  );
};

export default PersonaNavigation;
