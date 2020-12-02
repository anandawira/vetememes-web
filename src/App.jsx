import React from 'react';
import './App.scss';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div id="app">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
