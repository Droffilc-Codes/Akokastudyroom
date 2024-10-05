import React, { Fragment } from 'react'
import './Payment.css';




function Payment() {
  

  return (
    <Fragment>
    <div className='bags'>
      <h3>Registration | Monthly Subscription | Internet Subscription |</h3>
        <h4>Online Payment coming Soon</h4>

      <div className="bag__container">
      <ul>
              <li>Register to be a member of the study room; Regstration Fees: Students pay ₦2,500, Professionals pay ₦15,000</li>

              <h2 className='Heading'>Students</h2>
              <li>Monthly subscription: Students contribute ₦2,500 </li>
              <li>Monthly subscription plus Unlimited Internet Service: Students contribute ₦5,000 </li>

              <h2 className='Heading'>Professionals</h2>
              <li>Monthly subscription plus Unlimited Internet Service: Professionals contribute ₦15,000 </li>

              <h2 className='Heading'>Important Instructions</h2>
              <li>Monthly subscription paid from the 20th of each month will be higer at ₦2,500. You won't pay for the next month. It covers the 10 days of current month and 30 days of the next month  </li>
              <li>Monthly subscription paid from the 20th of each month will be ₦5,000 for Professionals  </li>
              <li>Monthly subscription must be paid within the first 10 days of each month</li>
              <li>Monthly subscription not paid for after 3 months may lead to expulsion and ban by the Management of Akoka Study Centre</li>
              <li>The Internet connection is disconnected every 10th of the month if contribution has not been made</li>
      </ul>

      </div>


    </div>

   

    </Fragment>
  )
}

export default Payment
