import React from 'react';
import './App.scss';
import Header from './component/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div id="app">
      <Router>
        <Header />
      </Router>
    </div>
  );
}
