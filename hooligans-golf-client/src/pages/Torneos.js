import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

function Torneos() {
  const [torneos, setTorneos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/torneos')
      .then(response => {
        setTorneos(response.data);
      })
      .catch(error => {
        console.error('Hubo un error al obtener los torneos:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Torneos
      </Typography>
      <List>
        {torneos.map(torneo => (
          <ListItem key={torneo.id}>
            <ListItemText primary={torneo.nombre} secondary={torneo.fecha} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Torneos;