import React, { Fragment } from 'react'
import './Others.css'
import toilet from '../images/toilete.webp'




function Others() {
  return (
    <Fragment>
    <div className='clothes'>
      <h3>Others to select from</h3>
  

      <div className="clothes__container">
          {/* <p>Spirit of Servince</p>

          <p>How to take care of the Toilet</p>
          <p>Power Usage and Consumption</p>
          <p>Donation</p>
          <p>List of material Assignment</p>
          <p>Announcement and News</p>
          <p>Straight A club</p> */}
        
        <div>
            <h3>How to take care of the Toilet</h3>
            <div className='Toilet'>
              <img src={toilet} className='toilet_image' alt='restroom'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde voluptatem, optio soluta quae tenetur adipisci. Nostrum nam inventore recusandae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae doloribus quod vitae quia enim odio consectetur deleniti non temporibus necessitatibus. Ratione nesciunt dolore quod facilis ut, dolores iusto consectetur neque magnam quisquam ipsum harum at, ducimus aut numquam eaque cumque voluptatem sint! Doloremque nam excepturi expedita nobis nisi aperiam labore?</p>
            </div>
        </div>

      </div>
      
    </div>
    </Fragment>
  )
}

export default Others
