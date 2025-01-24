//2 - Invocamos a pg y realizamos la conexión
const { Pool } = require('pg');
const pool = new Pool({
  // Con variables de entorno
  host: 'dpg-cu9qt7t6l47c73ad7tfg-a',
  user: 'sw1_user',
  password: 'cDer7803YDUhFfiFKdm7NvqJCY0QpkeO ',
  database: 'sw1',
  port: 5432,  // Asegúrate de definir el puerto si es necesario
  ssl: {
    rejectUnauthorized: false // Esto permite conexiones SSL sin necesidad de un certificado verificado
  }
});

// Verificamos la conexión

module.exports = pool;
