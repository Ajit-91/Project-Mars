import React from 'react'
import { Carousel} from 'react-bootstrap'
import marsImage from "../../Images/perseverance_1.jpg"
import "../../css/Components/homeCarousel.css"
const HomeCarousel = ()=>{
  return(
    <>
          <Carousel className="nav_img">
                <Carousel.Item >
                 <img
                 className="d-block w-100"
                 src="https://mars.nasa.gov/system/resources/detail_files/25466_PIA24343-web.jpg"

                 alt="First slide"
                 />
                 {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                 </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                 <img
                 className="d-block w-100"
                 src={marsImage}

                 alt="Second slide"
                 />
                 {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                 <img
                 className="d-block w-100"
                 src="https://mars.nasa.gov/system/resources/detail_files/25449_08_PoweredDescent-1200.jpg"
                 alt="Third slide"
                 />
                 {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                 </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                 <img
                 className="d-block w-100"
                 src="https://mars.nasa.gov/system/resources/detail_files/25451_09_Touchdown-1200.jpg"
                 alt="Fourth slide"
                 />
                 {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                 </Carousel.Caption> */}
                </Carousel.Item>
                
            </Carousel>
</>

  )
}

export default HomeCarousel;
