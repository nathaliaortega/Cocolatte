import React, { Component } from "react";
import "./App.css";
import "./resources/fonts/stylesheet.css";
import "./resources/fonts/stylesheetDance.css";
import "./resources/animate.css";

import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import SinglePage from "./pages/SinglePage";
import CateringPage from "./pages/CateringPage";
import InstCoffeePage from "./pages/InstCoffe";
import ProductsPage from "./pages/ProductsPage";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="main">
        
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/inicio" />} />
            <Route exact path="/inicio" component={SinglePage} />
            <Route exact path="/catering" component={CateringPage} />
            <Route
              exact
              path="/cafe-Institucional"
              component={InstCoffeePage}
            />
            <Route
              exact
              path="/productos"
              component={ProductsPage}
            />
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
