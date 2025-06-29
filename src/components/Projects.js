import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

// 💡 Import your images
import project1 from '../assets/projects/project1.png';
import project2 from '../assets/projects/project2.jfif';
import project3 from '../assets/projects/project3.jfif';
import project4 from '../assets/projects/project4.png';
import project5 from '../assets/projects/project5.png';

const projects = [
  {
    title: 'UNIEVENT',
    description: 'A web platform to Manage and promote college clubs and events with user friendly interface .',
    tech: 'React, Node.js, Express, MongoDB',
    image: project1,
    link: 'https://drive.google.com/file/d/1VFpxiP7dVZliXdeKrLs4NkLoxLaNsN1s/view?usp=drive_link',
  },
  {
    title: 'MindPal',
    description: 'A mental health companion app with a chatbot and mood tracking to help users manage their well-being.',
    tech: 'React-native, Firebase, Expo',
    image: project2,
    link: 'https://drive.google.com/file/d/1n1Gevqk6t1-SL7BtEHhMuoD5sxE7rXr3/view?usp=drive_link',
  },
  {
    title: 'Fraud Detection System',
    description: 'A fraud detection platform that analyzes phone numbers, emails, text, and URLs to identify and flag potential spam or scams.',
    tech: 'Python, Machine Learning, Flask, Tesseract',
    image: project3,
    link: 'https://github.com/gayatri/fraud-detection',
  },
  {
    title: 'DailyDSA',
    description: 'Building a web platform where users can practice DSA questions and get code reviews.',
    tech: 'React, Node.js, Tailwind CSS',
    image: project4,
    link: 'https://drive.google.com/file/d/12UXO417qdKW9HOhfPPUgRIZbk-DAnVfv/view?usp=drive_link',
  },
   {
  title: 'GB\'s Portfolio', // <-- escape the single quote
  description: 'A personal portfolio website showcasing my projects, skills, and achievements.',
  tech: 'React, HTML, Tailwind CSS',
  image: project5,
  link: 'https://drive.google.com/file/d/113re4MZSaQHqJw-cMAeWheJ7K2ldXJOp/view?usp=drive_link',
},
  // Add more projects here 🔥
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <motion.h2
        className="text-4xl font-bold text-center text-purple-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.03}
            transitionSpeed={1000}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-purple-500/30 transition"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-5 flex flex-col h-full"
            >
              {/* 🖼️ Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}

              {/* 📄 Project Info */}
              <h3 className="text-xl font-semibold text-pink-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>
              <p className="text-xs text-gray-400 mb-4 italic">{project.tech}</p>

              {/* 🔗 Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-sm text-white bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md transition"
                >
                  View Project
                </a>
              )}
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Projects;
