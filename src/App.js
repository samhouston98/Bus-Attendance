import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import Schedule from './components/Schedule';
import Stats from './components/Stats';
import './App.css'; // Ensure CSS is imported

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Sample game data
  const pastGames = [
    {
      id: 1,
      date: 'January 5, 2025',
      opponent: 'St. Mirren',
      result: 'Won 3-0',
      attendees: ['Ben', 'Calum', 'Greg', 'Liam', 'Paddy', 'Sam', 'Simon'],
      missed: ['John', 'Conor'],
      notes: 'Cold',
    },
    {
      id: 2,
      date: 'January 8, 2025',
      opponent: 'Dundee United',
      result: 'Won 2-0',
      attendees: ['Ben', 'Calum', 'Liam', 'Paddy', 'Sam', 'John'],
      missed: ['Conor', 'Greg', 'Simon'],
      notes: 'Cold',
    },
  ];

  const futureGames = [
    {
      id: 1,
      date: '2025-01-14 17:30', // Tomorrow evening in the correct format
      opponent: 'Kilmarnock',
      details: 'Scottish Cup - 4th Round, Kick-off 17:30',
    },
    {
      id: 2,
      date: '2025-01-22 20:00',
      opponent: 'Young Boys',
      details: 'UEFA Champions League - League Stage, Kick-off 20:00',
    },
    {
      id: 3,
      date: '2025-01-25 15:00',
      opponent: 'Dundee',
      details: 'Scottish Premiership - 1st Phase, Kick-off 15:00',
    },
    {
      id: 4,
      date: '2025-02-10 15:00',
      opponent: 'Dundee United',
      details: 'Scottish Premiership - 1st Phase, Kick-off 15:00',
    },
    {
      id: 5,
      date: '2025-02-25 19:45',
      opponent: 'Aberdeen',
      details: 'Scottish Premiership - 1st Phase, Kick-off 19:45',
    },
    {
      id: 6,
      date: '2025-03-15 15:00',
      opponent: 'Rangers',
      details: 'Scottish Premiership - 1st Phase, Kick-off 15:00',
    },
    {
      id: 7,
      date: '2025-03-29 15:00',
      opponent: 'Hearts',
      details: 'Scottish Premiership - 1st Phase, Kick-off 15:00',
    },
    {
      id: 8,
      date: '2025-04-13 15:00',
      opponent: 'Kilmarnock',
      details: 'Scottish Premiership - 1st Phase, Kick-off 15:00',
    },
  ];

  return (
    <Router>
      <nav>
        <button className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Leaderboard
            </Link>
          </li>
          <li>
            <Link to="/fixtures" onClick={() => setMenuOpen(false)}>
              Fixtures
            </Link>
          </li>
          <li>
            <Link to="/stats" onClick={() => setMenuOpen(false)}>
              Stats
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Leaderboard pastGames={pastGames} />} />
          <Route
            path="/fixtures"
            element={<Schedule pastGames={pastGames} futureGames={futureGames} />}
          />
          <Route path="/stats" element={<Stats pastGames={pastGames} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
