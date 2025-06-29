import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'B.Tech in Computer Engineering',
    college: 'K.K. Wagh Institute of Engineering Education and Research, Nashik',
    duration: '2023 – 2026',
    score: 'Currently Pursuing (CGPA Above 8.5/10)',
  },
  {
    degree: 'Diploma in Computer Technology',
    college: 'Government Polytechnic Nashik',
    duration: '2021 – 2023',
    score: '90.25%',
  },
  {
    degree: 'Secondary Education (10th)',
    college: 'Dr. K.P.M.V. Vidyalaya, Chalisgaon',
    duration: '2019 – 2020',
    score: '96%',
  },
];

function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-black text-white">
      <motion.h2
        className="text-4xl font-bold text-center text-purple-400 mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Education
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl text-pink-400 font-semibold mb-1">{item.degree}</h3>
            <p className="text-gray-200 mb-1">{item.college}</p>
            <p className="text-sm text-gray-400">
              {item.duration} • <span className="text-green-300">{item.score}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
