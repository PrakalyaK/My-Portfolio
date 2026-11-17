import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ProblemSolving from './sections/ProblemSolving';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProblemSolving />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
