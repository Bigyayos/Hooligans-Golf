import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jugadores from './pages/Jugadores';
import Torneos from './pages/Torneos';
import Tarjetas from './pages/Tarjetas';
import Resultados from './pages/Resultados';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jugadores" element={<Jugadores />} />
        <Route path="/torneos" element={<Torneos />} />
        <Route path="/tarjetas" element={<Tarjetas />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>
    </Router>
  );
}

export default App;
