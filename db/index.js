const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prueva1' // Asegúrate de cambiar esto al nombre de tu base de datos
});

// Datos a insertar en la tabla carrera
const datosCarrera = [
  { "nombre": "Electrónica y Automatización Industrial", "codigo": "C5" },
  { "nombre": "Operaciones Mineras", "codigo": "C11" },
  { "nombre": "Operación de Plantas de Procesamiento de Minerales", "codigo": "C19" },
  { "nombre": "Administración de Redes y Comunicaciones", "codigo": "C20" },
  { "nombre": "Gestión y Mantenimiento de Maquinaria Pesada", "codigo": "C21" },
  { "nombre": "Gestión y Mantenimiento de Maquinaria Industrial", "codigo": "C22" },
  { "nombre": "Electricidad Industrial", "codigo": "C23" },
  { "nombre": "Diseño y Desarrollo de Software", "codigo": "C24" },
  { "nombre": "Gestión de Seguridad y Salud en el Trabajo", "codigo": "C27" },
  { "nombre": "Mecánica Automotriz", "codigo": "D1" },
  { "nombre": "Mantenimiento de Equipo Pesado", "codigo": "D10" }
]

// Insertar datos en la tabla carrera
connection.connect(err => {
  if (err) {
    console.error('Error de conexión:', err);
    return;
  }
  
  console.log('Conexión exitosa a la base de datos');

  // Insertar cada dato en la tabla carrera
  datosCarrera.forEach(dato => {
    connection.query('INSERT INTO carrera SET ?', dato, (error, results, fields) => {
      if (error) {
        console.error('Error al insertar dato:', error);
      } else {
        console.log('Dato insertado con éxito:', dato);
      }
    });
  });
  
  // Cerrar la conexión después de insertar todos los datos
  connection.end();
});
