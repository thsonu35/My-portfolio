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
                  <img src="https://th.bing.com/th/id/R.78800bdb23a011708fe5df5af576f7f2?rik=xHS79jmWkuKg%2bQ&riu=http%3a%2f%2fwww.micahthompkins.com%2fpngs%2fgithub-3.png&ehk=i2mMfQElkWDPPKzFO2TyYS46I1A2k2U6nLXT6drw71g%3d&risl=&pid=ImgRaw&r=0" alt="GitHub" className="social-icon" />
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
              href="https://export-download.canva.com/nRIhM/DAGOI2nRIhM/21/0-7933528507150622728.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240817T092139Z&X-Amz-Expires=44903&X-Amz-Signature=51b3ca0140d6112e0db29109772962b3f5932c3d9435a18081df20bdec2ec89a&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Sohan%2520Thakur%2520resume%2520%25281%2529.pdf.pdf&response-expires=Sat%2C%2017%20Aug%202024%2021%3A50%3A02%20GMT"
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
