import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = ({ pastGames }) => {
  const games = pastGames || [];

  // Collect data for bar chart (total games attended per person)
  const attendanceData = {};
  games.forEach((game) => {
    (game.attendees || []).forEach((name) => {
      attendanceData[name] = (attendanceData[name] || 0) + 1;
    });
  });

  const barChartData = {
    labels: Object.keys(attendanceData),
    datasets: [
      {
        label: 'Total Games Attended',
        data: Object.values(attendanceData),
        backgroundColor: 'rgba(0, 204, 0, 0.7)', // Celtic green
        borderColor: 'rgba(0, 102, 0, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Collect data for pie chart (attendance breakdown per person)
  const pieChartData = {
    labels: Object.keys(attendanceData), // Person's names
    datasets: [
      {
        data: Object.values(attendanceData), // Number of games attended by each person
        backgroundColor: Object.keys(attendanceData).map(
          (_, index) => `hsl(${(index * 360) / Object.keys(attendanceData).length}, 70%, 50%)`
        ), // Dynamic colors
        borderWidth: 1,
      },
    ],
  };

  return (
    <section>
      <h2>Statistics</h2>
      <div className="chart-container">
        <div className="chart">
          <h3>Bar Chart: Total Games Attended Per Person</h3>
          <Bar data={barChartData} />
        </div>
        <div className="chart">
          <h3>Pie Chart: Attendance Breakdown Per Person</h3>
          <Pie data={pieChartData} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
