import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white flex items-center justify-center px-4"
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl shadow-lg"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
            Hi, I’m <span className="text-pink-400">Gayatri Bhamre</span>
          </h1>
          <p className="text-xl text-center text-gray-200 font-light">
           Software Developer | Full Stack (MERN) Developer | Data Science
          </p>
        </motion.div>
      </Tilt>
    </section>
  );
}

export default Home;
