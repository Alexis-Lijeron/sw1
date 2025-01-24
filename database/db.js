//2 - Invocamos a pg y realizamos la conexión
const { Pool } = require('pg');
const pool = new Pool({
  // Con variables de entorno
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña ',
  database: 'tu_base_de_datos',
  port: 5432,  // Asegúrate de definir el puerto si es necesario
  ssl: false,
});

// Verificamos la conexión

module.exports = pool;