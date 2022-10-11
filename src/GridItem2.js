import React from 'react'

const img0 = '/img/fudge-conditioner-clean-blonde-violet-toning.png'
const img1 = '/img/fudge-conditioner-cool-brunette-blue-toning.png'
const img2 = '/img/fudge-conditioner-damage-rewind-reconstructing.png'
const img3 = '/img/fudge-conditioner-luminizer.png'
const img4 = '/img/fudge-conditioner-violet-toning-clean-blonde-damage-rewind.png'
const img5 = '/img/fudge-finish-hed-shine.png'
const img6 = '/img/fudge-finish-push-it-up-slow-dry-big-hair.png'
const img7 = '/img/fudge-shampoo-clean-blonde.png'
const img8 = '/img/joico-conditioner-blonde-life-brightening.png'

const imgArray = [img0,img1,img2,img3,img4,img5,img6,img7,img8]




function GridItem2() {


  const randomNumber = imgArray[Math.floor(Math.random()*imgArray.length)]

  



  return (
<div className='yo'>
    <div className='grid-item-2'>



    <img className='product-image-2' src={randomNumber}/>
    <div className='label'>product<br/><br/>$20<br/></div>
    </div>
  </div>
  )
}

export default GridItem2