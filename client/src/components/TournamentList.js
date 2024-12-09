import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TournamentList() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    axios.get('/api/torneos')
      .then(response => setTournaments(response.data))
      .catch(error => console.error('Error fetching tournaments:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Torneos</h2>
      <ul>
        {tournaments.map(tournament => (
          <li key={tournament.id}>{tournament.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TournamentList;