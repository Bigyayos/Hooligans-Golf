const express = require('express');
const router = express.Router();

// Rutas de jugadores
const jugadoresRoutes = require('./routes/jugadoresRoutes');
router.use('/jugadores', jugadoresRoutes);

// Rutas de torneos
const torneosRoutes = require('./routes/torneosRoutes');
router.use('/torneos', torneosRoutes);

// Rutas de campos
const camposRoutes = require('./routes/camposRoutes');
router.use('/campos', camposRoutes);

// Rutas de tarjetas
const tarjetasRoutes = require('./routes/tarjetasRoutes');
router.use('/tarjetas', tarjetasRoutes);

// Rutas de categorías
const categoriasRoutes = require('./routes/categoriasRoutes');
router.use('/categorias', categoriasRoutes);

// Rutas de resultados
const resultadosRoutes = require('./routes/resultadosRoutes');
router.use('/resultados', resultadosRoutes);

// Rutas de hoyos
const hoyosRoutes = require('./routes/hoyosRoutes');
router.use('/hoyos', hoyosRoutes);

module.exports = router;
