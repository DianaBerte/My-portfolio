import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button, Container, Alert, Spinner } from 'react-bootstrap'
import NavbarComponent from "./NavbarComponent"
import FooterComponent from './FooterComponent'

const ContactComponent = () => {

    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    const [isLoading, setIsLoading] = useState(false)
    const [showWarningAlert, setShowWarningAlert] = useState(false)
    const [showSuccessAlert, setShowSuccessAlert] = useState(false)

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
      e.preventDefault();
      setIsLoading(true);

        emailjs.sendForm(serviceID as string, templateID as string, form.current as any, publicKey as string)
          .then((result) => {
          setIsLoading(false);
          setShowSuccessAlert(true);
          console.log(result.text);
          
      }, (error) => {
          setIsLoading(false);
          setShowWarningAlert(true);
          console.log(error.text);
      });
    }

  const handleWarningAlertClose =  () => {
    setShowWarningAlert(false);
  };

  const handleSuccessAlertClose = () => {
    setShowSuccessAlert(false);
    if (form.current) {
      form.current.reset();
    }
  }

    return(
        <>
        <NavbarComponent />

        <Container className='container'>

        {/* Warning alert */}
        {showWarningAlert && (
          <Alert variant='warning' className='my-2 warning-alert'>
            <h6>There was an error sending the message. Please try again later.</h6>
            <Button onClick={() => {handleWarningAlertClose()}} variant='light' >Close</Button>
          </Alert>
        )}

        {/* Success alert */}
        {showSuccessAlert && (
          <Alert className='my-2 success-alert'>
            <h6>Message sent successfully.</h6>
            <Button onClick={() => {handleSuccessAlertClose()}} variant='light' >Close</Button>
          </Alert>
        )}

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
        {isLoading &&
          <Spinner animation="border" variant='light' role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        }   
        </div>

        </Container>
        <FooterComponent/>
        </>
    )
}

export default ContactComponent