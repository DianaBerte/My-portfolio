import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import NavbarComponent from "./NavbarComponent"

const ContactComponent = () => {
    return(
        <>
        <NavbarComponent />
        <div>
            <h1 className="title">Contact</h1>
        </div>
        </>
    )
}

export default ContactComponent