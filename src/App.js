import React from 'react'
import Home1 from './home1'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Nav from './nav'
import Home2 from './home2'
import Kit from './kit'
import Billing from './billing'
import Cart from './cart'
import Product from './product'

export default function App() {
  return (
    <Router>
    <div>
      <Switch>
        {/* <Route path="/" exact component={Billing} /> */}
         <Route path="/" exact component={Home1} /> 
        <Route path="/kit" exact component={Product} />
        <Route path="/kit2" exact component={Home2} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </div>
    </Router>
  )
}
