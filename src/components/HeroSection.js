import React from 'react';
import { FaPlay, FaCalendarAlt } from 'react-icons/fa';

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 px-4"
      style={{
        backgroundImage: `linear-gradient(to bottom right, #000000, #003366)`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500">
          World Snooker Championship 2024
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
          Experience the intensity and precision of professional snooker as the world's elite players compete for the most prestigious title in the sport.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Watch Live Button */}
          <button className="flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transform transition-all">
            <FaPlay className="mr-3" /> Watch Live
          </button>
          {/* Tournament Schedule Button */}
          <button className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transform transition-all">
            <FaCalendarAlt className="mr-3" /> Tournament Schedule
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 opacity-20 blur-xl rounded-full transform translate-x-[-50%] translate-y-[-50%] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-500 opacity-20 blur-2xl rounded-full transform translate-x-[50%] translate-y-[50%] animate-pulse"></div>
    </section>
  );
}

export default HeroSection;
