import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Toast from './components/layout/Toast';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function App() {
  const [toast, setToast] = useState({ message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast({ message: '', type: 'success' });
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Glassmorphism Header & Navigation */}
      <Navbar onContactClick={() => {}} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero onNotify={showToast} />
        <Stats />
        <About onNotify={showToast} />
        <Skills />
        <Education />
        <Projects />
        <Contact onNotify={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Notification Toast */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
      />
    </div>
  );
}
