import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
 import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({ arr }) => {
  return (
    <Carousel fade>
      {
        arr.map((v, index) => {
          return <Carousel.Item key={index} >
            <img
              className="d-block w-100"
              src={v}
              alt="Third slide"
            />

          </Carousel.Item>
        })
      }


    </Carousel>
  )




}

export default Slider;
