import FooterComponent from "./FooterComponent"
import NavbarComponent from "./NavbarComponent"
import { Container } from "react-bootstrap"
import ProjectsCarousel from "./ProjectsCarousel"

const ProjectsComponent = () => {
    return(
        <>
        <NavbarComponent />

        <Container className="projects-page-container">
            
        <div id="projects" className="container-div">
            <h1 className="title">Projects</h1>
        </div>

        <div className="projects-container">

            <div className="left-container">
            <h6 style={{color: "whitesmoke"}}>MandarinApp is my first <span style={{fontWeight:"bold"}}>solo project</span>, built with React. It's a full stack application for practicing Mandarin Chinese:</h6>
            <ProjectsCarousel />
            </div>

            <div className="right-container">
            <h6 style={{color: "whitesmoke"}}>An example of <span style={{fontWeight:"bold"}}>teamwork project</span> is this LinkedIn replica: <a className="styled-links" href="https://github.com/yasirozdemir/u3-bw-linkedin"><br/>Front-end</a> and <a className="styled-links" href="https://github.com/DianaBerte/BW-4-LinkedIn-BE/tree/main">Back-end</a>.</h6>
            <h6 style={{color: "whitesmoke"}}><br/>Please take a look at my GitHub page for other projects: <a className="styled-links" href="https://github.com/DianaBerte">github.com/DianaBerte</a></h6>
            </div>

        </div>
        
        </Container>
        <FooterComponent />
        </>
    )
}

export default ProjectsComponent