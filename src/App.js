import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';


import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import AdminPage from './components/AdminPage/AdminPage';
import CheckinPage from './components/CheckinPage/CheckinPage';
import LogOut from './components/LogOut/LogOut';
import './styles/main.css';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/logout"
          component={LogOut}
        />
        <Route
          path="/admin"
          component={AdminPage}
        />
        <Route
          path="/checkin"
          component={CheckinPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
