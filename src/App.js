import React, { Component } from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './components/home';
import Demo1 from './components/demo1';
import Demo2 from './components/demo2';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className={"App-logo-img"}>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className={"App-title"}>
              <span>Learning redux!</span>
            </div>
          </header>
          <div>
            <div className="App-body">
              <div className={"App-body-side"}>
                <Link to={"/"}>Home</Link>
                <Link to={"/demo1"}>demo1</Link>
                <Link to={"/demo2"}>demo2</Link>
              </div>
              <div className={"App-body-content"}>
                <Route exact path="/" component={Home}/>
                <Route path="/demo1" component={Demo1}/>
                <Route path="/demo2" component={Demo2}/>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
