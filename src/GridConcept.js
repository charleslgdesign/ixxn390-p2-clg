import React from 'react'

const img1 = '/img/grid-development-2.png'
const img2 = '/img/amazon-screenshot.png'
const img3 = '/img/grid-development-3.png'
const img4 = '/img/screen-query-sketch.png'




function GridConcept() {
  return (
    <div><div className='text-block'>In my wireframing for the grid, I found that the ideal amount of products on the page needed a ratio of roughly <b>2:3.</b>
    <br/>
    <br/><img className='small-image' src={img2}/><br/><br/>This is because when I looked at similar outputs such as Amazon's grid, there is use of the golden ratio of thirds in the design. However, there is definitely a maticulously cluttered feeling of the layout that could be attributed to a dark pattern.<br/><br/>
    This was interesting to me since I assumed the <b>Golden Ratio</b> was only useful for aesthetics, however it's very relevant to <b>balance</b> when designing UI. 
    <br/>
    <br/>
    In order to make the website simple and cohesive I planned out 3 layouts that the screen snaps to, depending on the screen size. 

When planning this out I first found the 3 most common dimensions for mobile, tablet, and desktop. 

<br/><br/>

When I looked into responsive design. There was a research gap into the optimal way to design a layout with only 3 options. In order to get a range for each screen size query I did brief research into the minimum and maximum dimensions for each medium. 
    <br/>
    <br/> 
    
    </div><img className='sketch' src={img1}/>
    <img className='sketch' src={img3}/>
      <div className='text-block' >The use of 2:3 ratio was applied to 3 main settings of the grid. These were <b>Mobile</b>, <b>Tablet</b> , and <b>Desktop.</b> This constitutes the following column setting: 1 item in Mobile, 3 in Tablet, and lastly 4 in Desktop.  <br/><br/>
      In my initial research, I devised a set of grid meassurements that would help keep the different grid setting to run at the best possible performance. These were merely a guide, that were re adjusted when it came to practically applying them in react. I created the first dimensions by colating multiple averages for screen sizes. 
      Through this process, I found the most <b>normal (average)</b> screen sizes that I based my grid designs around. These were: 
      <br/><br/>
      <b>Mobile:</b>
      <br/>min width = 320
      <br/>average width = 384
      <br/>max width = 480

      <br/>min height = 570
      <br/>average height = 821
      <br/>max height = 1080
      <br/><br/>
      <b>Tablet:</b>
      <br/>min width = 480 
      <br/>average width = 745
      <br/>max width = 767
      <br/>min height = 600
      <br/>average height = 821
      <br/>max height = 1280
      <br/><br/>
      <b>Desktop:</b>
      <br/>min width = 1280
      <br/>average width = 1645
      <br/>max width = 1645
      <br/>min height = 720
      <br/>average height = 964
      <br/>max height = 964
      <br/>
      <br/>
      This is shown in the following diagram below. 
      <br/>
      <br/>




      <img className='sketch' src={img4}/><br/><br/></div></div>
  )
}

export default GridConcept