import React, { Fragment } from 'react'
import './Others.css'
import toilet from '../images/toilete.webp'
import seat from '../images/seat.webp'
import brush from '../images/brush.webp'




function Others() {
  return (
    <Fragment>
    <div className='Others_heading'>
      <h3>Others to select from</h3>
  

      <div className="Others__container">
          {/* <p>Spirit of Servince</p>

          <p>How to take care of the Toilet</p>
          <p>Power Usage and Consumption</p>
          <p>Donation</p>
          <p>List of material Assignment</p>
          <p>Announcement and News</p>
          <p>Straight A club</p> */}

              <h3 className='Restroom_Text'>Using the Restroom </h3>
      
            <div className='main'>
              <div className='pics'>
                <img src={toilet} alt='somepics' className='toilet_image'/>
                <img src={seat} className='toilet_image' alt='someimage' />
                <img src={brush} className='toilet_image' alt='someimage' />
              </div>
              <div>
                <p>The Toilet by the Study room is meant for visitors and members of the Study room. A rule thumb is that the toilet is clean only when you can eat comfortably in it. For that reason, it is imperative to ensure that it is clean. If you come to make use of the toilet, the objective is to leave it better than you met it. What does this entail? It means that you will have to ensure that the bowl is clean, the seat is clean, and the floor is clean. A piece of tissue paper can be used to clean the seats and the bowl or in some cases the brush can be applied.</p>
                <p>We have the bucket underneath the handwash basin. You can get water from the tap underneath the basing to flush hard </p>
                <ul>
                  <li>Always close the door behind you when entering the restroom to maintain privacy and respect for others.</li>
                  <li>Stand close to the toilet seat to avoid dripping</li>
                  <li>Always flush the toilet after use.</li>
                  <li>Clean floor with mob</li>
                  <li>Clean toilet seat and bowl with tissue paper</li>
                  <li>Ensure to leave the bowl bright and clean better than you met it.</li>
                </ul>
              </div>
            </div>


            <div>
              <h2>Power Usage and Consumption</h2>
              <p>We try to provide power to the house from two and in some cases three sources. There is an Inverter for backup and the power from the grid. Power has become very expensive, hence it is everybody's responsibility to manage consumpton. When you become a member of the study room, you have also become a caretaker and responsible for the running of the house. It is everyone's duty to remind others about the need to take care of consumption. Unplugging the laptop when already full is a good action. It is also important to know that bring powerbanks to charge with the inverter when there is a national blackout is not fair. It consumes the backup battery and makes it difficult for the residents of Akoka to make use of electrci power when they get back home from their various work places. Be conscious of this.</p>
            </div>
      </div>
      
    </div>
    </Fragment>
  )
}

export default Others
