import React, { useState } from 'react';
import juddImage from '../pic/judd.png';
import ronnieImage from '../pic/ronnie.png';
import markImage from '../pic/kern.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  FaArrowLeft,
  FaArrowRight,
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const matchData = [
  {
    id: 1,
    matches: [
      {
        stage: 'Quarter Final',
        playerA: 'Ronnie O\'Sullivan',
        playerARank: '#1',
        playerAImage: ronnieImage,
        playerB: 'Judd Trump',
        playerBRank: '#2',
        playerBImage: juddImage,
        time: '12:30 PM',
        date: 'May 15, 2024',
        location: 'Crucible Theatre, Sheffield',
        eventDateRange: 'Apr 20 - May 6',
      },
      {
        stage: 'Semi Final',
        playerA: 'Mark Selby',
        playerARank: '#4',
        playerAImage: markImage,
        playerB: 'Judd Trump',
        playerBRank: '#3',
        playerBImage: juddImage,
        time: '4:00 PM',
        date: 'May 16, 2024',
        location: 'Crucible Theatre, Sheffield',
        eventDateRange: 'Apr 20 - May 6',
      },
    ],
  },
  {
    id: 2,
    matches: [
      {
        stage: 'Final',
        playerA: 'Mark',
        playerARank: '#2',
        playerAImage: markImage,
        playerB: 'Judd Trump',
        playerBRank: '#1',
        playerBImage: juddImage,
        time: '6:00 PM',
        date: 'May 18, 2024',
        location: 'Crucible Theatre, Sheffield',
        eventDateRange: 'Apr 20 - May 6',
      },
    ],
  },
];

function MatchSlider({ matches }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Slider {...sliderSettings}>
      {matches.map((match, index) => (
        <div
          key={index}
          className="p-6 bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-600 shadow-2xl rounded-lg flex flex-col items-center text-white transform transition-transform hover:scale-105"
        >
          <h4 className="text-yellow-300 font-extrabold text-xl tracking-wide">
            {match.stage}
          </h4>
          <div className="flex items-center justify-around mt-6 w-full">
            {/* Player A */}
            <div className="text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto rounded-full border-4 border-yellow-400 overflow-hidden shadow-md">
                <img
                  src={match.playerAImage}
                  alt={match.playerA}
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="mt-2 text-lg font-semibold">{match.playerA}</h5>
              <p className="text-gray-300 text-sm">{match.playerARank}</p>
            </div>
            {/* VS */}
            <div className="text-yellow-300 text-3xl font-extrabold">VS</div>
            {/* Player B */}
            <div className="text-center">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto rounded-full border-4 border-yellow-400 overflow-hidden shadow-md">
                <img
                  src={match.playerBImage}
                  alt={match.playerB}
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="mt-2 text-lg font-semibold">{match.playerB}</h5>
              <p className="text-gray-300 text-sm">{match.playerBRank}</p>
            </div>
          </div>
          {/* Match Details */}
          <div className="text-center mt-6 space-y-2">
            <p className="text-yellow-300 text-sm flex items-center justify-center gap-2">
              <FaClock className="text-white" /> {match.time}
            </p>
            <p className="text-yellow-300 text-sm flex items-center justify-center gap-2">
              <FaCalendarAlt className="text-white" /> {match.date}
            </p>
            <p className="text-yellow-300 text-sm flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-white" /> {match.location}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}

function UpcomingMatchesPagination() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : matchData.length - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < matchData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container mx-auto text-center px-4 relative z-10">
        <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-10">
          Previous Matches
        </h3>
        <div className="relative">
          {/* Match Card */}
          <div className="p-4">
            <MatchSlider matches={matchData[currentPage].matches} />
          </div>
          {/* Pagination Controls */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-red-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-red-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default UpcomingMatchesPagination;
