import React from 'react'
import { useState } from 'react'

function Brief() {

const [open, setOpen] = useState('false')

  return (
    <div className='animation'>
    <div className='iteration-header' onClick={()=>setOpen(!open)}>Brief</div>
    {open?<div className='text-block'>
    <b>Overview:</b><br/>
    ‘The Salon Club’ is a small buissness located in wellington. The owner is looking to expand the company into the digital e-cormerce world. The projects need include 3 seperate pages that cater to the clients design needs. An ambigious requirement stated by The Salon Club is for the website to be ‘account free’. This means that if a customer was making a purchase, they wouldn’t need to sign up to the website. The reason for this is to improve CTA’s, with clients being able to complete orders in less clicks, and less time. The stores biggest advantage over competitors is their prices, with a significant clientbase being hairdressor/salon owners who want to resell these products.
    <br/><br/><b>Scope:</b><br/>
    The scope of the project includes designing 3 pages for the website. 
    - landing page - product page - checkout.
    <br/><br/><b>Research</b><br/>
    I will conduct research on the neccasary aspects of the project. These are Information Architecture, Mental Models, & Onboarding. From a top down evaluation, I concluded that these were the most neccasary to ensuring a successful project. This is mostly because of external factors such as the audiences age range and what social media/websites apeal to them the most. Because of the older demographic of customers that the store attracts, onboarding will be further emphasised to help more mature clients.
    <br/><br/>
    <b>Audience/Clients:</b>
    <br/>
    The primary target audience of this website consits of 20-50 year old women. This age range is skewed towards the older end of the scale since the store is located out of the city which has an older demographic. Also, a loyalty system will be allocated towards to bigger clients ordering in bulk such as hairdressors. These customers will need a different interface to regular customers as their knowlage of hair products will be more specific and bulk deals will be prioritised over individual orders.
    <br/><br/></div>:null}
    </div>
  )
}

export default Brief
