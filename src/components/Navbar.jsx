// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

import { Link } from 'react-scroll';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('theme') === 'dark'
      );
      
  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <nav>
      <ul className="left-nav">
      <li onClick={toggleDarkMode} id="dark-mode-toggle">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </li>
        <li><Link to="home" smooth={true}>Home</Link></li>
        <li><Link to="about" smooth={true}>About</Link></li>
        <li><Link to="projects" smooth={true}>Projects</Link></li>
        <li><Link to="skills" smooth={true}>Skills</Link></li>
        <li><Link to="contact" smooth={true}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
