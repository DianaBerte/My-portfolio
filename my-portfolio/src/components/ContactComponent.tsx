import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Container } from 'react-bootstrap'
import NavbarComponent from "./NavbarComponent"

const ContactComponent = () => {

    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
      e.preventDefault();

      if (form.current && serviceID && templateID && publicKey) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
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
        <div className='container-div'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
        </div>
        </Container>
        </>
    )
}

export default ContactComponent