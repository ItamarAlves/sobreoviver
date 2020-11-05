import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Dashboard from './pages/dashboard';

const Routes = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;