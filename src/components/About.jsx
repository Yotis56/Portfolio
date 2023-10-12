import React from "react";
import '../styles/about.scss'

const About = () => {
    return (
        <div className="about" id="about">
            <div className="about__section">
                <div className="title title-centered">
                    Sobre mí
                </div>
                <div className="paragraph">
                    Soy un ingeniero químico de profesión, apasionado por la programación; hace un poco más de dos años empecé a estudiar desarrollo web con diversos contenidos y cursos virtuales. En este portafolio encontrarás algunos proyectos que he realizado a lo largo de este tiempo, con los cuales podrás visualizar algunos de los conocimientos que he adquirido.
                </div>
            </div>
            <div className="about__section">
                <div className="title title-centered">
                    Educación
                </div>
                <div className="about__education">
                    <div>
                        <div className="education-name">Pregrado en ingeniería Química</div>
                        <div className="education-type">Presencial</div>
                    </div>
                    <div>
                        <div className="education-location">
                            <i className="logo location-logo"></i>
                            Universidad Nacional de Colombia
                        </div>
                        <div className="education-date">
                            <i className="logo date-logo"></i>
                            Ene 2010 - Ago 2016
                        </div>
                    </div>
                </div>
                <div className="about__education">
                    <div>
                        <div className="education-name">Misión TIC</div>
                        <div className="education-type">Remoto</div>
                    </div>
                    <div>
                        <div className="education-location">
                            <i className="logo location-logo"></i>
                            Universidad Industrial de Santander
                        </div>
                        <div className="education-date">
                            <i className="logo date-logo"></i>
                            May 2021 - Dic 2021
                        </div>
                    </div>
                </div>
                <div className="about__education">
                    <div>
                        <div className="education-name">Escuela de Desarrollo Web</div>
                        <div className="education-type">Remoto</div>
                    </div>
                    <div>
                        <div className="education-location">
                            <i className="logo location-logo"></i>
                            Platzi
                        </div>
                        <div className="education-date">
                            <i className="logo date-logo"></i>
                            Ene 2021 - Presente
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { About }