import React, { useState } from 'react';
import { Element } from 'react-scroll';
import AnimatedSection from './AnimatedSection';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';

const Home = () => {
  const [showCard, setShowCard] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  const handleType = (count) => {
    const words = ["Interested in Cyber Security", "I am a Tech student", "I am a Web Developer"];
    if (words[count] === "I am a Web Developer") {
      setShowCard(true);
    }
    if (count === words.length - 1) {
      setIsTypingDone(true);
    }
  };

  return (
    <Element name="home">
      <AnimatedSection name="home">
        <div className="profile-container">
          <img
            src="https://avatars.githubusercontent.com/u/85925090?s=400&u=7c4eb824a185a5f39ab37735e1ef072a77de5fb2&v=4"
            alt="Sohan's Profile"
            className="profile-photo"
          />
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
                👋 Greetings! I'm Sohan, a passionate MERN and Python Developer with a love for turning ideas into reality through clean and efficient code.
                Driven by a curiosity to solve problems and a love for elegant solutions, I specialize in Full Stack Web development using Python and MERN. My approach is rooted in a commitment to writing code that is not only functional but also maintainable and scalable.
              </p>
            </div>
          )}
          {isTypingDone && (
            <>
              <div className="typing-container-second">
                <Typewriter
                  words={["My Social Profiles"]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
              <div className="social-links">
                <a href="https://github.com/thsonu35" target="_blank" rel="noopener noreferrer">
                  <img src="https://static-00.iconduck.com/assets.00/github-icon-1024x1024-vu0m1lvh.png" alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/sohan--thakur/" target="_blank" rel="noopener noreferrer">
                  <img src="https://th.bing.com/th/id/OIP.WLPT--aZGa6JTSBjv0RYaAHaHe?w=507&h=512&rs=1&pid=ImgDetMain" alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://www.instagram.com/5ohan_thakur/" target="_blank" rel="noopener noreferrer">
                  <img src="https://i.pinimg.com/736x/72/f2/80/72f28035b6903975a9ad8cd65fbcfbdf.jpg" alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.hackerrank.com/profile/thsonu350" target="_blank" rel="noopener noreferrer">
                  <img src="https://storage.googleapis.com/simplify-imgs/companies/ec953765-ae37-4784-811e-b63fad8eadd9/logo.png" alt="HackerRank" className="social-icon" />
                </a>
                
              </div>
            </>
          )}
          {isTypingDone && (
            <a
              href="https://drive.usercontent.google.com/download?id=1qrJ-w16KWgOevMRV_F_Ah1OG2ju8X45x&export=download&authuser=0&confirm=t&uuid=9a2b2bbd-a1d4-4c12-8318-d4a91718e240&at=APZUnTXW-9dMzc2tRV58cERGeKZK:1723923925664"
              download="Sohan_CV.pdf"
              className="download-cv-button"
            >
              Download CV
            </a>
          )}
        </div>
      </AnimatedSection>
    </Element>
  );
};

export default Home;
