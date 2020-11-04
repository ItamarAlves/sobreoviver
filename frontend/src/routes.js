import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import AdministrativePanel from './pages/administrativePanel';

const Routes = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/administrativePanel" component={AdministrativePanel} />
    </Switch>
  </BrowserRouter>
);

export default Routes;