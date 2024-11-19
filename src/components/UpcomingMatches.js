import React from 'react';
import juddImage from '../pic/judd.png';
import ronnieImage from '../pic/ronnie.png';
import markImage from '../pic/kern.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

// Reusable MatchCard Component
function MatchCard({ match }) {
  return (
    <div className="bg-gradient-to-b from-blue-800 to-blue-900 text-white rounded-xl shadow-lg p-6 hover:scale-105 transform transition-transform duration-300">
      {/* Stage Badge */}
      <div className="flex justify-start">
        <div className="bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
          {match.stage || 'N/A'}
        </div>
      </div>

      {/* Players Section */}
      <div className="flex items-center justify-between mt-6">
        {/* Player A */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-full border-4 border-red-500 overflow-hidden shadow-md">
            <img
              src={match.playerAImage || 'https://via.placeholder.com/100'}
              alt={`${match.playerA}'s image`}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold mt-2">{match.playerA || 'Unknown'}</h3>
          <p className="text-sm text-gray-300">World Rank: {match.playerARank || 'N/A'}</p>
        </div>

        {/* VS */}
        <div>
          <p className="text-2xl font-extrabold text-red-500">VS</p>
        </div>

        {/* Player B */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-full border-4 border-red-500 overflow-hidden shadow-md">
            <img
              src={match.playerBImage || 'https://via.placeholder.com/100'}
              alt={`${match.playerB}'s image`}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold mt-2">{match.playerB || 'Unknown'}</h3>
          <p className="text-sm text-gray-300">World Rank: {match.playerBRank || 'N/A'}</p>
        </div>
      </div>

      {/* Match Details */}
      <div className="text-center mt-6">
        <p className="text-base font-semibold flex items-center justify-center gap-2 text-yellow-400">
          <FaClock /> {match.time || 'TBD'}
        </p>
        <p className="text-sm text-gray-400">{match.date || 'TBD'}</p>
      </div>

      {/* Location and Event */}
      <div className="flex items-center justify-between mt-6 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-yellow-400" />
          <span>{match.location || 'Location TBD'}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-yellow-400" />
          <span>{match.eventDateRange || 'Event Dates TBD'}</span>
        </div>
      </div>
    </div>
  );
}

// UpcomingMatches Component
function UpcomingMatches() {
  const matches = [
    {
      id: 1,
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
      id: 2,
      stage: 'Semi Final',
      playerA: 'Judd Trump',
      playerARank: '#2',
      playerAImage: juddImage,
      playerB: 'Mark Selby',
      playerBRank: '#4',
      playerBImage: markImage,
      time: '4:00 PM',
      date: 'May 16, 2024',
      location: 'Crucible Theatre, Sheffield',
      eventDateRange: 'Apr 20 - May 6',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: Math.min(3, matches.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: (
      <button
        aria-label="Next"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition-transform z-10"
      >
        <FaArrowRight />
      </button>
    ),
    prevArrow: (
      <button
        aria-label="Previous"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition-transform z-10"
      >
        <FaArrowLeft />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, matches.length),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(1, matches.length),
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-yellow-400 mb-10">
          Upcoming Matches
        </h2>
        <Slider {...settings}>
          {matches.map((match) => (
            <div key={match.id} className="p-4">
              <MatchCard match={match} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default UpcomingMatches;
