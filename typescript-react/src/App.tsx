import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainComponent from './components/MainComponent'
import FunctionalComponent from './components/FunctionalComponent';
import FormComponent from './components/FormComponent';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
   <Router>
      <div className="App">
  {/*  <MainComponent title="im the lower title"subTitle="who am i"/> 
     <FunctionalComponent title={"will this work"}/> */}
     <Route path="/form" exact /* component={FormComponent} */ render={routerProps=><FormComponent {...routerProps} title="Form"/>} />
    </div>

   </Router>
  );
}                                                                                      

export default App;
