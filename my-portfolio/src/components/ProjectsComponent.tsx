import FooterComponent from "./FooterComponent"
import NavbarComponent from "./NavbarComponent"
import { Container } from "react-bootstrap"
import ProjectsCarousel from "./ProjectsCarousel"

const ProjectsComponent = () => {
    return(
        <>
        <NavbarComponent />

        <Container className="container">
            
        <div id="projects" className="container-div">
            <h1 className="title">Projects</h1>
        </div>

        <div className="projects-container">

            <div className="left-container">
            <h6 style={{color: "whitesmoke"}}>MandarinApp, my first <span style={{fontWeight:"bold"}}>solo project</span>, is a full stack application, built with React, for practicing Mandarin Chinese:</h6>
            <ProjectsCarousel />
            </div>

            <div className="right-container">
            <h6 style={{color: "whitesmoke"}}>An example of <span style={{fontWeight:"bold"}}>teamwork project</span> is this LinkedIn replica: Front-end and Back-end</h6>
            <h6 style={{color: "whitesmoke"}}>Please take a look at my GitHub page for other projects: </h6>
            </div>

        </div>
        
        </Container>
        <FooterComponent />
        </>
    )
}

export default ProjectsComponent