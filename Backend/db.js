const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost', // Cambia esto por la dirección de tu servidor MySQL
  user: 'root',
  password: '',
  database: 'prueva1', // Nombre de tu base de datos
  connectionLimit: 10,
});

const query = (sql, params) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = { query };
