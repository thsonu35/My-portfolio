import React from 'react';
import { Element } from 'react-scroll';
import AnimatedSection from './AnimatedSection';
import './Skills.css';

const Skills = () => (
  <Element name="skills">
    <AnimatedSection name="skills">
      <h2>Technical Skills</h2>

      <div className="skills-container section">
        <div className="skills-category">
          <h3 className="skills-subtitle">Frontend</h3>
          <ul className="skills-list">
            <li className="skill-item">
              <i className="fab fa-html5 skill-icon"></i>
              <span>HTML</span>
            </li>
            <li className="skill-item">
              <i className="fab fa-css3-alt skill-icon"></i>
              <span>CSS</span>
            </li>
            <li className="skill-item">
              <i className="fab fa-js skill-icon"></i>
              <span>JavaScript</span>
            </li>
          </ul>
        </div>
        <div className="skills-category">
          <h3 className="skills-subtitle">Backend</h3>
          <ul className="skills-list">
            <li className="skill-item">
              <i className="fab fa-node skill-icon"></i>
              <span>Node.js</span>
            </li>
            <li className="skill-item">
              <i className="fab fa-js-square skill-icon"></i>
              <span>Express.js</span>
            </li>
            <li className="skill-item">
              <i className="fab fa-python skill-icon"></i>
              <span>Python</span>
            </li>
            <li className="skill-item">
              <i className="fab fa-python skill-icon"></i>
              <span>Django</span>
            </li>
          </ul>
        </div>
        <div className="skills-category">
          <h3 className="skills-subtitle">Databases</h3>
          <ul className="skills-list">
            <li className="skill-item">
              <i className="fas fa-database skill-icon"></i>
              <span>MongoDB</span>
            </li>
            <li className="skill-item">
              <i className="fas fa-database skill-icon"></i>
              <span>MySQL</span>
            </li>
          </ul>
        </div>
        <div className="skills-category">
          <h3 className="skills-subtitle">Tools and Platforms</h3>
          <ul className="skills-list">
            <li className="skill-item">
              <i className="fab fa-git skill-icon"></i>
              <span>Git</span>
            </li>
            <li className="skill-item">
              <i className="fab fa-github skill-icon"></i>
              <span>GitHub</span>
            </li>
            <li className="skill-item">
              <i className="fab fa-aws skill-icon"></i>
              <span>Vercel</span>
            </li>
            <li className="skill-item">
              <i className="fab fa-heroku skill-icon"></i>
              <span>Render</span>
            </li>
            <li className="skill-item">
              <i className="fab fa-heroku skill-icon"></i>
              <span>VS code</span>
            </li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  </Element>
);

export default Skills;
