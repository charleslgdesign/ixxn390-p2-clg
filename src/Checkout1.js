import React from 'react'
import { useState } from 'react'


const img1 = '/img/checkout-development-1.png'

 function Checkout1() {

    const [open,setOpen] = useState(false)
    


  return (

    <>

<div className='iteration-header' onClick={()=>setOpen(!open)}>Iteration 1</div>

    {open?<div className='animation'>

    
    <div className='text-block'>Stakeholders reported that the interface needed to stand out more.
    They were also worried that there wasn't enough space in the boxes for bigger orders than just <b>3 items.</b> <br/><br/></div>
    
    
    <div className='checkout-grid'>

      

    <div className='checkout-item'>
    <div className='checkout-text'>
      <h2>Items:</h2>
    1 x Shampoo
    <br/>
    1 x Conditioner
    <br/>
    1 x Hairspray
    <br/>
    <br/>
    </div>
    </div>
    <div className='checkout-item'>
      <div className='checkout-text'><h2>Total:</h2>
  
      $20
      <br/>
      $30
      <br/>
      $15
      </div>
    </div></div></div>:null}
    
    </>
  )
}

export default Checkout1