// src/components/Skills.jsx
import React from 'react';
import { Element } from 'react-scroll';
import AnimatedSection from './AnimatedSection';

const Skills = () => (
  <Element name="skills">
    <AnimatedSection name="skills">
      <h2>My Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </AnimatedSection>
  </Element>
);

export default Skills;
