import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/photo.jpeg';

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGit, FaGithub, FaFigma, FaPython
} from 'react-icons/fa';
import {
  SiTailwindcss, SiFirebase, SiMongodb, SiCanva
} from 'react-icons/si';

function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center text-purple-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      {/* Profile + Bio */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-full overflow-hidden w-60 h-62 border-4 border-purple-500 shadow-lg">
            <img
              src={profile}
              alt="Gayatri Bhamre"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">
            Hello! I’m Gayatri Bhamre
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
          <p className="text-gray-300 leading-relaxed text-lg">
  I am a Computer Engineering student and passionate Software Developer with hands-on experience in both frontend and backend development. 
  I have also worked on projects in Machine Learning and Data Science. I enjoy building practical, user-friendly solutions. 
  I believe in continuous learning and always look for ways to improve my work. My goal is to apply my knowledge to real-world projects, 
  contribute meaningfully to the IT industry, and grow as a professional by taking on new challenges and learning from experience.
</p>

          </p>
        </motion.div>
      </div>

      {/* Tech Stack */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h4 className="text-2xl font-semibold text-center text-pink-400 mb-10">Tech Stack</h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Frontend */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition text-center">
            <h5 className="text-purple-300 font-semibold text-lg mb-4">Frontend</h5>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-orange-500 text-3xl" />
                <span className="text-sm mt-1">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-blue-500 text-3xl" />
                <span className="text-sm mt-1">CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className="text-yellow-300 text-3xl" />
                <span className="text-sm mt-1">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-cyan-400 text-3xl" />
                <span className="text-sm mt-1">React</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-indigo-400 text-3xl" />
                <span className="text-sm mt-1">React Native</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-sky-400 text-3xl" />
                <span className="text-sm mt-1">Tailwind</span>
              </div>
            </div>
          </div>

          {/* Backend & Programming */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition text-center">
            <h5 className="text-purple-300 font-semibold text-lg mb-4">Backend & Programming</h5>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-green-500 text-3xl" />
                <span className="text-sm mt-1">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiFirebase className="text-yellow-500 text-3xl" />
                <span className="text-sm mt-1">Firebase</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-green-600 text-3xl" />
                <span className="text-sm mt-1">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl text-green-400 font-bold">C</span>
                <span className="text-sm mt-1">C</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl text-blue-400 font-bold">C++</span>
                <span className="text-sm mt-1">C++</span>
              </div>
              <div className="flex flex-col items-center">
                <FaPython className="text-yellow-300 text-3xl" />
                <span className="text-sm mt-1">Python</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition text-center">
            <h5 className="text-purple-300 font-semibold text-lg mb-4">Tools</h5>
            <div className="grid grid-cols-2 gap-6 justify-items-center">
              <div className="flex flex-col items-center">
                <FaGit className="text-orange-500 text-3xl" />
                <span className="text-sm mt-1">Git</span>
              </div>
              <div className="flex flex-col items-center">
                <FaGithub className="text-white text-3xl" />
                <span className="text-sm mt-1">GitHub</span>
              </div>
              <div className="flex flex-col items-center">
                <FaFigma className="text-pink-400 text-3xl" />
                <span className="text-sm mt-1">Figma</span>
              </div>
              <div className="flex flex-col items-center">
                <SiCanva className="text-cyan-300 text-3xl" />
                <span className="text-sm mt-1">Canva</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
