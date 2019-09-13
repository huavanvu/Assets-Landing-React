import React, { Component } from "react";
import HomePage from '../pages/HomePage'
import HomeLayout from '../layouts/Homelayout'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
class RouterIndex extends Component {
  render() {
    return (
      <HomeLayout>
        <Router>
          <Switch>
            <Route
              path="/"
              exact={true}
              component={HomePage}
            />
          </Switch>
        </Router>
      </HomeLayout>
    );
  }
}
export default RouterIndex;
