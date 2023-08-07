import NavbarComponent from "./NavbarComponent"
import { Container, Row, Col } from "react-bootstrap"
import '../assets/index.css'
import meImage from '../assets/Diana foto HSK.jpg'
import FooterComponent from "./FooterComponent"

const AboutComponent = () => {
    return (
        <>
        
        <NavbarComponent />
        <div className="scroll-div">

        <Container className="container">
        <div className="container-div">
            <h1 className="title">About</h1>
        </div>

        <div>

            <Row>
                <Col lg={4} md={6} sm={6} xs={6} style={{color: "whitesmoke"}}>
                <img className="me-img" src={meImage} alt="Profile img" />
                </Col>
                <Col lg={8} md={8} sm={8} xs={8} style={{color: "whitesmoke"}}><span><h3>It's nice to see you here!</h3></span><br/>
                <p>My current skills in web development are:</p>
                <span className="fe-span">Front-end: HTML & CSS | JavaScript | Bootstrap | React | React Redux | TypeScript </span><br/>
                <span className="be-span" >Back-end: Express.js | MongoDB | PostgreSQL | Security & Authentication</span><br/>
                <br/>
                
                <p>I have engaged in projects assigned to me that closely mirror corporate practices:
                    <ul>
                        <li>Collaborating within a team of developers, we divided tasks and provided daily work updates;</li>
                        <li>I autonomously worked on personal projects;</li>
                        <li>Each project had distinct deadlines, all of which I consistently met.</li>
                    </ul>
                    </p>
                <p>I am looking for a position as a Back-end developer | Front-end developer, on-site or remote.</p>
                </Col>
            </Row>

        </div>

        </Container>
        </div>
        <FooterComponent />
        </>
    )
}

export default AboutComponent