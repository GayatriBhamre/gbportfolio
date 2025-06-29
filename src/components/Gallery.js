import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// Certificates
import cert1 from '../assets/gallery/cert1.jpg';
import cert2 from '../assets/gallery/cert2.jpg';
import cert3 from '../assets/gallery/cert3.jpg';
import cert4 from '../assets/gallery/cert4.jpg';
import cert5 from '../assets/gallery/cert5.jpg'; 

// Achievements
import ach1 from '../assets/gallery/ach1.jpg';
import ach2 from '../assets/gallery/ach2.jpg';
import ach3 from '../assets/gallery/ach3.jpg';
import ach4 from '../assets/gallery/ach4.jpg';
import ach5 from '../assets/gallery/ach5.jpg'; 

const certifications = [
  { src: cert1, caption: 'Programming Foundations – Beyond the Fundamentals', issuer: 'LinkedIn Learning' },
  { src: cert2, caption: 'AWS Academy Cloud Foundations ', issuer: 'AWS' },
  { src: cert3, caption: 'React Native Development', issuer: 'Infosys Springboard' },
  { src: cert4, caption: 'RDBMS PostgreSQL Training (Completion Certificate)', issuer: 'Spoken Tutorial, IIT Bombay' },
  { src: cert5, caption: 'Introduction to Data Analytics', issuer: 'Simplilearn' },
];

const achievements = [
  { src: ach1, caption: 'Top Performers in Hackathon - Tech Pragyan 2025' },
  { src: ach2, caption: 'Idea Presenter(Top 13) - FinTank by Winjit' },
  { src: ach3, caption: 'Participation - INNOVERA National Level Hackathon' },
  { src: ach4, caption: 'Former Representative - CMSA (Student Association)' },
  { src: ach5, caption: 'Completed Virtual Job Simulation - By Accenture' },
];

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [allImages, setAllImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (imagesArray, index) => {
    setAllImages(imagesArray);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section id="gallery" className="py-20 px-6 bg-black text-white">
      <motion.h2
        className="text-4xl font-bold text-center text-purple-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Gallery
      </motion.h2>

      {/* 🏅 Certifications */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl text-pink-400 font-semibold mb-4">🏅 Certifications</h3>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide pb-2">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[240px] flex-shrink-0 border border-white/20 rounded-lg overflow-hidden bg-white/5 p-2 hover:scale-105 transition"
              onClick={() => openLightbox(certifications.map(c => c.src), index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={item.src} alt={`Cert ${index}`} className="w-full h-52 object-cover rounded-md" />
              <p className="text-sm text-gray-300 mt-2 text-center">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🏆 Achievements */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl text-pink-400 font-semibold mb-4">🏆 Achievements</h3>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide pb-2">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[240px] flex-shrink-0 border border-white/20 rounded-lg overflow-hidden bg-white/5 p-2 hover:scale-105 transition"
              onClick={() => openLightbox(achievements.map(a => a.src), index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={item.src} alt={`Achievement ${index}`} className="w-full h-52 object-cover rounded-md" />
              <p className="text-sm text-gray-300 mt-2 text-center">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔍 Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={allImages[photoIndex]}
          nextSrc={allImages[(photoIndex + 1) % allImages.length]}
          prevSrc={allImages[(photoIndex + allImages.length - 1) % allImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + allImages.length - 1) % allImages.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % allImages.length)}
        />
      )}
    </section>
  );
}

export default Gallery;
