
import React, { useState } from "react";
import Popup from "./Popup";

import image from "../../assets/backgrounds/Natours.png";
import techerPetImg from "../../assets/backgrounds/techerPet.png";
import videorecommandation from "../../assets/backgrounds/videsrecomadtion.png";

const projectList = [
  {
    title: "Teacher PET",
    description:
      "Collaboration project with a team of four to create a web application to automate the data gathering from teacher forms and develop a form accessible to pupils help who are visually impaired.",
    url: "https://teachers-pet.netlify.app/",
    image: techerPetImg,
    type: "fullstack"
  },
  {
    title: "Video Recommandation 🎉",
    description: "A web application that allows users to search for videos and get recommendations based on the video they are watching. The application is built using React, Node.js, and PostgreSQL.",
    url: "http://cyf-videos.s3-website.eu-west-2.amazonaws.com",
    image: videorecommandation,
    type: "fullstack"

  },
  {
    title: "Natours",
    description:
      "create a webpage for a fictional company that offers tours in the nature. The website is built using HTML, CSS, and SASS.",
    url: "https://snazzy-pasca-77a73e.netlify.app/",
    image: image,
    type: "frontend"
  },

];


const description = [
  "Here are a few projects I've worked on recently , I've worked on a variety of projects, I'm passionate about creating and contributing to projects that are impactful and meaningful." ];

const Projects = () => {
  const [ popupOpen, setPopupOpen ] = useState(false);
  const [ popupProject, setPopupProject ] = useState(null);

  const openPopup = (project) => {
    setPopupProject(project);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__desc">
        <h2 className="projects__desc-title h2__heading">Projects</h2>
        <p className="projects__desc-text text">{description}</p>
      </div>
      <div className="projects__content">
        <div className="projects__content-container">
          {projectList.map((project) => (
            <figure className="projects__content-box" key={project.title}>
              <img src={project.image} alt="project" className="projects__content-box--img" />
              <h3 className="projects__content-box--title">{project.title}</h3>
              <button onClick={() => openPopup(project)} className="projects__content-box--link">
                press for more   &rarr;
              </button>
            </figure>
          ))}
        </div>
      </div>
      {popupOpen && <Popup project={popupProject}
        onClose={closePopup} />
      }
    </section>
  );
};

export default Projects;
