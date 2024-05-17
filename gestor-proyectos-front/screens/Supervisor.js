import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Supervisor = () => {
  const [supervisores, setSupervisores] = useState([]);
  const [carreras, setCarreras] = useState([]);

  useEffect(() => {
    obtenerSupervisores();
    obtenerCarreras();
  }, []);

  const obtenerSupervisores = async () => {
    try {
      const response = await fetch('http://localhost:3000/supervisores');
      const data = await response.json();
      setSupervisores(data);
    } catch (error) {
      console.error('Error al obtener los supervisores:', error);
    }
  };

  const obtenerCarreras = async () => {
    try {
      const response = await fetch('http://localhost:3000/carreras');
      const data = await response.json();
      setCarreras(data);
    } catch (error) {
      console.error('Error al obtener las carreras:', error);
    }
  };

  const obtenerNombreCarrera = (carreraId) => {
    const carrera = carreras.find(carrera => carrera.id === carreraId);
    return carrera ? carrera.nombre : 'Carrera no encontrada';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supervisores</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.columnHeader}>ID</Text>
            <Text style={styles.columnHeader}>Nombre</Text>
            <Text style={styles.columnHeader}>Carrera</Text>
          </View>
          {supervisores.map(supervisor => (
            <View key={supervisor.id} style={styles.tableRow}>
              <Text style={styles.cell}>{supervisor.id}</Text>
              <Text style={styles.cell}>{supervisor.nombre}</Text>
              <Text style={styles.cell}>{obtenerNombreCarrera(supervisor.carrera_id)}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
  },
  columnHeader: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default Supervisor;
