import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Education', link: '#education' },
    { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#projects' },
    { name: 'Resume', link: '#resume' },
    { name: 'Gallery', link: '#gallery' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <a
        href="#home"
        className="text-2xl font-semibold italic text-white font-serif tracking-tight hover:text-pink-400 transition"
      >
        <span className="text-pink-400 not-italic font-extrabold">GB</span>’s Portfolio
      </a>

      {/* ☰ Menu button for mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-3xl focus:outline-none md:hidden"
      >
        <FiMenu />
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-6 text-sm">
        {sections.map((sec, idx) => (
          <a
            key={idx}
            href={sec.link}
            className="text-gray-300 hover:text-pink-400 transition font-medium"
          >
            {sec.name}
          </a>
        ))}
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md p-4 z-40 space-y-2 md:hidden">
          {sections.map((sec, idx) => (
            <a
              key={idx}
              href={sec.link}
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-pink-400 transition text-sm font-medium"
            >
              {sec.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
