import NavbarComponent from "./NavbarComponent"
import { Container } from "react-bootstrap"
import '../assets/index.css'

const AboutComponent = () => {
    return (
        <>
        <NavbarComponent />

        <Container className="container">
        <div className="container-div">
            <h1 className="title">About</h1>
        </div>

        </Container>
        </>
    )
}

export default AboutComponent