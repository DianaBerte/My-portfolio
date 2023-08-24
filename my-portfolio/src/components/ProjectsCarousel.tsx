import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
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
        backgroundColor: "lightgrey",
        color: "#000",
        fontSize: "1rem",
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
        interval={4000}
        transitionTime={500}
        >
            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src="https://res.cloudinary.com/degg5zebq/image/upload/v1692889085/Portfolio/MApp_Registration_page_peosgt.png" alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src="https://res.cloudinary.com/degg5zebq/image/upload/v1692889085/Portfolio/MApp_Homepage_uanxz5.png" alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src="https://res.cloudinary.com/degg5zebq/image/upload/v1692889084/Portfolio/MApp_Choose_your_level_sc9dv9.png" alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src="https://res.cloudinary.com/degg5zebq/image/upload/v1692889084/Portfolio/MApp_Countdown_to_start_fpnfzj.png" alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src="https://res.cloudinary.com/degg5zebq/image/upload/v1692889085/Portfolio/MApp_Intermediate_exercises_e2wysc.png" alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src="https://res.cloudinary.com/degg5zebq/image/upload/v1692889084/Portfolio/MApp_Audio_exercises_zwkz6p.png" alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src="https://res.cloudinary.com/degg5zebq/image/upload/v1692889084/Portfolio/MApp_Final_score_page_tm9dw8.png" alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src="https://res.cloudinary.com/degg5zebq/image/upload/v1692889085/Portfolio/MApp_Profile_page_c4ut8q.png" alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src="https://res.cloudinary.com/degg5zebq/image/upload/v1692889086/Portfolio/MApp_Update_profile_section_xno3ru.png" alt='Carousel img' />
            </div>

            <div className='carousel-div'
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            ><img className='carousel-img' src="https://res.cloudinary.com/degg5zebq/image/upload/v1692889084/Portfolio/MApp_Admin_handle_users_section_dks7qo.png" alt='Carousel img' />
            </div>
        </Carousel>
        </Col>
        </Row>
    )
}

export default ProjectsCarousel