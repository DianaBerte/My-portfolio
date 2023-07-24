//this is the landing page: big jumbotron with just introductory lines.
import { FaArrowRight } from 'react-icons/fa'
import { Container } from 'react-bootstrap'

const HeaderComponent = () => {
    return(
        <>
        <Container className='header-container'>
            <div className="intro-title text-white ">
            Hi, I am{" "}
            <span className="name-span">Diana</span>.
            <br />I am a <span className='name-span'>Full-stack Developer</span>.
            </div>
            <button
            //   ref={buttonRef}
            //   onClick={handleClick}
            className="bg-transparent text-white py-2 px-4 border
            border-white my-word-btn"
            >
            <span className='arrow-span'>See my projects </span><FaArrowRight className="arrow-icon" />
            </button>
        </Container>
      </>
    )
}

export default HeaderComponent