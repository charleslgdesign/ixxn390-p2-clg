import React from 'react'
import GridItem3 from './GridItem3.js'
import { useState } from 'react'

export default function Grid2() {

  const [open, setOpen] = useState(false)

  return (
<>
    <div className='iteration-header' onClick={()=>setOpen(!open)}>Iteration 3</div>

    

    {open?<div className='animation'><div className='grid-container'>
      
    <div className='grid-container'>
      <div className='text-block'>
         
         <br/><br/>
         This final iteration is balanced between the first 2, with some extra touches. For example, the product label has been destructured away from the image. 
         To further improve the accessability I added alt text to all the items. I also created a more improved interaction that is quite subtle, instead of overpowering in the last design. 
       </div> 
      <div className='grid-3'>  

      <GridItem3/>
      <GridItem3/>
      <GridItem3/>
      <GridItem3/>
      <GridItem3/>
      <GridItem3/>
      <GridItem3/>
      <GridItem3/>
  
     

   
      </div></div></div></div>:null}
    </>
  )
}