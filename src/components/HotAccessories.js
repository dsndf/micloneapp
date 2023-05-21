import React from 'react'
import HotCompo from './HotCompo'
import './HotAccessories.css'
const HotAccessories = ({ music, smartDevice, lifeStyle, Home, Mobile, cover }) => {
    return (
        <div className='HotAccessories'>

            <a href="/"><img src={cover} alt="" /></a>

            <div className='c2'>
                
                {

                (music && music.map((val, ind) => {
                    return <HotCompo key={ind} image={val.image} price={val.price} name={val.name} ></HotCompo>

                }))

            }
                {

                (smartDevice && smartDevice.map((val, ind) => {
                    return <HotCompo key={ind} image={val.image} price={val.price} name={val.name} ></HotCompo>

                }))

            }
                {

                (Mobile && Mobile.map((val, ind) => {
                    return <HotCompo key={ind} image={val.image} price={val.price} name={val.name} ></HotCompo>

                }))

            }
                {

                (lifeStyle && lifeStyle.map((val, ind) => {
                    return <HotCompo key={ind} image={val.image} price={val.price} name={val.name} ></HotCompo>

                }))

            }
                {

                (Home && Home.map((val, ind) => {
                    return <HotCompo key={ind} image={val.image} price={val.price} name={val.name} ></HotCompo>

                }))

            }
            <HotCompo image='https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg'></HotCompo>

            </div></div>

    )
}

export default HotAccessories
