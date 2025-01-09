import React, { useState } from 'react';

const GameInput = ({ updateGames }) => {
  const [date, setDate] = useState('');
  const [opponent, setOpponent] = useState('');
  const [attendees, setAttendees] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      id: Date.now(),
      date,
      opponent,
      attendees: attendees.split(',').map((name) => name.trim()),
    };
    updateGames(newGame);
    setDate('');
    setOpponent('');
    setAttendees('');
  };

  return (
    <div>
      <h2>Add Game</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date: </label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="e.g., January 10, 2025"
          />
        </div>
        <div>
          <label>Opponent: </label>
          <input
            type="text"
            value={opponent}
            onChange={(e) => setOpponent(e.target.value)}
            placeholder="e.g., Dundee"
          />
        </div>
        <div>
          <label>Attendees (comma-separated): </label>
          <input
            type="text"
            value={attendees}
            onChange={(e) => setAttendees(e.target.value)}
            placeholder="e.g., Ben, Liam, Paddy"
          />
        </div>
        <button type="submit">Add Game</button>
      </form>
    </div>
  );
};

export default GameInput;
