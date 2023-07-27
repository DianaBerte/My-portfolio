import NavbarComponent from "./NavbarComponent"
import { Container } from "react-bootstrap"

const ProjectsComponent = () => {
    return(
        <>
        <NavbarComponent />

        <Container className="container">
        <div id="projects" className="container-div">
            <h1 className="title">Projects</h1>
        </div>
        
        </Container>
        </>
    )
}

export default ProjectsComponent