import React from 'react'
import { useState } from 'react'

export default function Home1() {
    const [open, setOpen] = useState(false)

    return (
  <>
      <div className='iteration-header' onClick={()=>setOpen(!open)}>Iteration 1</div>
      {open?<div className='animation'>
      <div className='text-block'>
        The response I gained from this design was that the links had a bad user experience when selecting them. 
        From looking a precedent designs, I found that a common standard in UI design is a cursor pointer when selecting links. 
        Also the top banner was percieved as looking too disconnected from the other components and it takes away from the neccassary heirachy that of the links.<br/><br/></div>
        <div className='landing-container'>
      <div className='home-block'>the salon club</div>
      <ul>
    <li> <a>home</a>
   <a>products</a>
   <a>about us</a>
   <a>contact</a>

    </li>
</ul></div>
 </div>:null}
      
      
    </>
    
    
  )
}
