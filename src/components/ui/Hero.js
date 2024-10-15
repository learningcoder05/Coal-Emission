import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"
          animate={{
            background: [
              "linear-gradient(to right, #1f2937, #111827)",
              "linear-gradient(to right, #111827, #1e3a8a)",
              "linear-gradient(to right, #1e3a8a, #1f2937)",
              "linear-gradient(to right, #1f2937, #111827)",
            ],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <motion.h2
            className="text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mine Emission Calculator
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering mines to measure and reduce their carbon footprint
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/calculator"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 inline-block"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;