import React from 'react';
import { Element } from 'react-scroll';
import AnimatedSection from './AnimatedSection';
import './About.css';

const About = () => (
  <Element name="about">
    <AnimatedSection name="about">
              <h3 >About Me</h3>

      <div className="about-container section">
        <h2 className="section-subtitle">My Journey</h2>
        <p className="about-text">
          My journey into the world of web development started during my undergraduate studies in Computer Science. I was fascinated by the ability to build interactive and visually appealing websites, which led me to dive deep into web technologies. I have since honed my skills through various projects and internships.
        </p>
        <h2 className="section-subtitle">Internship Experience</h2>
        <h4 className="internship-title">Web Development Intern at Indivibe Infotech</h4>
        <p className="about-text">
          During my internship at Indivibe Infotech, I had the opportunity to work on several exciting projects. I was responsible for:
          <ul>
            <li>Developing User Interfaces: I collaborated with the design team to create user-friendly and visually appealing interfaces using React.js.</li>
            <li>API Integration: Integrated RESTful APIs to ensure seamless data flow between the frontend and backend.</li>
            <li>Optimizing Performance: Implemented best practices to enhance the performance and scalability of web applications.</li>
            <li>Testing and Debugging: Conducted thorough testing and debugging to ensure the applications were error-free and user-friendly.</li>
          </ul>
        </p>
      </div>
    </AnimatedSection>
  </Element>
);

export default About;
