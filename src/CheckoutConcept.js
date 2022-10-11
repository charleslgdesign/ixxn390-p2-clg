import React from 'react'

const img = '/img/checkout-sketch.png'

function CheckoutConcept() {
  return (
    <div className='concept-block'><div className='text-block'>
      This sketch shows the mapping out of the checkout grid. I split these into 2 main components, <b>'items'</b> and <b>'price'</b> (total). 
      Keeping these seperate allows for the boxes to have a distinctive size to match the sizes of the content inside. <br/><br/><br/></div>
    <img className='sketch' src={img} ></img></div>
  )
}

export default CheckoutConcept