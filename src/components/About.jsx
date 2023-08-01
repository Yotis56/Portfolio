import React from "react";
import '../styles/about.css'

const About = () => {
    return (
        <div className="about">
            <div className="about__section">
                <div className="about__title">
                    Sobre mí
                </div>
                <div className="about__content">
                    Soy un ingeniero químico de profesión, apasionado por la programación; hace un poco más de dos años empecé a estudiar desarrollo web con diversos contenidos y cursos virtuales. 
                </div>
            </div>
            <div className="about__section">
                <div className="about__title">
                    Educación
                </div>
                <div className="about__education">
                        <div className="education-name"> Universidad Nacional de Colombia</div>
                        
                </div>
            </div>
        </div>
    )
}

export { About }