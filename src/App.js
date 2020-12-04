import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from'./components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import {
  Switch,
  Route
} from "react-router-dom";
import Model from './components/Model';

function App() {
  return (
   <React.Fragment>
     <Navbar />
     <Switch>
       <Route path='/cart'>
          <Cart />
       </Route>
       <Route path='/details'>
         <Details />
       </Route>
       <Route exact path='/'>
         <ProductList />
       </Route>
       <Route>
         <Default />
       </Route>
     </Switch>
     <Model />
   </React.Fragment>
  );
}

export default App;
