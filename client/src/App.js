import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';



import './App.css';

import NavBar from './components/navbar';
import Home from './components/home';
import Featured from './components/featured';
import Portfolio from './components/work';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact={true} path="/" component={Home} />
          <Route path="/featured" component={Featured} />
          <Route path="/skills" component={Skills} />
          <Route path="/portfolio" component={Portfolio} />
          <Contact/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
