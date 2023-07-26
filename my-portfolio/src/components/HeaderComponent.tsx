// import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { Container } from 'react-bootstrap'
import BackgroundComponent from './BackgroundComponent'

const HeaderComponent = () => {
    // const buttonRef = useRef(null);

    // const handleClick = () => {
    //     const targetElement = document.getElementById("projects"); --> must go to an id called 'projects': a div in ProjectsComponent
    //     if (targetElement) {
    //         targetElement.scrollIntoView({ behavior: "smooth" });
    //     };
    // };

    return(
        <>
        <BackgroundComponent />
        <Container className='header-container'>
            <div className="intro-title text-white">
            Hi, I am{" "}
            <span className="name-span">Diana</span>.
            <br />I am a <span className='name-span'>Full-stack Developer</span>.
            </div>
            <Link to="/projects" >
            <button
                // ref={buttonRef}
                // onClick={() => {
                //     handleClick();
                // }}
                className="my-word-btn bg-transparent text-white py-2 px-4"
            >
                <span className='arrow-span'>See my projects </span><FaArrowRight className="arrow-icon" />
            </button>
            </Link>
        </Container>
      </>
    )
}

export default HeaderComponent