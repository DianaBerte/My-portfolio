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
                <Col lg={8} md={8} sm={8} xs={8} style={{color: "whitesmoke"}}><span><h3>It's nice to see you here!</h3></span>
                <br/>My current skills in web development are:
                <br/>
                <br/>
                <span className="fe-span">Front-end: HTML & CSS | JavaScript | Bootstrap | React | React Redux | TypeScript </span><br/>
                <span className="be-span" >Back-end: Express.js | MongoDB | PostgreSQL | Security & Authentication</span><br/>
                <br/>
                <p>I am looking for a position as Back-end developer | Front-end developer, on-site or remote.</p>
                <br/>
                <span className="random">Random facts about me:</span><ul>
                <li><p className="random">CSS can be fun, but usually it's not my fav part!</p></li>
                <li><p className="random">Before becoming a web developer, I used to work in marketing.</p></li>
                <p className="random"><li>I love learning languages, both programming and natural! Besides JavaScript, I can speak Italian, Slovene, English, and some Chinese 😉</li></p>
</ul>
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