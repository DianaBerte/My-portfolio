import NavbarComponent from "./NavbarComponent"
import { Container, Row, Col } from "react-bootstrap"
import '../assets/index.css'
import meImage from '../assets/Diana foto HSK.jpg'
import FooterComponent from "./FooterComponent"

const AboutComponent = () => {
    return (
        <>
        <NavbarComponent />

        <Container className="container">
        <div className="container-div">
            <h1 className="title">About</h1>
        </div>

        <div>

            <Row>
                <Col lg={4} md={6} sm={6} xs={6} style={{color: "whitesmoke"}}>
                <img className="me-img" src={meImage} alt="placeholder" />
                </Col>
                <Col lg={8} md={8} sm={8} xs={8} style={{color: "whitesmoke"}}><span><h5>Hi! It's nice to see you here!</h5></span><p>This is a space where I'm listing my current skills in web development: <br/>
<span>Front-end:</span> HTML & CSS | JavaScript | Bootstrap | React | React Redux | TypeScript <br/> <span>Back-end:</span> Express.js | MongoDB | PostgreSQL | Security & Authentication</p><br/><span>Fun facts about me:</span><br/><p>I love learning languages! I can speak four.<br/>
My favorite foods are pizza (well, I'm Italian) and Korean bibimbap.<br/>Weightlifting is my go-to workout!</p>
                </Col>
            </Row>

        </div>

        </Container>
        <FooterComponent />
        </>
    )
}

export default AboutComponent