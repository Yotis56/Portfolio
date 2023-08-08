import React from "react";

const ProjectCard = ({project}) => {
    return (
      <div className="projectCard">
        <div className="projectCard__image">
            <img src={project.image} alt="" />
        </div>
        <div className="projectCard__content">
            <div className="projectCard__title">{project.title}</div>
            <div className="projectCard__description">{project.description}</div>
            <div className="projectCard__techStack">
                <span>Tech Stack:</span>
                <span>{project.techStack}</span>
            </div>
            <div className="projectCard__links">
                <div>
                    <span className="linkIcon"></span>
                    <a href={project.linkDemo}></a>
                </div>
                <div>
                    <span className="gitIconSmall"></span>
                    <a href={project.linkGithub}></a>
                </div>
            </div>
        </div>
      </div> 
    )
}

export { ProjectCard }