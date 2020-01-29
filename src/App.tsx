import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Layout from '@components/Layout/index';
import DashBoard from '@pages/DashBoard/index';
import Agent from '@pages/Agent/index';
import MyCruise from '@pages/MyCruise/index';
import Help from '@pages/Help/index';
import NotFound from '@pages/NotFound/index';

import '@resource/css/base.css';
import '@resource/css/fonts.css';

import history from './history';

const App = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Redirect exact from="/" to="/agent" />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/agent" component={Agent} />
        <Route path="/mycruise" component={MyCruise} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
