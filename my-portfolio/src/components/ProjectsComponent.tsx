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

        <ProjectsCarousel />
        
        </Container>
        <FooterComponent />
        </>
    )
}

export default ProjectsComponent