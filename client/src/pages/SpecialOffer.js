import React from 'react'
import '../styles/Agada.css'
import img1 from '../img/beans-img1.jpg'
import img2 from '../img/beans-img3.jpg'
import img3 from '../img/beans-img6.jpg'

function SpecialOffer () {
  return (
    <div className='Containerwe'>
        <h1>SPECIAL OFFER</h1>
      <div className='Special-Cards'>
        <div className='Card-1'>
          <div>
            <img className='img-special'
            src={img1} alt='Beans-delicacy'/> 
          </div>
          <h3>This Is Our Two Weeks Special Offer</h3>
          <p>As our Customer we bring you this wanderful package which gives you the liberty to 15% discount.</p>
          <div>
          <button className='Btn-Pack'>Add Package</button>
          </div>
        </div>

        <div className='Card-2'>
          <div>
            <img className='img-special'
            src={img2} alt='Beans-delicacy' />
          </div>
          <h3>Here Is A One Month Special Package</h3>
          <p>With one month package you are giving the opportunity to 18% on order</p>
          <div>
            <button className='Btn-Pack'>Add Package</button>
          </div>
        </div>

        <div className='Card-2'>
          <div>
            <img className='img-special'
            src={img3}  alt='Beans-delicacy' />
          </div>
          <h3>Here Is A Party Package</h3>
          <p>With this offer you will get a bonus of 8.5% on order place, 
            However depending on the quantity in kilogram "Kg".</p>
          <div>
            <button className='Btn-Pack'>Add Package</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SpecialOffer;