import React from 'react';

const Leaderboard = ({ pastGames }) => {
  const games = pastGames || [];

  const allNames = Array.from(
    new Set(games.flatMap((game) => game.attendees || []))
  );

  return (
    <section>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            {games.map((game, index) => (
              <th key={index}>{new Date(game.date).toLocaleDateString()}</th>
            ))}
            <th>Games Attended</th>
            <th>Attendance Percentage</th>
          </tr>
        </thead>
        <tbody>
          {allNames.map((name) => {
            const gamesAttended = games.filter(
              (game) => game.attendees && game.attendees.includes(name)
            ).length;
            const totalGames = games.length;
            const attendancePercentage = totalGames
              ? ((gamesAttended / totalGames) * 100).toFixed(1)
              : 0;

            return (
              <tr key={name}>
                <td>{name}</td>
                {games.map((game, index) => (
                  <td key={index}>
                    {game.attendees && game.attendees.includes(name) ? '✓' : '✗'}
                  </td>
                ))}
                <td>{gamesAttended}</td>
                <td>{attendancePercentage}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Leaderboard;
