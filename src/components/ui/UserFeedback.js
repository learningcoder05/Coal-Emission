import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const feedbacks = [
  { name: "John Doe", company: "ABC Mining", comment: "This tool has revolutionized how we manage our emissions!" },
  { name: "Jane Smith", company: "XYZ Minerals", comment: "Incredibly user-friendly and accurate. Highly recommended!" },
  { name: "Mike Johnson", company: "123 Coal", comment: "The insights provided have helped us significantly reduce our carbon footprint." },
];

const UserFeedback = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const nextFeedback = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentFeedback((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <section className="py-20 bg-gray-900 relative">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">What Our Users Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeedback}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-10 rounded-lg shadow-lg"
            >
              <div className="mb-8">
                <p className="text-xl font-bold text-white mb-2">{feedbacks[currentFeedback].name}</p>
                <p className="text-lg text-blue-400 mb-6">{feedbacks[currentFeedback].company}</p>
                <p className="text-2xl text-gray-300">"{feedbacks[currentFeedback].comment}"</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <button
        onClick={prevFeedback}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Previous feedback"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextFeedback}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Next feedback"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default UserFeedback;