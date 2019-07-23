import React from 'react';
import './App.css';
import Home from "./components/Home"
import {Switch, Route} from "react-router-dom"
import ProductsPage from './components/pages/products/Products'
import Header from "./components/header/header"
import Singin from "./components/pages/signin/signin"


function App() {
 return( 
 <div>
 <Header/>
 <Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/Products' component={ProductsPage}/>
  <Route path='/signin' component={Singin}/>
 </Switch>
 </div>
 )
}

export default App;
