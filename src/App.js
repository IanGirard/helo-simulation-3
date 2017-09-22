import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={ Login }/>
            <Route path='/dashboard' component={ Dashboard }/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
