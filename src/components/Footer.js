import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-transparent text-white py-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Gayatri Bhamre. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
