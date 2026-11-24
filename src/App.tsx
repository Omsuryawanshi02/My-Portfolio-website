import React from 'react';
import { BackgroundDecor, Navbar, Footer } from './components/layout';
import {
  Hero,
  About,
  Services,
  Projects,
  Experience,
  Community,
  Contact,
} from './components/sections';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen relative text-gray-900 bg-white overflow-x-hidden selection:bg-black selection:text-white">
      {/* Ambient background blur lighting */}
      <BackgroundDecor />

      {/* Fixed Navigation Bar */}
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Services / What I Do Section */}
        <Services />

        {/* Featured Projects / My Work Section */}
        <Projects />

        {/* Work Experience Section */}
        <Experience />

        {/* Community & Engagement Section */}
        <Community />

        {/* Contact Me Section */}
        <Contact />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;
