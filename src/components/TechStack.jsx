import React from "react";
import htmlIcon from '../assets/html.svg'
import cssIcon from '../assets/css.svg'
import jsIcon from '../assets/js.svg'
import reactIcon from '../assets/react.svg'
import reduxIcon from '../assets/redux.svg'
import bootstrapIcon from '../assets/bootstrap.svg'
import gitIcon from '../assets/git.svg'
import githubIcon from '../assets/github.svg'
import sassIcon from '../assets/sass.svg'
import webpackIcon from '../assets/webpack.svg'
import nodeIcon from '../assets/node.svg'
import typescriptIcon from '../assets/typescript.svg'

import '../styles/techStack.scss'

const TechStack = () => {
    return (
        <div className="techStack" id="tecnologias">
            <div className="title title-centered">
                Tecnologías
            </div>
            <div className="paragraph">
                Estas son algunas de las tecnologías con las que he trabajado ultimamente
            </div>
            <div className="techStack__icons">
                <div className="tech-icon">
                    <div className="tech-icon__text">HTML</div>
                    <img src={htmlIcon} alt="" />
                </div>
                <div className="tech-icon">
                    <div className="tech-icon__text">CSS</div>
                    <img src={cssIcon} alt="" />
                </div>
                <div className="tech-icon">
                    <div className="tech-icon__text">Javascript</div>
                    <img src={jsIcon} alt="" />
                </div>
                <div className="tech-icon">
                    <div className="tech-icon__text">React</div>
                    <img src={reactIcon} alt="" />
                </div>
                <div className="tech-icon">
                    <div className="tech-icon__text">Redux</div>
                    <img src={reduxIcon} alt="" />
                </div>
                <div className="tech-icon">
                    <div className="tech-icon__text">Bootstrap</div>
                    <img src={bootstrapIcon} alt="" />
                </div>
                <div className="tech-icon">
                    <div className="tech-icon__text">Git</div>
                    <img src={gitIcon} alt="" />
                </div>
                <div className="tech-icon">
                    <div className="tech-icon__text">GitHub</div>
                    <img src={githubIcon} alt="" />
                </div>
                <div className="tech-icon">
                    <div className="tech-icon__text">Sass</div>
                    <img src={sassIcon} alt="" />
                </div>
                <div className="tech-icon">
                    <div className="tech-icon__text">Webpack</div>
                    <img src={webpackIcon} alt="" />
                </div>
                <div className="tech-icon">
                    <div className="tech-icon__text">Node</div>
                    <img src={nodeIcon} alt="" />
                </div>
                <div className="tech-icon">
                    <div className="tech-icon__text">Typescript</div>
                    <img src={typescriptIcon} alt="" />
                </div>     
            </div>
        </div>
    )
}

export { TechStack }