import React from 'react';
import './App.css';
import './homePage.css'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div className="homepage">
        <div className="navbar">
        <img src="" alt="" />
        <ul>
           <li><Link to='/'>home</Link></li>
           <li><Link to='/formPage'>formulaire</Link></li>
           <li><Link to='/about'>about</Link></li>
        </ul>
        </div>
        <div className="content">
            <h1>loan_prediction</h1>
            <p>veuillez remplire le formulaire pour avoir la probabilite<br></br> d'obtenir votre credit</p>
            <div>
               <button type='button'><span></span><Link to="/formPage">remplir le formulaire</Link></button>
            </div>
        </div>
      
    </div>
  );
}

export default HomePage;