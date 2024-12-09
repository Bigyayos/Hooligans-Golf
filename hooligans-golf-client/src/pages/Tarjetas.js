import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

function Tarjetas() {
  const [tarjetas, setTarjetas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tarjetas-puntuacion')
      .then(response => {
        setTarjetas(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener las tarjetas de puntuación:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Tarjetas de Puntuación
      </Typography>
      <List>
        {tarjetas.map(tarjeta => (
          <ListItem key={tarjeta.id}>
            <ListItemText primary={`Jugador: ${tarjeta.jugadorId}, Torneo: ${tarjeta.torneoId}, Hoyo: ${tarjeta.hoyoId}, Puntuación: ${tarjeta.puntuacion}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Tarjetas;