import React from 'react';
import { BackgroundDecor } from './components/BackgroundDecor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Community } from './components/Community';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

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

        {/* Skills & Technologies Section */}
        <TechStack />

        {/* Featured Projects / My Work Section */}
        <Projects />

        {/* Community & Engagement Section */}
        <Community />

        {/* Contact Me Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
