import React from 'react'
import classes from './Assessment.module.css'
import { Link } from 'react-router-dom'

export default function Assessment() {
  return (
    <div className={classes.container}>
      <h1>
      Please take your initial Assessment
      </h1>
      <h3>Without this Assessment you will not be called for the interview and your desire to be part of Akoka Study Centre will be discontinued</h3>

      <Link to="https://forms.gle/Z1WBhKzUjNBMxH9u9" className={classes.assessmentLink}>
        <p>Click here to take your initial Assessment</p>
      </Link>


    </div>
  )
}
