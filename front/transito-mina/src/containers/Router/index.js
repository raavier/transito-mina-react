import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import InitialScreen from '../InitialScreen';
import LoginPage from '../LoginPage';

export const routes = {
    initialScreen: "/",
    loginPage: "/loginPage"
}


function Router(props) {
    return (
      <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path={routes.initialScreen} component={InitialScreen} />
          <Route exact path={routes.loginPage} component={LoginPage} />
        </Switch>
      </ConnectedRouter>
    );
  }
  
  export default Router;