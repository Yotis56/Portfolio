import React from "react"
import Logo from '../assets/logo JA (1).png'
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
                        <a href="https://github.com/Yotis56">
                            <span className="icon github-icon"></span>
                        </a>
                        <a href="https://www.linkedin.com/in/johnatan-andres-arango-rodriguez/">
                            <span className="icon linkedin-icon"></span>
                        </a>
                        <span className="icon"></span>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__text">
                    Construido por 
                    <span className="highlighted"> Johnatan Arango </span> 
                    con mucho amor y café.</div>
            </div>
        </footer>
    )
}

export { Footer }