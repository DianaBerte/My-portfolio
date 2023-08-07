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
        <h6 style={{color: "whitesmoke"}}>MandarinApp, my first solo project, is a full stack application for practicing Mandarin Chinese</h6>
        <ProjectsCarousel />
        <h6 style={{color: "whitesmoke"}}>An example of teamwork project is this LinkedIn replica: Front-end and Back-end</h6>
        <h6 style={{color: "whitesmoke"}}>Please take a look at my GitHub page for other projects: </h6>
        
        </Container>
        <FooterComponent />
        </>
    )
}

export default ProjectsComponent