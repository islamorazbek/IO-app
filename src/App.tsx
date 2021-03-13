import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home/Home';
import routes from './shared/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.home} component={Home} />
        <Route path="*" render={() => (<Redirect to={routes.home} />)} />
      </Switch>
    </Router>
  );
}

export default App;
