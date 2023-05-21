import React, { useEffect, useState } from 'react'
import NavCard from './NavCard';
import './Navoptions.css'

const Navoptions = ({miPhones,redmi,tv,laptop,home,fit,audio,accessories}) => {
  const [miPhoneToogle,setmiPhone] = useState(false);
  const [redmiPhoneToogle,setredmiPhone] = useState(false);
  const [laptopToogle,setlaptop] = useState(false);
  const [homeToogle,sethome] = useState(false);
  const [fitToogle,setfit] = useState(false);
  const [audioToogle,setaudio] = useState(false);
  const [tvToogle,setTv] = useState(false);
  const [accessoriesToogle,setaccessories] = useState(false);
    useEffect(()=>{
        if(window.location.pathname === '/miPhones'){
            setmiPhone(true);
        }
        if(window.location.pathname === '/laptops'){
            setlaptop(true);
        }
        if(window.location.pathname === '/redmiPhones'){
            setredmiPhone(true);
        }
        if(window.location.pathname === '/tv'){
            setTv(true);
        }
        if(window.location.pathname === '/fitness&lifestyle'){
            setfit(true);
        }
        if(window.location.pathname === '/home'){
            sethome(true);
        }
        if(window.location.pathname === '/accessories'){
            setaccessories(true);
        }
        if(window.location.pathname === '/audio'){
            setaudio(true);
        }
    },[])
  return (
    <div className='navopt'>
        {
            miPhoneToogle?miPhones.map((v,index)=>{
                return <NavCard key={index}  image = {v.image} name={v.name} price = {v.price}  />
            }):null

        }
        {
            laptopToogle?laptop.map((v,index)=>{
                return <NavCard key={index}  image = {v.image} name={v.name} price = {v.price}  />
            
            }):null

        }
        {
            tvToogle?tv.map((v,index)=>{
                return <NavCard key={index}  image = {v.image} name={v.name} price = {v.price}  />
              
            }):null

        }
        {
            audioToogle?audio.map((v,index)=>{
                return <NavCard key={index}  image = {v.image} name={v.name} price = {v.price}  />
               
            }):null

        }
        {
            fitToogle?fit.map((v,index)=>{
                return <NavCard key={index}  image = {v.image} name={v.name} price = {v.price}  />
               
            }):null

        }
        {
            accessoriesToogle?accessories.map((v,index)=>{
                return <NavCard key={index}  image = {v.image} name={v.name} price = {v.price}  />
               
            }):null

        }
        {
            homeToogle?home.map((v,index)=>{
                return <NavCard key={index}  image = {v.image} name={v.name} price = {v.price}  />
              
            }):null

        }
        {
            redmiPhoneToogle?redmi.map((v,index)=>{
                return <NavCard key={index}  image = {v.image} name={v.name} price = {v.price}  />
              
            }):null

        }
      
    </div>
  )
}

export default Navoptions
