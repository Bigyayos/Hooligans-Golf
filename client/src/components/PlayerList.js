import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('/api/jugadores')
      .then(response => setPlayers(response.data))
      .catch(error => console.error('Error fetching players:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Jugadores</h2>
      <ul>
        {players.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;