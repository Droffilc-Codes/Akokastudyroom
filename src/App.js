import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Payment from './pages/Payment';
import Others from './pages/Others'
import Assessment from './pages/Assessment';
import Regulations from './pages/Regulations'
import { Fragment } from 'react';
import Welcome from './Welcome';




function App() {
 

  return (
   <Router>

    <div className="app">
      <Header />
     
      <div className="container">
              

        <Routes>
           
            <Route path='/' element={
              
              <Fragment>
                <Welcome />
              </Fragment>
            } />
           
          
            <Route exact path="/regulations" element={<Regulations />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Others" element={<Others />} />
            <Route path="/Assessment" element={<Assessment />} />

        </Routes>
    
      </div>
       {/* Footer Section */}
    </div>

   </Router>
 

  
  );
}

export default App;

