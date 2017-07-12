// @flow
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import Users from './Users';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Login}/>
            {/* both /roster and /roster/:number begin with /roster */}
            <Route path='/users' component={Users}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
