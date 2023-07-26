//this component showcases MandarinApp and redirects the user to other projects
import NavbarComponent from "./NavbarComponent"

const ProjectsComponent = () => {
    return(
        <>
        <NavbarComponent />
        <div id="projects">
            <h1 className="title">Projects</h1>
        </div>

        </>
    )
}

export default ProjectsComponent