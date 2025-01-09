import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Schedule = ({ pastGames, futureGames }) => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = 'b45e7804a7c0dc73c815bf26c5f379ae'; // Your API key
      const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
      const location = 'Parkhead,Glasgow';

      try {
        const response = await axios.get(baseUrl, {
          params: {
            q: location,
            appid: apiKey,
            units: 'metric',
          },
        });

        const weatherList = response.data.list;

        const updatedWeather = {};
        futureGames.forEach((game) => {
          const gameDateTime = new Date(game.date).getTime();
          const currentDateTime = new Date().getTime();

          // Check if the game is within 3 days (3 days = 259200000 ms)
          if (gameDateTime - currentDateTime > 259200000) {
            updatedWeather[game.id] = 'not_available';
            return;
          }

          // Find the closest weather entry
          const closestWeather = weatherList.reduce((prev, curr) => {
            const prevDiff = Math.abs(new Date(prev.dt_txt).getTime() - gameDateTime);
            const currDiff = Math.abs(new Date(curr.dt_txt).getTime() - gameDateTime);
            return currDiff < prevDiff ? curr : prev;
          });

          if (closestWeather) {
            updatedWeather[game.id] = {
              temperature: closestWeather.main.temp,
              description: closestWeather.weather[0].description,
              icon: closestWeather.weather[0].icon,
            };
          }
        });

        setWeatherData(updatedWeather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [futureGames]);

  // Helper function to format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }).format(date);
  };

  return (
    <section>
      <h2>Fixtures and Results</h2>
      <div className="schedule-container">
        <div className="schedule-section">
          <h3>Past Games</h3>
          {pastGames.length === 0 ? (
            <p>No past games available.</p>
          ) : (
            pastGames.map((game) => (
              <div key={game.id} className="game-card">
                <p>
                  <strong>Date:</strong> {formatDate(game.date)}
                </p>
                <p>
                  <strong>Opponent:</strong> {game.opponent}
                </p>
                <p>
                  <strong>Result:</strong> {game.result}
                </p>
                <p>
                  <strong>Attendees:</strong> {game.attendees.join(', ')}
                </p>
                <p>
                  <strong>Missed:</strong> {game.missed.join(', ')}
                </p>
                <p>
                  <strong>Notes:</strong> {game.notes}
                </p>
              </div>
            ))
          )}
        </div>
        <div className="schedule-section">
          <h3>Future Games</h3>
          {futureGames.length === 0 ? (
            <p>No future games available.</p>
          ) : (
            futureGames.map((game) => (
              <div key={game.id} className="game-card">
                <p>
                  <strong>Date:</strong> {formatDate(game.date)}
                </p>
                <p>
                  <strong>Opponent:</strong> {game.opponent}
                </p>
                <p>
                  <strong>Details:</strong> {game.details}
                </p>
                {weatherData[game.id] === 'not_available' ? (
                  <p>Weather not yet available, ask Mark</p>
                ) : weatherData[game.id] ? (
                  <div className="weather-info">
                    <p>
                      <strong>Weather:</strong>{' '}
                      {weatherData[game.id].description} (
                      {weatherData[game.id].temperature}°C)
                    </p>
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData[game.id].icon}@2x.png`}
                      alt="Weather icon"
                    />
                  </div>
                ) : (
                  <p>Loading weather...</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
