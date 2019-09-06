import React from 'react';
// import logo from './logo.svg';

// react router 
import {Switch, Route} from 'react-router-dom'

import './App.css';
// bootstrap usage

import 'bootstrap/dist/css/bootstrap.min.css'

import {Navbar} from './components/Navbar'
import Productlist from './components/Productlist';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';


function App() {
  return (
    <>
      {/* <h3>hello from app</h3> */}
      <Navbar /> 

      <Switch>
        <Route exact path="/" component={Productlist}></Route>
        <Route exact path="/details" component={Details}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route component={Default} />
          
      </Switch>

      {/* modal component outside switch */}
      <Modal /> 
        
      {/* <Productlist /> 
      <Details /> */}
      {/* <Cart /> */}
    </>
  );
}

export default App;
