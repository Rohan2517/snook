import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import UpcomingMatches from './components/UpcomingMatches';
import MatchHighlight from './components/MatchHighlight';
import PlayerSpotlight from './components/playersp';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <UpcomingMatches/>
        <Features />
        <MatchHighlight/>
        <PlayerSpotlight/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
