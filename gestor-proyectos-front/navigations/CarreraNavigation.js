import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Carrera from '../screens/Carrera';
import CarreraProyecto from '../screens/CarreraProyecto';

const Stack = createStackNavigator();

const CarreraNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Carrera" component={Carrera} />
      <Stack.Screen name="CarreraProyecto" component={CarreraProyecto} />
    </Stack.Navigator>
  );
}


export default CarreraNavigation;
