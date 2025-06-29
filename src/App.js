import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Services from './components/Services';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar /> {/* ✅ Always visible on all pages */}
      <Home />
      <About />
      <Education />
      <Services />
      <Projects />
      <Resume />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
