import React from 'react';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Hero />
      <FeaturedGrid />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
