import React from 'react';
import { motion } from 'framer-motion';

function Resume() {
  return (
    <section
      id="resume"
      className="min-h-[60vh] bg-black text-white px-6 py-20 flex flex-col items-center justify-center"
    >
      <motion.h2
        className="text-4xl font-bold text-purple-400 mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Resume
      </motion.h2>

      <motion.div
        className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-lg max-w-xl text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg text-gray-300 mb-6">
          Click the button below to download my resume and know more about my academic and technical background.
        </p>

        <a
          href="/Gayatri_Bhamre_Resume.pdf"
          download
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          📄 Download Resume
        </a>
      </motion.div>
    </section>
  );
}

export default Resume;
