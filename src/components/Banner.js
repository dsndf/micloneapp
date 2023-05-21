import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
const Banner = ({ banner }) => {
  return (
    <Carousel  fade>
      {banner.end.map((v,ind) => {
        return (
          <Carousel.Item  key ={ind} >
            <img src={v.image} alt={v.image}
            className="d-block w-100"
             id="bannerImage"            
            />


            <Carousel.Caption>
<h3>{v.name}</h3>
<p>{v.description}</p>
<p>{v.source}</p>
<p
style={{
textDecoration:"underline",
cursor:"pointer"


}}
>Read more</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Banner;
