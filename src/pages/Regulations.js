import React, { Fragment } from 'react'
import './Shoes.css'
import { Link } from 'react-router-dom'





function Regulations() {
  return (
    <Fragment>
    <div className='shoes'>
      <h3>Rules and Regulations:</h3>

        <div className="shoes__container">
            <ul>
              <li>Register to be a member of the study room; </li>

              <li> <Link to="/Payment">Click here to See more details about Registration and Payment instructions</Link> </li>

              <li>Phones should be put in vibration/switched off </li>
              <li>No phone calls in the library </li>
              <li>Talking is prohibited </li>
              <li>Music or other multimedia playing are not allowed </li>
              <li>Eating and drinking is not allowed </li>
              <li>Books should not be left on the table after studying</li>
              <li>Air conditions should be switched off after power outage.</li>
              <li>Put off fans and lights if you are the last person to leave </li>
              <li>Newspapers and magazines should not be read in the library. </li>
              <li>Please ensure that the rest room is clean even after use. </li>
              <li> A minimum decorum is expected in dressing: wearing sleeveless vest, shorts, and bathroom slippers to library is not allowed.</li>
              <li>Removal of clothing or shoes is not allowed as in most cases it releases an odor unpleasant to other users in the environment. </li>
              <li>Avoid touching the walls and curtains or library chairs with soiled hand </li>
              <li>Do not rest your legs on other chairs or on the bars holding the table so that they can last longer</li>
              <li>If found watching movies in the study room consistently, user's membership will be suspended </li>
              <li>Please sign in and sign out daily with the book at the entrance of the study room </li>
              <li>Once it is 7pm ensure that the gate of the study room is pulled down and locked. The entrance door should be locked as well for safety reasons. </li>
              <li>The centre opens at 10am and closes at 9 pm daily. Weekends: Opens at 9 am and closes at 9 pm.</li>
            </ul>
        </div> 
    </div>

    </Fragment>
  )
}

export default Regulations
