import React from 'react'
import { useState } from 'react'

const img = '/img/lame.png'

function Rationale() {

const [open, setOpen] = useState('false')

  return (
    <div className='animation'>
    <div className='iteration-header' onClick={()=>setOpen(!open)}>Rationale</div>
    {open?<div className='text-block'>
    I was approached by this client, looking for someone with knowlage of UX/UI and Graphic Design. Specifically, the owner of the store was interested in converting the existing customer experience within the store to a website. To narrow down desisions design the interface, Cultural Probing will be used to create the overall architecture of the site, and to find a level of balance between ‘Dark Patterns’ and ‘Angel Patterns’.
<br/><br/>The definition of a ‘dark pattern’ is a manipulative design that serves the purpose of turning over a profit. This is typically found in designs that trick you into signing up into undesirable outcomes. On the otherhand an ‘angel pattern’ is a design that puristically enables trustworthiness.
<br/><br/>In order to find a balance between these 2 forces,
The vendriagram visualises this aproach, my project aiming to balance within these 2 forces. To achieve this, quantitive research will be done through a likert scale composed from either 1: exceptional user experience, to 7: unequitable manipulative design.
I hypothesise that different components will have corresponding scores from person to person, giving the project an insightful array of data to work around.
    <br/><br/><br/><br/><img src={img} className='small-image'></img><br/><br/></div>:null}
    </div>
  )
}

export default Rationale