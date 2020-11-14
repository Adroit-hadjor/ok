import './App.scss';
import Homepage from './pages/homepage';
import Project from './pages/projects';
import Contact from './pages/contact'
import MyRouter from './components/Router';
import React, {useState} from "react";
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Noguchi from './pages/noguchi';
import Japan from './pages/japan';
import Sika from './pages/sika'


function App() {
  return (
    <Router >
   
      <Switch>
              
              <MyRouter 
              path="/ok"
              page={<Homepage />}
              exact={true}
              />
              <MyRouter 
              path="/project"
              page={<Project />}
              exact={false}
              />
              <MyRouter 
              path="/contact"
              page={<Contact />}
              exact={false}
              />
                <MyRouter 
              path="/noguchi"
              page={<Noguchi />}
              exact={false}
              />
                <MyRouter 
              path="/sika"
              page={<Sika />}
              exact={false}
              />
                <MyRouter 
              path="/japan"
              page={<Japan />}
              exact={false}
              />
              </Switch>
        
              </Router>
             
 
  );
}

export default App;
