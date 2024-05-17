import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import PersonaNavigation from './PersonaNavigation';
import ProyectoNavigation from './ProyectoNavigation'; // Importa ProyectoNavigation
import Supervisor from '../screens/Supervisor';
import CarreraNavigation from './CarreraNavigation';

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Persona" component={PersonaNavigation} options={{ headerShown: false }}/>
      {/* Usa ProyectoNavigation en lugar de directamente el componente Proyecto */}
      <Stack.Screen name="Proyecto" component={ProyectoNavigation} options={{ headerShown: false }}/>
      <Stack.Screen name="Supervisor" component={Supervisor} />
      <Stack.Screen name="Carrera" component={CarreraNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
