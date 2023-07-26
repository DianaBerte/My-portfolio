import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"
import '../assets/navbar.css'

const NavbarComponent: React.FC = () => {
    return(
        <>
        <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav ml-auto">
                    <Nav.Link className="navlink" as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className="navlink" as={Link} to="/about">About</Nav.Link>
                    <Nav.Link className="navlink" as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link className="navlink" as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default NavbarComponent