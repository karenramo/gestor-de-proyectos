import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const PersonaFormulario = () => {
  const [nombre, setNombre] = useState('');
  const [carreraId, setCarreraId] = useState('');
  const [semestre, setSemestre] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/personas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          carrera_id: carreraId,
          semestre: semestre,
        }),
      });
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      // Limpiar los campos después de enviar el formulario
      setNombre('');
      setCarreraId('');
      setSemestre('');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={text => setNombre(text)}
          placeholder="Ingrese el nombre"
        />

        <Text style={styles.label}>Carrera ID:</Text>
        <TextInput
          style={styles.input}
          value={carreraId}
          onChangeText={text => setCarreraId(text)}
          placeholder="Ingrese el ID de la carrera"
        />

        <Text style={styles.label}>Semestre:</Text>
        <TextInput
          style={styles.input}
          value={semestre}
          onChangeText={text => setSemestre(text)}
          placeholder="Ingrese el semestre"
        />

        <Button title="Guardar Persona" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default PersonaFormulario;
