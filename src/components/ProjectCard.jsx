import React from "react";
import '../styles/projectCard.scss'

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
                <span className="bold">Tech Stack:</span>
                <span>{project.techStack}</span>
            </div>
            <div className="projectCard__links">
                <div>
                    <span className="logo linkIcon"></span>
                    <a href={project.linkDemo}>Deploy</a>
                </div>
                {
                    project.linkFigma && 
                    <div>
                        <span className="logo linkIcon"></span>
                        <a href={project.linkFigma}>Figma</a>
                    </div>
                }
                <div>
                    <span className="logo gitIconSmall"></span>
                    <a href={project.linkGithub}>Ver código</a>
                </div>
            </div>
        </div>
      </div> 
    )
}

export { ProjectCard }