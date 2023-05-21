import React from "react";
import './NavCard.css'

const NavCard = ({image,name,price}) => {
  return (
    <div className="navcard">
      <img src={image} alt="" />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default NavCard; 
