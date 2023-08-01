import NavbarComponent from "./NavbarComponent"
import { Container, Row, Col } from "react-bootstrap"
import '../assets/index.css'
import FooterComponent from "./FooterComponent"

const AboutComponent = () => {
    return (
        <>
        <NavbarComponent />

        <Container className="container">
        <div className="container-div">
            <h1 className="title">About</h1>
        </div>

        <div>

            <Row>
                <Col lg={4} md={6} sm={6} xs={6} style={{color: "whitesmoke"}}>
                <img src="https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png" alt="placeholder" />
                </Col>
                <Col lg={8} md={8} sm={8} xs={8} style={{color: "whitesmoke"}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eligendi reiciendis amet ab esse soluta nisi, possimus facilis nesciunt sequi iusto obcaecati accusamus quia delectus aperiam? Magni, maiores aut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro amet totam, aliquid autem ut soluta nobis, deleniti quibusdam ea consequuntur iure voluptates animi distinctio laborum illum corrupti tempora. Eaque, vero? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur facilis quasi odit commodi impedit reprehenderit ipsa alias, quis officiis nobis earum velit accusamus veritatis fugit quibusdam dolor labore tempora saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio explicabo fuga exercitationem deleniti assumenda quaerat sit delectus! Fuga deserunt sapiente magnam ut ducimus dolorem, esse aliquid sint dolor repellendus tenetur?
                </Col>
            </Row>

        </div>

        </Container>
        <FooterComponent />
        </>
    )
}

export default AboutComponent