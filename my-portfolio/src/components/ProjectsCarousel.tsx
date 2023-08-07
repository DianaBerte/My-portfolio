import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { ICustomArrowStyles } from '../interfaces/ICustomArrowStyles'
import regPage from '../assets/MApp_Registration page.png'
import homepage from '../assets/MApp_Homepage.png'
import levelPage from '../assets/MApp_Choose your level.png'
import countdown from '../assets/MApp_Countdown to start.png'
import exercises from '../assets/MApp_Intermediate exercises.png'
import audio from '../assets/MApp_Audio exercises.png'
import finalScore from '../assets/MApp_Final score page.png'
import profile from '../assets/MApp_Profile page.png'
import updateProfile from '../assets/MApp_Update profile section.png'
import admin from '../assets/MApp_Admin handle users section.png'

const ProjectsCarousel: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const handleMouseEnter = (index: any) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const customArrowStyles: ICustomArrowStyles = {
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        backgroundColor: "transparent",
        color: "#000",
        fontSize: "2rem",
        padding: "0.5rem",
        cursor: "pointer",
        transition: "color 0.3s ease-in-out",
      };

    const renderCustomArrowPrev = (onClickHandler: any, hasNext: any, label: any) => 
    hasNext && (
        <button
        className='customArrowPrev'
        type='button'
        onClick={onClickHandler}
        title={label}
        style={customArrowStyles}
        onMouseEnter={() => handleMouseEnter(hoveredIndex)}
        onMouseLeave={handleMouseLeave}
        >
            <FaChevronLeft />
        </button>
    )

    const renderCustomArrowNext = (onCLickHandler: any, hasNext: any, label: any) => 
    hasNext && (
        <button
        className='customArrowNext'
        type='button'
        onClick={onCLickHandler}
        title={label}
        style={customArrowStyles}
        onMouseEnter={() => handleMouseEnter(hoveredIndex)}
        onMouseLeave={handleMouseLeave}
        >
            <FaChevronRight />
        </button>
    )

    return(
        <Container >
            <Row>
                <Col >
        <Carousel 
        className='carousel'
        showArrows={true}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        renderArrowPrev={renderCustomArrowPrev}
        renderArrowNext={renderCustomArrowNext}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        >
            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src={regPage} alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src={homepage} alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src={levelPage} alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src={countdown} alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src={exercises} alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src={audio} alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src={finalScore} alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src={profile} alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src={updateProfile} alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src={admin} alt='Carousel img' />
            </div>
        </Carousel>
        </Col>
        </Row>
        </Container>
    )
}

export default ProjectsCarousel