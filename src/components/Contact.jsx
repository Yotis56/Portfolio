import React from 'react'
import '../styles/contact.scss'

const Contact = () => {
    return (
        <div className="contact" id='contacto'>
            <p className="contact__text">
                Si tienes alguna pregunta, no dudes en contactarme: <br />
                <span className="highlighted">ingyotis@gmail.com</span>
            </p>
        </div>
    )
}

export { Contact }