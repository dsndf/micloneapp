import React from 'react'
import './StarProducts.css';
const StarProducts = ({stararr}) => {
  return (
    <div className='outercont'>
      <div className="cont1">
       <a href={stararr[0].url}>  <img src={stararr[0].image} alt="" /></a>  
      </div>
<div className="cont2">
  <a href={stararr[1].url}><img src={stararr[1].image} alt="" /></a>
  <a href={stararr[2].url}><img src={stararr[2].image} alt="" /></a>
  <a href={stararr[3].url}><img src={stararr[3].image} alt="" /></a>

</div>

    </div>
  )
}

export default StarProducts
