import React from 'react'

const Offers = ({ offer_arr }) => {
    return (
        <div className='offers'>

            {
                offer_arr.map((v,ind) => {
                    return <div className='offer' key={ind}>

                       <a href={v.url}>  <img src={v.image} alt="" /> </a>

                    </div>

                })

            }

        </div>
    )
}

export default Offers;
