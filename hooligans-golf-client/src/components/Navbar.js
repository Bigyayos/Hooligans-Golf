import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Hooligans Golf
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/jugadores">Jugadores</Button>
        <Button color="inherit" component={Link} to="/torneos">Torneos</Button>
        <Button color="inherit" component={Link} to="/tarjetas">Tarjetas</Button>
        <Button color="inherit" component={Link} to="/resultados">Resultados</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;