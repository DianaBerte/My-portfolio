import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'

const ProjectsCarousel = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const handleMouseEnter = (index: any) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const renderCustomArrowPrev = (onClickHandler: any, hasNext: any, label: any) => 
    hasNext && (
        <button
        type='button'
        onClick={onClickHandler}
        title={label}
        onMouseEnter={() => handleMouseEnter(hoveredIndex)}
        onMouseLeave={handleMouseLeave}
        >
            <FaChevronLeft />
        </button>
    )

    const renderCustomArrowNext = (onCLickHandler: any, hasNext: any, label: any) => 
    hasNext && (
        <button
        type='button'
        onClick={onCLickHandler}
        title={label}
        onMouseEnter={() => handleMouseEnter(hoveredIndex)}
        onMouseLeave={handleMouseLeave}
        >
            <FaChevronRight />
        </button>
    )

    return(
        <Carousel
        className='mb-10'
        showArrows={true}
        showThumbs={false}
        showIndicators={false}
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
            <img src='https://www.pngkey.com/png/detail/233-2332677_ega-png.png' alt='Carousel img' />
            </div>
            <div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            >bla
            <img src='https://www.pngkey.com/png/detail/233-2332677_ega-png.png' alt='Carousel img' />
            </div>
            <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            >bla
            <img src='https://www.pngkey.com/png/detail/233-2332677_ega-png.png' alt='Carousel img' />
            </div>
            <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            >bla
            <img alt='Carousel img' />
            </div>
            <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            >bla
            <img src='https://www.pngkey.com/png/detail/233-2332677_ega-png.png' alt='Carousel img' />
            </div>
        </Carousel>
    )
}

export default ProjectsCarousel