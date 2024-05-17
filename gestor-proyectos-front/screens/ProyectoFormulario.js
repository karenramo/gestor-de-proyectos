import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const ProyectoFormulario = () => {
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [sede, setSede] = useState('');
  const [ano, setAno] = useState('');
  const [carreraId, setCarreraId] = useState('');
  const [semestre, setSemestre] = useState('');
  const [liderId, setLiderId] = useState('');
  const [supervisorId, setSupervisorId] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [tiempoDias, setTiempoDias] = useState('');
  const [avanceProyecto, setAvanceProyecto] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/proyectos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre_proyecto: nombreProyecto,
          sede: sede,
          año: ano,
          carrera_id: carreraId,
          semestre: semestre,
          lider_id: liderId,
          supervisor_id: supervisorId,
          observaciones: observaciones,
          descripcion: descripcion,
          fecha_inicio: fechaInicio,
          fecha_fin: fechaFin,
          tiempo_dias: tiempoDias,
          avance_proyecto: avanceProyecto,
        }),
      });
      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      // Limpiar los campos después de enviar el formulario
      setNombreProyecto('');
      setSede('');
      setAno('');
      setCarreraId('');
      setSemestre('');
      setLiderId('');
      setSupervisorId('');
      setObservaciones('');
      setDescripcion('');
      setFechaInicio('');
      setFechaFin('');
      setTiempoDias('');
      setAvanceProyecto('');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.label}>Nombre del Proyecto:</Text>
        <TextInput
          style={styles.input}
          value={nombreProyecto}
          onChangeText={text => setNombreProyecto(text)}
          placeholder="Ingrese el nombre del proyecto"
        />

        <Text style={styles.label}>Sede:</Text>
        <TextInput
          style={styles.input}
          value={sede}
          onChangeText={text => setSede(text)}
          placeholder="Ingrese la sede"
        />

        <Text style={styles.label}>Año:</Text>
        <TextInput
          style={styles.input}
          value={ano}
          onChangeText={text => setAno(text)}
          placeholder="Ingrese el año"
        />

        <Text style={styles.label}>Carrera ID:</Text>
        <TextInput
          style={styles.input}
          value={carreraId}
          onChangeText={text => setCarreraId(text)}
          placeholder="Ingrese la carrera ID"
        />

        <Text style={styles.label}>Semestre:</Text>
        <TextInput
          style={styles.input}
          value={semestre}
          onChangeText={text => setSemestre(text)}
          placeholder="Ingrese el semestre"
        />

        <Text style={styles.label}>Líder ID:</Text>
        <TextInput
          style={styles.input}
          value={liderId}
          onChangeText={text => setLiderId(text)}
          placeholder="Ingrese el ID del líder"
        />

        <Text style={styles.label}>Supervisor ID:</Text>
        <TextInput
          style={styles.input}
          value={supervisorId}
          onChangeText={text => setSupervisorId(text)}
          placeholder="Ingrese el ID del supervisor"
        />

        <Text style={styles.label}>Observaciones:</Text>
        <TextInput
          style={styles.input}
          value={observaciones}
          onChangeText={text => setObservaciones(text)}
          placeholder="Ingrese las observaciones"
        />

        <Text style={styles.label}>Descripción:</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          value={descripcion}
          onChangeText={text => setDescripcion(text)}
          placeholder="Ingrese la descripción"
          multiline
        />

        <Text style={styles.label}>Fecha de Inicio:</Text>
        <TextInput
          style={styles.input}
          value={fechaInicio}
          onChangeText={text => setFechaInicio(text)}
          placeholder="Ingrese la fecha de inicio"
        />

        <Text style={styles.label}>Fecha de Fin:</Text>
        <TextInput
          style={styles.input}
          value={fechaFin}
          onChangeText={text => setFechaFin(text)}
          placeholder="Ingrese la fecha de fin"
        />

        <Text style={styles.label}>Tiempo en Días:</Text>
        <TextInput
          style={styles.input}
          value={tiempoDias}
          onChangeText={text => setTiempoDias(text)}
          placeholder="Ingrese el tiempo en días"
        />

        <Text style={styles.label}>Avance del Proyecto:</Text>
        <TextInput
          style={styles.input}
          value={avanceProyecto}
          onChangeText={text => setAvanceProyecto(text)}
          placeholder="Ingrese el avance del proyecto"
        />

        <Button title="Guardar Proyecto" onPress={handleSubmit} />
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

export default ProyectoFormulario;
