import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Men from './pages/Men';
import Women from './pages/Women';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainApp = () => {
  return (
    <div>
      <Router>
        <Route path='/' render={({location}) => {
          return <Nav nav={["MEN", "WOMEN", "CART", "CONTACT"]} location={location}/>
        }}/>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/men' component={Men} />
          <Route path='/women' component={Women} />
          <Route path='/cart' component={Cart} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(<MainApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
