import React from 'react'
import { useState } from 'react'

export default function Home3() {
    const [open, setOpen] = useState(false)

    return (
  <>
      <div className='iteration-header' onClick={()=>setOpen(!open)}>Iteration 3</div>
      {open?<div className='animation'>
      <div className='text-block'>
      In this last design, I created a more balanced contrast throughout the page. 
      I decided that there needed to be more negative space which is why I changed the link bar to be more <b>vertically dominant</b>. I also made the interaction more of a <b>delighter</b>. These are not for the purpose of functionality in UI/UX design, however they improve the user's mood and impression on the brand before moving into the website.
      <br/><br/></div>
        <div className='landing-container'>
      <div className='home-block-3'>the salon club</div>
      <ul>
    <li className='home-3'> <a className='home-link-3'>home</a><br/>
   <a className='home-link-3'>products</a><br/>
   <a className='home-link-3'>about us</a><br/>
   <a className='home-link-3'>contact</a><br/>

    </li>
</ul></div>
 </div>:null}
      
      
    </>
    
    
  )

    }