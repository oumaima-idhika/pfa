import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import HomePage from './homePage';
import FormPage from './formPage';
import About from './about';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/'exact component={HomePage}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/formPage' component={FormPage}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
