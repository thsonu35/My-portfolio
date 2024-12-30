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
My journey into the world of web development began during my undergraduate studies in Computer Science, where I discovered a passion for creating interactive and visually engaging web applications. Over the past five years, I have cultivated my expertise as a MERN Stack Developer, mastering technologies like ReactJS, Node.js, Express.js, and MongoDB. This experience spans diverse projects and professional roles, including designing scalable architectures, developing user-centric interfaces, and implementing secure backend systems. Each project has sharpened my technical skills and deepened my understanding of building dynamic, high-performance applications that deliver exceptional user experiences.        </p>
        <h2 className="section-subtitle"> Experience</h2>
        <h4 className="internship-title">Full Stack Development </h4>
        <p className="about-text">
          I had the opportunity to work on several exciting projects. I was responsible for:
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
