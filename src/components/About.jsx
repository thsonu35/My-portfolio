// src/components/About.jsx
import React from 'react';
import { Element } from 'react-scroll';
import AnimatedSection from './AnimatedSection';

const About = () => (
  <Element name="about">
    <AnimatedSection name="about">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
    </AnimatedSection>
  </Element>
);

export default About;
