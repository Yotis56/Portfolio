import React from "react"
import Logo from '../assets/logo.png'
import '../styles/footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__up">
                <div className="footer__logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer__info">
                    <p className="footer__tel">+57 3005285834</p>
                    <p className="footer__mail">ingyotis@gmail.com</p>
                    <div className="footer__links">
                        <span className="icon github-icon"></span>
                        <span className="icon linkedin-icon"></span>
                        <span className="icon"></span>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre Mi</a></li>
                    <li><a href="#tecnologias">Tecnologías</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                <div className="footer__text">
                    Construido por 
                    <span className="highlighted"> Johnatan Arango </span> 
                    con mucho amor y café.</div>
            </div>
        </footer>
    )
}

export { Footer }