import React from "react";
// assets
import logo from '../assets/logo.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import '../styles/header.css'

const Header = () => {
    return (
       <header>
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>        
            <div className="header__container">
                <div className="header__links">
                    <ul>
                        <li>Home</li>
                    </ul>
                    <ul>
                        <li>Sobre mí</li>
                    </ul>
                    <ul>
                        <li>Tecnologías</li>
                    </ul>
                    <ul>
                        <li>Proyectos</li>
                    </ul>
                    <ul>
                        <li>Contacto</li>
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