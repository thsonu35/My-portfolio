import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './Projects.css'; // Import specific CSS for Projects

const projects = [
  { title: 'My-Calculator', description: 'An Micro Project of "calculator" code by html, css and js', imageUrl: 'https://th.bing.com/th/id/OIP.5vw4p8D5UFDL9HVGnCqe3wAAAA?rs=1&pid=ImgDetMain' },
  { title: 'Dappr Web page', description: 'A Website that takes contact detail and show user working responsive , name dappr.', imageUrl: 'https://th.bing.com/th/id/OIP.bxsARnVtZXKaLkg-PK5S6gHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain' },
  { title: 'Pocket-Notes', description: 'This project helps to note down notes look like a chatting app.', imageUrl: 'https://th.bing.com/th/id/OIP.u1LI0kCEcS9YzlpO8GQnngHaHQ?w=554&h=543&rs=1&pid=ImgDetMain' },
  { title: 'Pro-Manage', description: 'This is a full Stack Project with backend and frontend.', imageUrl: 'https://wallpaperaccess.com/full/8901756.jpg' },
  { title: 'Project 5', description: 'Description of Project 5.', imageUrl: 'https://i.pinimg.com/originals/86/9b/a1/869ba19ef2e24bed77f37b42f5c7b582.jpg' },
  { title: 'Project 6', description: 'Description of Project 6.', imageUrl: 'https://i.pinimg.com/originals/86/9b/a1/869ba19ef2e24bed77f37b42f5c7b582.jpg' },
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false); // Manage fade effect
    const cardsPerPage = 4; // Number of cards to display per page

    const handleNext = () => {
      if (currentIndex + cardsPerPage < projects.length) {
        setFade(true); // Start fade-out effect
        setTimeout(() => {
          setCurrentIndex(currentIndex + cardsPerPage);
          setFade(false); // End fade effect
        }, 500); // Duration of the fade-out animation
      }
    };

    const handlePrevious = () => {
      if (currentIndex > 0) {
        setFade(true); // Start fade-out effect
        setTimeout(() => {
          setCurrentIndex(currentIndex - cardsPerPage);
          setFade(false); // End fade effect
        }, 500); // Duration of the fade-out animation
      }
    };

    const displayedProjects = projects.slice(currentIndex, currentIndex + cardsPerPage);

    return (
      <Element name="projects">
        <section id="projects" className="projects-section">
          <h2 className="section-title">My Projects</h2>
          <div className={`projects-container ${fade ? 'fade-out' : ''}`}>
            {displayedProjects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
          <div className="pagination-controls">
  <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
  <button onClick={handleNext} disabled={currentIndex + cardsPerPage >= projects.length}>Next</button>
</div>

        </section>
      </Element>
    );
};

export default Projects;
