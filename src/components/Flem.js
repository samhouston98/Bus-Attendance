import React, { useState, useEffect } from 'react';

const Flem = () => {
  // List of Flem images
  const flemImages = [
    '/images/flem1.jpg',
    '/images/flem2.jpg',
    '/images/flem3.jpg',
    '/images/flem4.jpg',
    '/images/flem5.jpg',
    '/images/flem6.jpg',
    '/images/flem7.jpg',
    '/images/flem8.jpg',
    '/images/flem9.jpg',
    '/images/flem10.jpg',
    '/images/flem11.jpg',
    '/images/flem12.jpg',
    '/images/flem13.jpg',
    '/images/flem14.jpg',
    '/images/flem15.jpg',
    '/images/flem16.jpg',
    '/images/flem17.jpg',
    '/images/flem18.jpg',
  ];

  // List of Flem's songs
  const songList = [
    { title: "Love Story", url: "/music/love.mp3" },
    { title: "Wagon Wheel", url: "/music/wagon.mp3" },
    { title: "Rebel Sunday", url: "/music/rebel.mp3" },
    { title: "12 Days of Celtic", url: "/music/12.mp3" },
    { title: "Coming Home", url: "/music/coming.mp3" },
    { title: "Golf Boys", url: "/music/golf.mp3" },
    { title: "Lazy Mark", url: "/music/lazy.mp3" },
  ];

  const [currentImage, setCurrentImage] = useState(flemImages[0]);
  const [dailySong, setDailySong] = useState(null);
  const [randomSong, setRandomSong] = useState(null);

  // Set a daily song based on the date
  useEffect(() => {
    const todayIndex = new Date().getDate() % songList.length;
    setDailySong(songList[todayIndex]);
  }, []);

  // Change Flem's image to a random one when clicked
  const changeImage = () => {
    const newImage = flemImages[Math.floor(Math.random() * flemImages.length)];
    setCurrentImage(newImage);
  };

  // Play a completely random song
  const playRandomSong = () => {
    const randomIndex = Math.floor(Math.random() * songList.length);
    setRandomSong(songList[randomIndex]);
  };

  return (
    <section className="flem-section">
      <h2>Flem</h2>

      {/* Clickable Image to Change Flem */}
      <img
        src={currentImage}
        alt="Flem"
        className="flem-image"
        onClick={changeImage}
        style={{ cursor: 'pointer' }} // Indicates it's clickable
      />

      {/* Flem's Song of the Day */}
      <div className="song-card">
        <h3>Flem's Song of the Day</h3>
        {dailySong && (
          <>
            <p>{dailySong.title}</p>
            <audio controls src={dailySong.url}></audio>
          </>
        )}
      </div>

      {/* Play a Random Song */}
      <div className="song-card">
        <h3>Play Random Song</h3>
        <button onClick={playRandomSong}>Play</button>
        {randomSong && (
          <>
            <p>{randomSong.title}</p>
            <audio controls src={randomSong.url}></audio>
          </>
        )}
      </div>
    </section>
  );
};

export default Flem;
