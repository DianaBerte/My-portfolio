import NavbarComponent from "./NavbarComponent"
import { Container, Row, Col } from "react-bootstrap"
import '../assets/index.css'
import FooterComponent from "./FooterComponent"

const AboutComponent = () => {
    return (
        <>
        <NavbarComponent />

        <Container className="container">
        <div className="container-div">
            <h1 className="title">About</h1>
        </div>

        <div className='contact-form-container-div'>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
        </div>

        </Container>
        <FooterComponent />
        </>
    )
}

export default AboutComponent