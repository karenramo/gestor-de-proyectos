import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CarreraProyecto = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrera de Proyectos</Text>
      <Text style={styles.description}>
        Esta es la pantalla de la Carrera de Proyectos. Aquí puedes mostrar información sobre los proyectos en los que estás trabajando o cualquier otra información relacionada con tu carrera profesional.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default CarreraProyecto;
