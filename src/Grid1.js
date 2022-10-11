import React from 'react'
import GridItem from './GridItem'
import { useState } from 'react'
function Grid1() {

  const [open, setOpen] = useState(false)


  return (
<>

    <div className='iteration-header' onClick={()=>setOpen(!open)}>Iteration 1</div>
    
    
    {open?<div className='animation'>
      <div className='text-block'>
         
    <br/><br/>
    Firsty, the stakeholders were happy with the sizing of this layout however they asked for more space in the bottom of each grid item. This can be seen by some of the larger images. 
    Secondly, the interaction was too subtle for them. Lastly, they were interested in seeing product names and other information on the grid.
    <br/><br/>Considering these 3 points, I created the next iteration. 
      <br/><br/></div>

    <div className='grid-container'><div className='grid'>  

      <GridItem/>
      <GridItem/>
      <GridItem/>
      <GridItem/>
      <GridItem/>
      <GridItem/>
      <GridItem/>
      <GridItem/>
     
  
   

   
    </div></div></div>:null}
    
  
    </>
   
    
    
  )

}

export default Grid1

