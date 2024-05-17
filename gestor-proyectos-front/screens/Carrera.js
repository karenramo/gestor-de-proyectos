import React, { useState, useEffect } from 'react';

const Carrera = () => {
  const [carreras, setCarreras] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    obtenerCarreras();
  }, []);

  const obtenerCarreras = async () => {
    try {
      const response = await fetch('http://localhost:3000/carreras');
      const data = await response.json();
      setCarreras(data);
    } catch (error) {
      console.error('Error al obtener las carreras:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', width: '100%', height: '100vh', overflow: 'auto' }}>
      <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#333', marginBottom: '30px' }}>Carreras</h2>
      <input
        type="text"
        placeholder="Buscar carrera por nombre o código..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '20px', width: '80%', padding: '10px', fontSize: '18px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '400px', overflowY: 'auto', width: '80%' }}>
        {carreras
          .filter(carrera => carrera.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || carrera.codigo.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(carrera => (
            <li key={carrera.id} style={{ fontSize: '24px', fontWeight: 'bold', color: '#446688', marginBottom: '20px', padding: '10px', borderRadius: '5px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
              <span>{carrera.nombre}</span>
              <span style={{ marginLeft: '10px', color: '#777' }}>Código: {carrera.codigo}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Carrera;
  