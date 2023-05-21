import React from 'react'
import { Link } from 'react-router-dom'
import './HotAccessoriesMenu.css'
const HotAccessoriesMenu = () => {
  return (
    <div className='Hotacc'>
      <Link to="/music">Music Store</Link>
      <Link to="/smartdevice">Smart Device</Link>
      <Link to="/home">Home</Link>
      <Link to="/lifestyle">Lifestyle</Link>
      <Link to="mobileaccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu
