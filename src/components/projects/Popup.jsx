
import React from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import ProjectIcons from "./ProjectIcons";

function Popup({ project, onClose }) {


    return (
        <div className="popup" id="popup">

            <div className="popup__left ">
                <img src={project.image} alt="project" className="popup__left-img" />

            </div>
            <button onClick={onClose} className="popup__close">
                &times;
            </button>
            <div className="popup__right">

                <h2 className="popup__right-title">{project.title}</h2>
                <p className="popup__right-text">{project.description}</p>

            </div>
            <div className="popup__icons">
                <Link to={''}>
                    <Icon icon="github" className="popup__icons-icon" />
                </Link>
                <Link to={project.url}>
                    <Icon icon="desktop" className="popup__icons-icon" />
                </Link>
            </div>


            <ProjectIcons project={project} className='popup__techs' />

        </div>
    );
}

export default Popup;

