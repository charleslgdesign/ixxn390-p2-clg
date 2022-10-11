import React from 'react'

import Research from './Research.js'
import Brief from './Brief.js'
import Rationale from './Rationale.js'

import GridConcept from './GridConcept.js'
import Grid1 from './Grid1.js'
import Grid2 from './Grid2.js'
import Grid3 from './Grid3.js'

import CheckoutConcept from './CheckoutConcept.js'
import Checkout1 from './Checkout1.js'
import Checkout2 from './Checkout2.js'
import Checkout3 from './Checkout3.js'

import HomeConcept from './HomeConcept.js'
import Home1 from './Home1.js'
import Home2 from './Home2.js'
import Home3 from './Home3.js'

import JourneyMap from './JourneyMap.js'

import HomeFinal from './HomeFinal.js'

import { useState } from 'react'

function ConceptDevelopment() {

const [showGrid,setShowGrid] = useState(false)
const [showCheckout,setShowCheckout] = useState(false)
const [showHome,setShowHome] = useState(false)
const [showResearch, setShowResearch] = useState(false)
const [showPrototype, setShowPrototype] = useState(false)
const [showJourney, setShowJourney] = useState(false)

 return (
  <div className='animation'><div className='main-container'>

  <div className='text-block'>Kia Ora. <br/><br/>
  My Name is Charlie Lynch-Gerrard. I'm a design and psychology student at <b>Te Herenga Waka</b>. 
  <br/><br/>
  This is my documentation of a conceptual UI based design for an online hair products store.<br/><br/>
  Before approaching the prototype, the core external needs from the client needed to be considered. Therefore, research was done into information architecture, design ethics, and accessability. 
  <br/><br/>
 
  
  The initial part of this project was design research. Bringing in presedent designs from similar clients was important.
  These included 'Amazon', 'Facebook', and 'instagram'. 
  <br/><br/>
  More specifically, the interface was designed with dark and angel patterns in mind. Keeping a critical view on both of these states of thinking.<br/><br/>

  <div className='big-text'>“A user interface that has been carefully crafted to trick users into doing things..they are not mistakes, they are carefully crafted with a solid understanding of human psychology, and they do not have the user’s interests in mind.”
</div>
<br/>

  In this project the core focus was to create the most accessable UI through iterations in rounds of 3. These were focused on 3 main components of the site: <b>product grid</b>, <b>checkout</b>, and <b>landing page</b>. 
  These were created as <b>React Components</b>, meaning that they are reusable for my final prototype. This stage will soley focused on patching these components together, considering mostly information architecture.
  <br/><br/>
  </div>
    <div className='animation'><div className='body'>
      
    <div onClick={()=>setShowResearch(!showResearch)} className='header'><b>Research</b><br/></div> 
    {/* {showResearch?<div className='animation'><Research/></div>:null} */}
    {showResearch?<div className='animation'><Brief/></div>:null} 
    {showResearch?<div className='animation'><Rationale/></div>:null} 

    <div onClick={()=>setShowHome(!showHome)} className='header'><b>Landing Page</b><br/></div> 
    {showHome?<div className='animation'><HomeConcept/></div>:null}
    {showHome?<div className='animation'><Home1/></div>:null}
    {showHome?<div className='animation'><Home2/></div>:null}
    {showHome?<div className='animation'><Home3/></div>:null}
      
    <div onClick={()=>setShowGrid(!showGrid)} className='header'><b>Product Grid</b><br/></div> 
    {showGrid?<div className='animation'><GridConcept/></div>:null}
    {showGrid?<div className='animation'><Grid1/></div>:null}
    {showGrid?<div className='animation'><Grid2/></div>:null}
    {showGrid?<div className='animation'><Grid3/></div>:null}

    <div onClick={()=>setShowCheckout(!showCheckout)} className='header'><b>Checkout</b><br/></div> 
    {showCheckout?<div className='animation'><CheckoutConcept/></div>:null}
    {showCheckout?<div className='animation'><Checkout1/></div>:null}
    {showCheckout?<div className='animation'><Checkout2/></div>:null}
    {showCheckout?<div className='animation'><Checkout3/></div>:null}

    <div onClick={()=>setShowJourney(!showJourney)} className='header'><b>Journey Map</b><br/></div>
    {showJourney?<div className='animation'><JourneyMap/></div>:null}

    <div onClick={()=>setShowPrototype(!showPrototype)} className='header'><b>Prototype</b><br/></div>
    {showPrototype?<div className='animation'><HomeFinal/></div>:null}


    </div>
    </div>
    </div>
    </div>
  )
}

export default ConceptDevelopment


