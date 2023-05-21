import React from 'react'
import { Link } from 'react-router-dom'
import data from "../data/data.json";
import simg from '../search.png'
const Navbar = () => {
  return (<>
    <div className="menu">
      <div className='outerlogo'>
       <a href="/"><img className='logo' src={data.logo} alt="" /></a> 
      </div>
  <a href="/miPhones">Mi Phones</a>
  <a href="/redmiPhones">Redmi Phones</a>
  <a href="/tv">TV</a>
  <a href="/laptops">Laptops</a>
  <a href="/fitness&lifestyle">Fitness & Lifestyles</a>
  <a href="/home">Home</a>
  <a href="/audio">Radio</a>
  <a href="/accessories">Accessories</a>

      <div className='search_container'>
        <input type="text" className='search'  placeholder='Search Products'/>
        <img src={simg} className="simg" alt="" /></div>

    </div>


  </>

  )
}

export default Navbar;