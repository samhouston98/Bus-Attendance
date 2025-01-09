import React from 'react';

const Leaderboard = ({ pastGames }) => {
  // Ensure `pastGames` is a defined array
  const games = pastGames || [];

  // Get a unique list of names from `attendees` in past games
  const allNames = Array.from(
    new Set(games.flatMap((game) => game.attendees || []))
  );

  // Create an array of player stats
  const leaderboardData = allNames.map((name) => {
    const gamesAttended = games.filter(
      (game) => game.attendees && game.attendees.includes(name)
    ).length;
    const totalGames = games.length;
    const attendancePercentage = totalGames
      ? ((gamesAttended / totalGames) * 100).toFixed(1)
      : 0;

    return { name, gamesAttended, attendancePercentage };
  });

  // Sort leaderboard by most games attended
  const sortedLeaderboard = leaderboardData.sort((a, b) => b.gamesAttended - a.gamesAttended);

  return (
    <section>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            {games.map((game, index) => (
              <th key={index}>
                {new Date(game.date).toLocaleDateString('en-GB', {
                  month: 'short',
                  day: 'numeric',
                })}
              </th>
            ))}
            <th>Games Attended</th>
            <th>Attendance Percentage</th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaderboard.map(({ name, gamesAttended, attendancePercentage }) => (
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
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Leaderboard;
