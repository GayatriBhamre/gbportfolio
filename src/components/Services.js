import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Frontend Development',
    description: 'Modern, fast, responsive websites using React and Tailwind CSS.',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing beautiful user experiences with Figma, HTML/CSS.',
  },
   {
    title: 'Project Collaboration',
    description: 'Team up and contribute on live projects using GitHub & tools.',
  },
  {
    title: 'Mobile App Development',
    description: 'Building cross-platform mobile apps using React Native and Expo.',
  },
  {
    title: 'Portfolio Creation',
    description: 'Helping others build standout personal websites like this one!',
  },
  {
    title: 'Custom Software Solutions',
    description: 'Building custom software solutions tailored to your needs.',
  },
];

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <motion.h2
        className="text-4xl font-bold text-center text-purple-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Services I Offer
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
            transitionSpeed={1000}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/40 transition"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-pink-400 mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Services;
