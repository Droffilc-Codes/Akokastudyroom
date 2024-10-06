import React from 'react'
import classes from './Products.module.css'
import { Link } from 'react-router-dom'


function Welcome() {
 
  
 

    
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <h2 className={classes.header__title}>
          Welcome to Akoka Study Centre Orientation Page
        </h2>
        <h3 className={classes.header__subtitle}>
          What is Akoka Study Centre?
        </h3>
        <p>
        Akoka Study Centre is an edutcational centre complementing the academic,
        cultural, social as well as moral formation students receive from the
        university. The centre which is five minutes walk from the University of Lagos,
        was set up in a temporary site in 1992 by the Educational Cooperation Society,
        an entirely indigenious educational trust.
        </p>
        <h3 className={classes.header__subtitle}>
          Character Formation at  Akoka Study Centre
        </h3>
        <p>
        In order to make sure that the students who pass through Akoka are
        equipped with the adequate moral and character formation to enable them
        face the challenges of the wide world, many practical talks on human and
        spiritual development, along with seminars on Christian faith are offered to
        those who wish to attend. These activities are entrusted to the Prelature of
        Opus Dei, an institution of the Roman Catholic Church. Opus Dei promotes
        the living of Christian ideals in one's work and other daily occupations. The
        resident chaplain, a priest of opus Dei, is available for spiritual guidance.
        The Centre's chapel provides a quiet place for prayer and reflection. Akoka
        is open to people of all racial, ethnic and religious background.
        </p>
        <h3 className={classes.header__subtitle}>
         The Aims of Akoka Study Centre
        </h3>
        <p>
        Akoka has succeeded in creating an environment that helps University
        students take full advantage of their university education by equipping
        them to serve the society with their creativity and energy, inspired by
        human and Christian ideals. To achieve this, Akoka counts on the following:
        Study Room, Friendly Atmosphere, Professional Get-togethers, Social
        Service, Extracurricular activities and various means of Character
        Formation.
        </p>
        <h3 className={classes.header__subtitle}>
          What is the goal of Akoka Study Centre?
        </h3>
        <p>
        Students committed to high performance
        and excellence will find the set up and
        support they require to realize their
        ambitions. The quiet study room with the
        essential books of most discipline, the
        atmosphere of serious and intense work
        and the engaging intellectual environment
        are Important elements in the centre. Academic excellence is fostered at
        Akoka, thus preparing students for their future role in the society. Tutoring
        and mentoring by older colleagues inspire and motivate the younger ones.
        </p>
        <h3 className={classes.header__subtitle}>
          Extracurricular Activities
        </h3>
        <p>
        As an important complement to academic
        life, many cultural and other extra-curricular
        activities are organized by the centre to help
        the students make good use of their leisure
        time. These include: excursions, workshops,
        tournaments and cultural trips to other
        cities.
        </p>
        <h3 className={classes.header__subtitle}>
          Social Service
        </h3>
        <p>
        University students face an increasingly demanding society where to be
        truly successful, more than academic excellence is needed, that is why
        Akoka offers the students the leadership and social service opportunities.
        Akoka engages periodically in work camps which aims at helping the
        students give part of their time in helping the underprivileged
        </p>
        <h3 className={classes.header__subtitle}>
            Akoka Professional Series
        </h3>
        <p>
        Personalities from different spheres of life are regularly invited to
        the centre to speak about different topics ranging from their
        profession, experience in life, career path or certain topical issues
        that can enrich the students' experience. Through formal and
        informal gatherings in small groups, these personalities convey
        Professional Get-togethers
        their knowledge and
        opinions and are always
        ready to address the
        concerns and answer any
        questions which those
        attending may have.
        These activities serve as
        an invaluable aid to
        students in their efforts to
        Intellectual and professional training with the development of their
        character and ideas.
        </p>
        <h3 className={classes.header__subtitle}>
          The Study Room
        </h3>
        <p>
        Akoka Study Centre offers a unique opportunity to improve the academic performance of students in the university. Our study room offers an atmosphere that encourages and improves your study. The study room opens from 10am on weekdays and 9 am on weekends. There are books from different fields -Engineering, English, Law, Business, Education, Mathematics, Medicine and many more - available for use by registered users. 
        We also encourage you to donate textbooks at the end of your program as a way of giving back. Thank You. 
        
        Register for the study room here.

        </p>

        <p>Please Read the Rules and Regulations of the Study Room by clicking  
          <span className={classes.header_link}>
            <Link to="/regulations">  here</Link>
          </span>
          </p>

        <h3 className={classes.header__subtitle}>
         
        </h3>
      </div>

    </div>
  )
}

export default Welcome

