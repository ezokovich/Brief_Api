import React, { Component }  from 'react';
import './App.css';
import Create from "./ components/create";
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import Read from './ components/read';

function App() {
  return (
    <Router>
    <div className="main">
     <h2 className="main-header">React Crud Operations</h2>
      
      <Route path='/' exact>
      <div>
        <Create/>
      </div>
      </Route>
    </div>
    </Router>
  );
}

export default App;