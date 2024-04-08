import React from "react";
import Icon from "../Icon";

const ProjectIcons = ({ project, className }) => {
    const frontEnd = [ "html5", "css3", "javascript", "react" ];
    const fullStack = [
        "html5",
        "css3",
        "javascript",
        "react",
        "nodejs",
        "express",
        "postgresql"
    ];

    let icons = [ "html5", "css3", "javascript", "react", "nodejs", "express", "postgresql" ];

    if (project.type === "frontend") {
        icons = frontEnd;
    } else if (project.type === "fullstack") {
        icons = fullStack;
    }

    return (
        <div className={`${className} projectIcons`}>
            <h3 className="projectIcons__heading">Technologies Used</h3>
            <div className="projectIcons__content">
                {icons.map((icon) => (
                    <Icon key={icon} icon={icon} className="projectIcons__content--icon" />
                ))}
            </div>
        </div>
    );
};

export default ProjectIcons;
