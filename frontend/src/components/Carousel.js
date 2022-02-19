import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Carousel.css';

const Carous = () => {
    return (
<Carousel className='mainContainer'>
  <Carousel.Item className='imageStyle'>
    <img
      className="d-block w-100"
      src="./images/blueredwaves.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Bespoke Coasters</h3>
      <p>Choose any colour.</p>
      <Button href='#' variant="light" active>See selection of Coasters</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='imageStyle'>
    <img
      className="d-block w-100"
      src="./images/redcoasters.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button href='#' variant="light" active>See selection of Coasters</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='imageStyle'>
    <img
      className="d-block w-100"
      src="./images/blueabstract.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <Button href='#' variant="light" active>See selection of Coasters</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>)
}

export default Carous