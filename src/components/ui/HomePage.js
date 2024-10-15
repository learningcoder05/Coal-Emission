import React from 'react';
// import Navbar from './Navbar';
import Hero from './Hero';
import UserFeedback from './UserFeedback';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <Hero />
      <UserFeedback />
    </div>
  );
};

export default HomePage;