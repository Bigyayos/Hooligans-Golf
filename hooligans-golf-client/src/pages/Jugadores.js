import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

function Jugadores() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jugadores')
      .then(response => {
        setJugadores(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los jugadores:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Jugadores
      </Typography>
      <List>
        {jugadores.map(jugador => (
          <ListItem key={jugador.id}>
            <ListItemText primary={jugador.nombre} secondary={jugador.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Jugadores;