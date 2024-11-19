import React from 'react';
import juddImage from '../pic/judd.png';
import ronnieImage from '../pic/ronnie.png';

const MatchHighlight = () => {
  // Match data
  const matchData = {
    event: 'Masters 2024',
    stage: 'Semi-Final',
    player1: {
      name: "Ronnie O'Sullivan",
      score: 6,
      highestBreak: 147,
      centuryBreaks: 3,
      potSuccess: '94%',
      image: ronnieImage, // Replace with actual image URL
    },
    player2: {
      name: 'Judd Trump',
      score: 4,
      highestBreak: 137,
      centuryBreaks: 2,
      potSuccess: '92%',
      image: juddImage, // Replace with actual image URL
    },
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black text-white p-8 md:p-12 rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-yellow-400 flex items-center justify-center gap-2 mb-10">
        <span>🏆</span> Recent Match Highlight
      </h2>

      <div className="highlight-wrapper grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Player 1 */}
        <div className="player-section text-center">
          <div className="player-avatar mb-4">
            <img
              src={matchData.player1.image}
              alt={matchData.player1.name}
              className="rounded-full border-4 border-red-500 shadow-md mx-auto w-32 h-32 md:w-40 md:h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold">{matchData.player1.name}</h3>
          <div className="score text-5xl md:text-6xl mt-2 font-extrabold text-red-500">{matchData.player1.score}</div>
        </div>

        {/* Match details */}
        <div className="match-details bg-gray-900 p-6 rounded-lg shadow-md text-center">
          <h4 className="text-2xl font-bold text-red-500">{matchData.event}</h4>
          <p className="text-gray-400 mb-6">{matchData.stage}</p>
          <div className="stats text-lg space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Highest Break</span>
              <span className="font-bold text-white">{matchData.player1.highestBreak}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Century Breaks</span>
              <span className="font-bold text-white">{matchData.player1.centuryBreaks}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Pot Success</span>
              <span className="font-bold text-white">{matchData.player1.potSuccess}</span>
            </div>
          </div>
        </div>

        {/* Player 2 */}
        <div className="player-section text-center">
          <div className="player-avatar mb-4">
            <img
              src={matchData.player2.image}
              alt={matchData.player2.name}
              className="rounded-full border-4 border-red-500 shadow-md mx-auto w-32 h-32 md:w-40 md:h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold">{matchData.player2.name}</h3>
          <div className="score text-5xl md:text-6xl mt-2 font-extrabold text-red-500">{matchData.player2.score}</div>
        </div>
      </div>
    </div>
  );
};

export default MatchHighlight;
