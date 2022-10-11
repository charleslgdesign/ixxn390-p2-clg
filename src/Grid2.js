import React from 'react'
import GridItem2 from './GridItem2'
import { useState } from 'react'

export default function Grid2() {

  const [open, setOpen] = useState(false)

  return (
<>
    <div className='iteration-header' onClick={()=>setOpen(!open)}>Iteration 2</div>

    {open?<div className='animation'>
      <div className='grid-container'>
      <div className='text-block'>
         
         <br/><br/>
         In this iteration, the stakeholders were concerned about the animations eliciting an experience that is <b>"too intense"</b>. 
         They also mentioned there was a lack of <b>Hierachy</b> in the label design. 
       
           <br/><br/></div>
        <div className='grid-2'>  

  
      <GridItem2/>
      <GridItem2/>
      <GridItem2/>
      <GridItem2/>
      <GridItem2/>
      <GridItem2/>
      <GridItem2/>
      <GridItem2/>

   
      </div></div></div>:null}
    </>
  )
}
