import React, { Component } from 'react';
import './App.css';
import './resources/fonts/stylesheet.css';
import './resources/fonts/stylesheetDance.css';
import './resources/animate.css';

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import SinglePage from './pages/SinglePage';
import CateringPage from './pages/CateringPage';


class App extends Component {
  
  render(){
    return (
      <HashRouter>
        
        <div className="main">
        <Switch>
            <Route exact path="/"
              render={() => (
                <Redirect to="/inicio" />
              )}
            />
            <Route exact path="/inicio" component={SinglePage} />
            <Route exact path="/catering" component={CateringPage} />            
          </Switch>
          <div className="footer">
            Copyright © 2019 Cocolatte. All Rights Reserved.
          </div>
        </div>
      </HashRouter>
    );

  }
  
}

export default App;
