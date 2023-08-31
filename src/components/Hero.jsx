import React from "react";
import photo from '../assets/photo.jpg'
import '../styles/hero.scss'

const Hero = () => {
    return (
        <div className="hero" id="home">
            <div className="hero__text">
                Hola 👋, <br/>
                Mi nombre es<br/>
                <span className="hero__text-highlighted"> Johnatan Arango <br/></span> 
                y soy desarrollador web 
            </div>
            <div className="hero__image">
                <img src={photo} alt="" className="photo" />
            </div>
        </div>
    )
}

export { Hero }