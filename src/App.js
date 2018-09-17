import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter,
        Route,
      Switch} from 'react-router-dom';
import './App.css';
import Login from './components/containerComponents/login/login.jsx';
import Timeline from './components/containerComponents/timeline/timeline.jsx';
import Search from './components/containerComponents/search/search.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
           <Route path="/search" component={Search} />
           <Route path='/timeline/:token' component={Timeline}/>
           <Route exact path="/" component={Login}/>
           <Route exact path="/:token/" component={Login}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
