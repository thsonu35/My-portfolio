// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const Layout = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </div>
);

export default Layout;
