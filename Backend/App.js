const express = require('express');
const cors = require('cors');
const app = express();
const carreraRoutes = require('./routes/carreraRoutes');
const supervisorRoutes = require('./routes/supervisorRoutes');
const personaRoutes = require('./routes/personaRoutes');
const proyectoRoutes = require('./routes/proyectoRoutes');

// Middleware para procesar JSON
app.use(express.json());
app.use(cors());

// Rutas de la API
app.use('/carreras', carreraRoutes);
app.use('/supervisores', supervisorRoutes);
app.use('/personas', personaRoutes);
app.use('/proyectos', proyectoRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
