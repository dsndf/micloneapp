import React from 'react'
import './HotCompo.css';
const HotCompo = ({image,price,name}) => {
  return (<div className='item'><img src={image} alt="" />
         <h6>{name}</h6>
          <h6>{price}</h6>
          
      </div>
      
    
  )
}

export default HotCompo
