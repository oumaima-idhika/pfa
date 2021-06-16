import React from 'react';
import './App.css';
import './about.css';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';

const About = () => {
    return ( 
        <div className="aboutpage">
            <div className="noth"></div>
            <hr className="hr1"/>
            <div className="about">
          
            <p>vous voulez obtenir un credit? vous n'etes pas surs si 
                vous repondez bien aux criteres necessaires?vous cherchez 
                a savoir les chances de recevoir ce credit-la?notre application
                met fin a toutes ces questions.tout en remplissant le formulaire,vous 
                aurez la probabilite d'obtenir votre credit
            </p>
           
            </div>
            <hr className="hr2"/>
            <button type='button'><span></span><Link to="/">precedent</Link></button>
           
        </div>
     );
}
 
export default About;