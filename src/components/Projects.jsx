import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projecstList } from "../projectsList";
import '../styles/projects.scss'



const Projects = () => {
    const [projects, useProject] = useState(projecstList)
    // {
    //     image: testImage, 
    //     title: 'Proyecto de prueba', 
    //     description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content', 
    //     techStack: 'React, Redux, Sass', 
    //     linkDemo: '#', 
    //     linkGithub: '#' 
    // }

    return (
        <div className="projects" id="proyectos">
            <div className="title title-centered">Proyectos</div>
            <div className="paragraph">Estos son algunos proyectos en los que he trabajado, te invito a que les des un vistazo</div>
            <div className="projects__container">
                {
                    projects.map(project => <ProjectCard project={project} id={project.id}/>)
                }
            </div>
        </div>
    )
}

export { Projects }