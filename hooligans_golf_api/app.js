const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const jugadorRoutes = require('./routes/jugadorRoutes');
const torneoRoutes = require('./routes/torneoRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const campoRoutes = require('./routes/campoRoutes');
const hoyoRoutes = require('./routes/hoyoRoutes');
const tarjetaPuntuacionRoutes = require('./routes/tarjetaPuntuacionRoutes');
const resultadoRoutes = require('./routes/resultadoRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api', jugadorRoutes);
app.use('/api', torneoRoutes);
app.use('/api', categoriaRoutes);
app.use('/api', campoRoutes);
app.use('/api', hoyoRoutes);
app.use('/api', tarjetaPuntuacionRoutes);
app.use('/api', resultadoRoutes);

const PORT = process.env.PORT || 5000; // Cambia el puerto aquí

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});