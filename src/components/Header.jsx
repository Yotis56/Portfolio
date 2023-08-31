import React from "react";
// assets
import logo from '../assets/logo.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import '../styles/header.scss'

const Header = () => {
    return (
       <header>
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>        
            <div className="header__container">
                <div className="header__links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                    </ul>
                    <ul>
                        <li><a href="#about">Sobre Mí</a></li>
                    </ul>
                    <ul>
                        <li><a href="#tecnologias">Tecnologías</a></li>
                    </ul>
                    <ul>
                        <li><a href="#proyectos">Proyectos</a></li>
                    </ul>
                    <ul>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
                <div className="header__social">
                    <a href="#">
                        <img src={linkedin} alt="" />
                    </a>
                    <a href="#">
                        <img src={github} alt="" />
                    </a>
                    
                </div>
            </div>
       </header> 
    )
}

export { Header }