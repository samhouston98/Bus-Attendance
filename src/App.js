import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Leaderboard from './components/Leaderboard';
import Schedule from './components/Schedule';
import Stats from './components/Stats';
import Flem from './components/Flem';
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
    {
      id: 3,
      date: 'January 18, 2025',
      opponent: 'Kilmarnock',
      result: 'Won 2-1',
      attendees: ['Ben', 'Calum', 'Liam', 'Paddy', 'Sam', 'John', 'Conor', 'Greg'],
      missed: ['Simon'],
      notes: 'Dry Jan gimps',
    },
    {
      id: 4,
      date: 'January 22, 2025',
      opponent: 'Young Boys',
      result: 'Won 1-0',
      attendees: ['Ben', 'Calum', 'Liam', 'Paddy', 'Sam', 'John', 'Conor', 'Greg', 'Simon'],
      missed: [],
      notes: 'Full house baby',
    },
    {
      id: 5,
      date: 'February 05, 2025',
      opponent: 'Dundee',
      result: 'Won 6-0',
      attendees: ['Ben', 'Calum', 'Liam', 'Paddy', 'Sam', 'Conor', 'Simon'],
      missed: ['Greg', 'John'],
      notes: 'Daddy Daizen Double',
    },
    {
      id: 6,
      date: 'February 08, 2025',
      opponent: 'Raith',
      result: 'Won 5-0',
      attendees: ['Ben', 'Calum', 'Liam', 'Paddy', 'Sam', 'Conor', 'Greg',],
      missed: [ 'John','Simon'],
      notes: 'Daddy Daizen Double',
    },
  ];

  const futureGames = [
  
   
 
    {
      id: 5,
      date: '2025-02-12 20:00',
      opponent: 'Bayern',
      details: 'Champion League Knockouts, Kick-off 20:00',
    },
    {
      id: 6,
      date: '2025-02-15 15:00',
      opponent: 'Dundee United',
      details: 'Scottish Premiership - 1st Phase, Kick-off 15:00',
    },
    {
      id: 7,
      date: '2025-02-22 15:00',
      opponent: 'Hibs',
      details: 'Scottish Premiership - 1st Phase, Kick-off 12:30',
    },
    {
      id: 7,
      date: '2025-02-25 19:45',
      opponent: 'Aberdeen',
      details: 'Scottish Premiership - 1st Phase, Kick-off 19:45',
    },
    {
      id: 8,
      date: '2025-03-15 15:00',
      opponent: 'Rangers',
      details: 'Scottish Premiership - 1st Phase, Kick-off 15:00',
    },
    {
      id: 9,
      date: '2025-03-29 15:00',
      opponent: 'Hearts',
      details: 'Scottish Premiership - 1st Phase, Kick-off 15:00',
    },
    {
      id: 10,
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
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Leaderboard</Link></li>
          <li><Link to="/fixtures" onClick={() => setMenuOpen(false)}>Fixtures</Link></li>
          <li><Link to="/stats" onClick={() => setMenuOpen(false)}>Stats</Link></li>
          <li><Link to="/flem" onClick={() => setMenuOpen(false)}>Flem</Link></li> {/* New page */}
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
          <Route path="/flem" element={<Flem />} /> {/* New page */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
