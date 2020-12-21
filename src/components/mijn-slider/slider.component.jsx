import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/img/carousal/Slide22.jpg'; // slider foto 1 
import Slide2 from '../../assets/img/carousal/Slide1.jpg'; // slider foto 2
import Slide3 from '../../assets/img/carousal/slide3.webp'; // slider foto 3
import ScrollDown from '../scroll-down/scroll-down.component';
import './slider.style.css';




const Slider = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={Slide1}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={Slide2}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={Slide3}
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
<ScrollDown />
        </div>
    )
}


export default Slider;