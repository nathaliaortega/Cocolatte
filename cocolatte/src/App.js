import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import './resources/fonts/stylesheet.css';
import './resources/fonts/stylesheetDance.css';
import './resources/animate.css';

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import SinglePage from './pages/SinglePage';

class App extends Component {
  
  render(){
    return (
      <HashRouter>
        <NavBar/>
        <div className="main">
        <Switch>
            <Route exact path="/"
              render={() => (
                <Redirect to="/inicio" />
              )}
            />
            <Route exact path="/inicio" component={SinglePage} />
            
          </Switch>
          <div className="footer">
            Copyright © 2019 Coclatte. All Rights Reserved.
          </div>
        </div>
      </HashRouter>
    );

  }
  
}

export default App;
