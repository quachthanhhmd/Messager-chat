
import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Messager from './pages/Messager';
import ThemeMode from './components/ThemeMode';

import Authenticate from './pages/Authenticate';

import  history  from './helpers/history';

function App() {

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change

    });
  }, []);

  return (
    <div className="App">
    <ThemeMode/>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Messager} />
          <Route path="/login" >
            <Authenticate />
          </Route>
          <Route path="/register" >
            <Authenticate />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
