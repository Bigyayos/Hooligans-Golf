import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

function Resultados() {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/resultados')
      .then(response => {
        setResultados(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los resultados:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Resultados
      </Typography>
      <List>
        {resultados.map(resultado => (
          <ListItem key={resultado.id}>
            <ListItemText primary={`Jugador: ${resultado.jugadorId}, Torneo: ${resultado.torneoId}, Puntuación: ${resultado.puntuacion}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Resultados;