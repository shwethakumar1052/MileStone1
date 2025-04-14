import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/ice1.jpg';
import img2 from '../assets/ice2.jpg';
import img3 from '../assets/ice3.jpg';
import './CarouselHero.css';


const CarouselHero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHero;

