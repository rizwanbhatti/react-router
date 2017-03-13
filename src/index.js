import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router,Route,browserHistory,history}from 'react-router';
ReactDOM.render(<div>
  <Router history ={browserHistory}>
  <Route path="/"component={App}></Route>
  
  </Router>
  </div>,
  document.getElementById('root')
);
