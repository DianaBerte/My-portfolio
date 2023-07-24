import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const NavbarComponent: React.FC = () => {
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default NavbarComponent