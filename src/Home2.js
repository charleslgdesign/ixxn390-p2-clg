import React from 'react'
import { useState } from 'react'

export default function Home2() {
    const [open, setOpen] = useState(false)

    return (
  <>
      <div className='iteration-header' onClick={()=>setOpen(!open)}>Iteration 2</div>
      {open?<div className='animation'>
      <div className='text-block'>
      In this second design, participants chose the older design. 
      Because of it's simplicity. They were willing to compromise somewhere between both iterations. 
      They also mentioned that the hovering function in the links needed to be more salient to make the design more accessable. 
      <br/><br/></div>
        <div className='landing-container'>
      <div className='home-block-2'>the salon club</div>
      <ul>
    <li className='home-2'> <a>home</a>
   <a>products</a>
   <a>about us</a>
   <a>contact</a>

    </li>
</ul></div>
 </div>:null}
      
      
    </>
    
    
  )
}