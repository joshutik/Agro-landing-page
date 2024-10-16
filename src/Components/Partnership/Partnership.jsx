import React from 'react'
import partner1 from '../Assets/partner-01-1.webp.png'
import partner2 from '../Assets/partner-02-1.webp.png'
import partner3 from '../Assets/partner-03-1.webp.png'
import partner4 from '../Assets/partner-04-1.webp.png'
import partner5 from '../Assets/partner-05-1.webp.png'
import './Partnership.css'

const Partnership = () => {
  return (
    <div className='partner'>
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
        <img src={partner5} alt="" />
      
    </div>
  )
}

export default Partnership
