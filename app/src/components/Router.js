
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as routes from '../constants/routes';

import Login from './login';
import Dashboard from './dashboard';
import PrivateRoute from './privateroute';
import BulletinScreen from './bulletinScreen';
import PageNotFound from './commons/PageNotFound';
import history from '../utils/history';

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route  path={routes.LOGIN} component={Login} /> 
      <Route exact path={routes.HOME} component={BulletinScreen} />       
      <PrivateRoute path={routes.DASHBOARD} component={Dashboard} />
      <Route component={PageNotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
