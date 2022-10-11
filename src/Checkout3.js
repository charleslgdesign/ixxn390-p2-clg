import React from 'react'
import { useState } from 'react'

 function Checkout3() {

    const [open,setOpen] = useState(false)

  return (

    <>

<div className='iteration-header' onClick={()=>setOpen(!open)}>Iteration 3</div>

    {open?<div className='animation'>
      
      <div className='text-block'>
        In this final version, the design I created satisified the needs of the client. I implemented a simple hover animation
        <br/><br/></div>
      
      <div className='checkout-grid'>

    <div className='checkout-item-3'>
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
    <div className='checkout-item-3'>
      <div className='checkout-text'><h2 >Total:</h2>
  
      $20
      <br/>
      $30
      <br/>
      $15
      <br/>
      <br/>
      <b>$65</b>


      </div>
    </div></div></div>:null}
    
    </>
  )
}

export default Checkout3