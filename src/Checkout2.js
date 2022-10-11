import React from 'react'
import { useState } from 'react'

 function Checkout2() {

    const [open,setOpen] = useState(false)

  return (

    <>

<div className='iteration-header' onClick={()=>setOpen(!open)}>Iteration 2</div>

    {open?<div className='animation'>
    <div className='text-block'>Stakeholders reported that the interface needed to stand out more.
    The next iteration shows an improvement in the clarity of the information. The feedback I recieved was that there needed to be more interactive and there needs to be a row that calculates the <b>total price</b>.<br/><br/></div>
      
      <div className='checkout-grid'>

    

    <div className='checkout-item-2'>
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
    <div className='checkout-item-2'>
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

export default Checkout2
