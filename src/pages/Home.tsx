import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Hero from '../components/Home/Hero';
import Projects from '../components/Home/Projects';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;