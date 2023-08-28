import NavbarComponent from "./NavbarComponent"
import { Container, Row, Col } from "react-bootstrap"
import '../assets/index.css'
import FooterComponent from "./FooterComponent"

const AboutComponent = () => {
    return (
        <>
        
        <NavbarComponent />
        {/* <div className="scroll-div"> */}

        <Container className="about-page-container">

        <div className="title-container">
            <h1 className="title">About</h1>
        </div>

        <div className="about-container">
            
            {/* <div className="text-container"> */}
            {/* <Row> */}
                {/* <Col lg={4} md={6} sm={6} xs={6} style={{color: "whitesmoke"}}> */}

                <div className="left-container">
                <img className="me-img" src="https://res.cloudinary.com/degg5zebq/image/upload/v1692889479/Portfolio/IMG_6651_2_vazjeu.jpg" alt="Profile img" />
                </div>

                {/* </Col> */}
                {/* <Col lg={8} md={8} sm={8} xs={8} style={{color: "whitesmoke"}}> */}
                <div style={{color: "whitesmoke"}} className="right-container">
                <h3>Hi! It's nice to see you here.</h3><br/>
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
                </div>
                {/* </Col> */}
            {/* </Row> */}
            </div>

        {/* </div> */}

        </Container>
        {/* </div> */}
        <FooterComponent />
        </>
    )
}

export default AboutComponent