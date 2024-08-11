import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import './Projects.css'; // Import specific CSS for Projects

const projects = [
  {
    title: 'My-Calculator',
    description: 'A Micro Project of "calculator" coded by HTML, CSS, and JS',
    imageUrl: 'https://th.bing.com/th/id/OIP.5vw4p8D5UFDL9HVGnCqe3wAAAA?rs=1&pid=ImgDetMain',
    deployUrl: 'https://thsonu35.github.io/My-Calculater/',
    githubUrl: 'https://github.com/thsonu35/My-Calculater'
  },
  {
    title: 'Dappr Web page',
    description: 'A Website that takes contact details and shows a working responsive design, named dappr.',
    imageUrl: 'https://th.bing.com/th/id/OIP.bxsARnVtZXKaLkg-PK5S6gHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain',
    deployUrl: 'https://thsonu35.github.io/Dappr-a-react-wep-page/',
    githubUrl: 'https://github.com/thsonu35/Dappr-a-react-wep-page'
  },
  {
    title: 'Pocket-Notes',
    description: 'This project helps to note down notes like a chatting app.',
    imageUrl: 'https://th.bing.com/th/id/OIP.u1LI0kCEcS9YzlpO8GQnngHaHQ?w=554&h=543&rs=1&pid=ImgDetMain',
    deployUrl: 'https://project1-omega-three.vercel.app/',
    githubUrl: 'https://github.com/thsonu35/pocket-notes'
  },
  {
    title: 'Pro-Manage',
    description: 'This is a full Stack Project with backend and frontend.',
    imageUrl: 'https://wallpaperaccess.com/full/8901756.jpg',
    deployUrl: 'https://pro-manage-blush.vercel.app/',
    githubUrl: 'https://github.com/thsonu35/Pro-Manage'
  },
  {
    title: 'To be Continue...',
    description: 'Working on project 5.',
    imageUrl: 'https://wallpapercave.com/wp/wp1828903.png',
    deployUrl: 'https://wallpapercave.com/wp/wp4769146.jpg',
    githubUrl: ''
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  const projectsToShow = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + projectsToShow) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - projectsToShow : prevIndex - projectsToShow
    );
  };

  const handleCardDoubleClick = (url) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    if (!showTypewriter) {
      setTimeout(() => {
        setShowProjects(true);
      }, 1000); // Delay before showing projects
    }
  }, [showTypewriter]);

  return (
    <Element name="projects" className="projects-section">
                <h2 className="section-title">Projects</h2>

      {showTypewriter && (
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ['Double click on a project to see the deployment link', 'Click on GitHub to see the code'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 90,
              pauseFor: 2000
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2500)
                .callFunction(() => {
                  setShowTypewriter(false);
                });
            }}
          />
        </div>
      )}
      {showProjects && (
        <>
          <div className="projects-container">
            {projects.slice(currentIndex, currentIndex + projectsToShow).map((project, index) => (
              <div
                key={index}
                className="project-card"
                onDoubleClick={() => handleCardDoubleClick(project.deployUrl)}
              >
                <img src={project.imageUrl} alt={project.title} />
                <div className="content">
                  <h3 className="title">{project.title}</h3>
                  <p>{project.description}</p>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                      onClick={(e) => e.stopPropagation()} // Prevent card click when clicking on GitHub link
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="pagination-controls">
            <button onClick={handlePrev} disabled={currentIndex === 0}>
              Previous
            </button>
            <button onClick={handleNext} disabled={currentIndex + projectsToShow >= projects.length}>
              Next
            </button>
          </div>
        </>
      )}
    </Element>
  );
};

export default Projects;
