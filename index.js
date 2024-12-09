const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const db = require('./models');
db.sequelize.sync();

const jugadoresRoutes = require('./routes/jugadoresRoutes');
const torneosRoutes = require('./routes/torneosRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');
const camposRoutes = require('./routes/camposRoutes');
const hoyosRoutes = require('./routes/hoyosRoutes');
const tarjetasRoutes = require('./routes/tarjetasRoutes');
const resultadosRoutes = require('./routes/resultadosRoutes');

app.use('/api/jugadores', jugadoresRoutes);
app.use('/api/torneos', torneosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/campos', camposRoutes);
app.use('/api/hoyos', hoyosRoutes);
app.use('/api/tarjetas', tarjetasRoutes);
app.use('/api/resultados', resultadosRoutes);

app.get('/', (req, res) => {
  res.send('API de Hooligans Golf');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});