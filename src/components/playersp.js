import React from 'react';
import juddImage from '../pic/judd.png';
import ronnieImage from '../pic/ronnie.png';
import markImage from '../pic/kern.png';

const PlayerSpotlight = () => {
  // Spotlight data for players
  const players = [
    {
      name: "Ronnie O'Sullivan",
      nickname: 'The Rocket',
      titles: 39,
      rank: 1,
      image: ronnieImage, // Replace with actual image URL
    },
    {
      name: 'Judd Trump',
      nickname: 'The Ace',
      titles: 23,
      rank: 2,
      image: juddImage, // Replace with actual image URL
    },
    {
      name: 'Mark Selby',
      nickname: 'The Jester',
      titles: 20,
      rank: 3,
      image: markImage, // Replace with actual image URL
    },
  ];

  return (
    <div className="player-spotlight-container bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white p-8 md:p-12 rounded-lg shadow-xl">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-yellow-400 flex items-center justify-center gap-2 mb-10">
        <span>⭐</span> Player Spotlight
      </h2>
      <div className="spotlight-grid grid grid-cols-1 md:grid-cols-3 gap-8">
        {players.map((player, index) => (
          <div
            key={index}
            className="player-card bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="player-avatar mb-6">
              <img
                src={player.image}
                alt={player.name}
                className="rounded-full w-50 h-60 object-cover mx-auto border-4 border-red-500 transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-2">{player.name}</h3>
            <p className="text-red-400 text-center mb-4">{player.nickname}</p>
            <div className="flex justify-between items-center text-sm md:text-base">
              <div className="flex items-center">
                <span className="text-red-500 mr-1">🏆</span>
                <span>{player.titles} Titles</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 mr-1">🔖</span>
                <span>Rank #{player.rank}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerSpotlight;
