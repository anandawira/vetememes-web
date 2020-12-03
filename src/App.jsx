import React from 'react';
import './App.scss';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ReactGA from 'react-ga';
export default function App() {
  ReactGA.initialize('G-YV368B7F34');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div id="app">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
