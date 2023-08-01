import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { ICustomArrowStyles } from '../interfaces/ICustomArrowStyles'

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
            <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            >bla
            <img className='carousel-img' src='https://www.pngkey.com/png/detail/233-2332677_ega-png.png' alt='Carousel img' />
            </div>

            <div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            >bla
            <img className='carousel-img' src='https://www.pngkey.com/png/detail/233-2332677_ega-png.png' alt='Carousel img' />
            </div>

            <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            >bla
            <img className='carousel-img' src='https://www.pngkey.com/png/detail/233-2332677_ega-png.png' alt='Carousel img' />
            </div>

            <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            >bla
            <img className='carousel-img' src='https://www.pngkey.com/png/detail/233-2332677_ega-png.png' alt='Carousel img' />
            </div>

            <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            >bla
            <img className='carousel-img' src='https://www.pngkey.com/png/detail/233-2332677_ega-png.png' alt='Carousel img' />
            </div>
        </Carousel>
        </Col>
        </Row>
        </Container>
    )
}

export default ProjectsCarousel