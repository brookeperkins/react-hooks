import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ListPage from '../../containers/list/ListPage';
import DetailPage from '../../containers/details/DetailPage';

export default function App() {
  return <Router>
    <Switch>
      <Route
        path="/"
        exact
        component={ListPage}
      />
      <Route
        path="/:apodEntry"
        exact
        component={DetailPage}
      />
    </Switch>
  </Router>;
}
