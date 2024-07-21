import React, { useState } from 'react';
import { Element } from 'react-scroll';
import AnimatedSection from './AnimatedSection';
import { Typewriter } from 'react-simple-typewriter';
import Card from './Card/Card'; // Adjust the import path as necessary
import './Home.css';

const Home = () => {
  const [showCard, setShowCard] = useState(false);

  const handleType = (count) => {
    const words = ["Interested in Cyber Security", "I am a Tech student", "I am a Web Developer"];
    if (words[count] === "I am a Web Developer") {
      setShowCard(true);
    }
  };

  return (
    <Element name="home">
      <AnimatedSection name="home">
        <div className="profile-container">
          <img
            src="https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0"
            alt="Sohan's Profile"
            className="profile-photo"
          />
          <h1>Welcome to My Portfolio</h1>
          <h3>Hello, It's me Sohan</h3>
          <div className="typing-container">
            <Typewriter
              words={["Interested in Cyber Security", "I am a Tech student", "I am a Web Developer"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onType={handleType}
            />
          </div>
          {showCard && (
            <div className="fade-in-card">
              <p>
                I specialize in developing high-quality web applications using the
                latest technologies. My goal is to create user-friendly and
                efficient software solutions that make a difference.
              </p>
              {/* <Card /> */}
            </div>
          )}
          <a
            href="/path/to/cv.pdf"
            download="Sohan_CV.pdf"
            className="download-cv-button"
          >
            Download CV
          </a>
        </div>
      </AnimatedSection>
    </Element>
  );
};

export default Home;
