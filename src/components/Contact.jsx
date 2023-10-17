import React from 'react'
import '../styles/contact.scss'

const Contact = () => {
    return (
        <div className="contact" id='contacto'>
            <p className="contact__text">
                Si tienes alguna pregunta, no dudes en contactarme vía mail: <br />
                <span className="highlighted">ingyotis@gmail.com</span>
                <br />o en alguna de mis redes sociales
            </p>
        </div>
    )
}

export { Contact }