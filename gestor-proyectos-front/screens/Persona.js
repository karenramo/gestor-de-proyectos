import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Personas = () => {
  const navigation = useNavigation();
  const [personas, setPersonas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    obtenerPersonas();
  }, []);

  const obtenerPersonas = async () => {
    try {
      const response = await fetch('http://localhost:3000/personas');
      if (!response.ok) {
        throw new Error('Error al obtener las personas');
      }
      const data = await response.json();
      setPersonas(data);
      setLoading(false);
    } catch (error) {
      setError('Error al obtener las personas. Por favor, inténtalo de nuevo más tarde.');
      console.error('Error al obtener las personas:', error);
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const handleNavigateToFormulario = () => {
    navigation.navigate('PersonaFormulario');
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', width: '100%', height: '100vh', overflow: 'auto' }}>
      <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#333', marginBottom: '30px' }}>Personas</h2>
      {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}
      <input
        type="text"
        placeholder="Buscar persona..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', fontSize: '18px', borderRadius: '5px', border: '1px solid #007bff', width: '80%' }}
      />
      <Button title="Ir al formulario de persona" onPress={handleNavigateToFormulario} />
      <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '400px', overflowY: 'auto', width: '80%' }}>
        {personas
          .filter(persona => persona.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(persona => (
            <li key={persona.id} style={{ fontSize: '24px', fontWeight: 'bold', color: '#446688', marginBottom: '20px', padding: '10px', borderRadius: '5px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
              {persona.nombre}
            </li>
          ))}
      </ul>
      
    </div>
  );
};

export default Personas;
