import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Container } from 'react-bootstrap'
import NavbarComponent from "./NavbarComponent"
import FooterComponent from './FooterComponent'

const ContactComponent = () => {

    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    const [isLoading, setIsLoading] = useState(false)

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
      e.preventDefault();

      if (form.current && serviceID && templateID && publicKey) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setIsLoading(false);
          console.log(result.text);
      }, (error) => {
        setIsLoading(false);
          console.log(error.text);
      });
    }
  };

    return(
        <>
        <NavbarComponent />

        <Container className='container'>
        <div className='container-div'>
            <h1 className="title">Contact</h1>
        </div>

        <div className='contact-form-container-div'>
        <form ref={form} onSubmit={sendEmail}>
            <label></label>
            <input type="text" placeholder='Your Name' name="user_name" required />
            <label></label>
            <input type="email" placeholder='Your Email Address' name="user_email" required />
            <label></label>
            <textarea name="message" placeholder='Type message...' required />
            <input type="submit" value="Send" />
        </form>
        </div>

        </Container>
        <FooterComponent/>
        </>
    )
}

export default ContactComponent