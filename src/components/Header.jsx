import React, { useState } from "react";
// assets
import logo from '../assets/logo JA (1).png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import '../styles/header.scss'

const Header = () => {
    const [menuVisibility, setMenuVisibility] = useState(false)

    const handleOpenMenu = () => {
        setMenuVisibility(!menuVisibility)
    }
    return (    
       <header>
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>        
            <span className={`material-symbols-outlined header__menu`} onClick={handleOpenMenu}>menu</span>
            <div className={`header__container ${menuVisibility? 'menu-visible' : ''}`}>
                <div className="header__links">
                    <ul>
                        <li><a href="#home">Inicio</a></li>
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