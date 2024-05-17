import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Proyecto from '../screens/Proyecto';
import ProyectoFormulario from '../screens/ProyectoFormulario';

const Stack = createStackNavigator();

const ProyectoNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Proyecto" component={Proyecto} />
      <Stack.Screen name="ProyectoFormulario" component={ProyectoFormulario} />
    </Stack.Navigator>
  );
}

export default ProyectoNavigation;
