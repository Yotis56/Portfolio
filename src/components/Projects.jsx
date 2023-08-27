import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import testImage from '../assets/testImage.png'
import '../styles/projects.scss'



const Projects = () => {
    const [project, useProject] = useState({
        image: testImage, 
        title: 'Proyecto de prueba', 
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content', 
        techStack: 'React, Redux, Sass', 
        linkDemo: '#', 
        linkGithub: '#' 
    })
    return (
        <div className="projects" id="proyectos">
            <div className="title title-centered">Proyectos</div>
            <div className="paragraph">Estos son algunos proyectos en los que he trabajado</div>
            <div className="projects__container">
               <ProjectCard project={project} /> 
               <ProjectCard project={project} /> 
               <ProjectCard project={project} /> 
               <ProjectCard project={project} /> 
               <ProjectCard project={project} /> 
               <ProjectCard project={project} /> 
            </div>
        </div>
    )
}

export { Projects }