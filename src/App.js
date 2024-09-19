import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import ProjectCards from './components/ProjectCards';
import './App.css';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <HeroSection />
      <div id="project-cards" className="main-content">
        <AboutMe />
        <ProjectCards />
        <Experience />
      </div>
    </>
  );
}

export default App;
