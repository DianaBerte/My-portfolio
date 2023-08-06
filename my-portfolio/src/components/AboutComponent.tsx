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
                <Col lg={8} md={8} sm={8} xs={8} style={{color: "whitesmoke"}}><span><h3>Hi! It's nice to see you here!</h3></span>
                <br/>My current skills in web development are:
                <br/>
                <span className="fe-span">Front-end: HTML & CSS | JavaScript | Bootstrap | React | React Redux | TypeScript </span><br/>
                <span className="be-span" >Back-end: Express.js | MongoDB | PostgreSQL | Security & Authentication</span><br/>
                <br/>
                <p>I am looking for a position as Back-end developer | Front-end developer, on-site or remote.</p>
                <br/>
                <span>Fun facts about me:</span><ul><br/>
                <p><li>I love learning languages! I can speak four.</li></p>
                <li><p>My favorite foods are pizza (well, I'm Italian), and Korean bibimbap.</p></li>
                <li><p>Weightlifting is my go-to workout!</p></li></ul>
                </Col>
            </Row>

        </div>

        </Container>
        <FooterComponent />
        </>
    )
}

export default AboutComponent