

import React from "react";
import backend from "../images/backend.png";
import frontend from "../images/frontend.png";
import ux from "../images/ux.png";
import prototype from "../images/prototyping.png";

const imageAltText = "purple and blue abstract background";

const description =
  "I am a Full Stack Developer with a background in UI/UX design. I have a passion for creating and designing new and innovative solutions. I am always looking for new ways to make technology accessible to all. I am a creative problem solver and a team player who is always looking for new ways to drive innovation.";

const skillsList = [
  "Front-end developer",
  "Back-end developer",
  "UI/UX designer",
  "Prototyping",

];

const skillsImages = [ frontend, backend, ux, prototype ];



const About = () => {
  return (
    <section className="about" id="about">

      <div className="about__heading">
        <h2 className="about__heading-title h2__heading">About Myself</h2>
        <p className="about__heading-text text">{description}</p>
      </div>
      <div className="about__skills">
        {skillsList.map((skill, index) => (
          <div key={index} className="about__skills-list">
            <img src={skillsImages[ index ]} alt={imageAltText} className="about__skills-list--img" />
            <p className="about__skills-list--item">{skill}</p>
          </div>
        ))}
      </div>

    </section >
  );
};

export default About;
