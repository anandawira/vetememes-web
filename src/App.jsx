import React, { useState, Suspense, lazy } from 'react';
import './App.scss';
import Header from './component/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style/responsive.scss';
import { ReactComponent as CloseIcon } from './asset/close-24px.svg';
import ReactGA from 'react-ga';

const Home = lazy(() => import('./component/Home'));
const TheWriter = lazy(() => import('./component/TheWriter'));
const Watch = lazy(() => import('./component/Watch'));
const About = lazy(() => import('./component/About'));

export default function App() {
  ReactGA.initialize('UA-184488128-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  const [width, setWidth] = useState(0);

  function closeSidenav() {
    setWidth(0);
  }
  function openSidenav() {
    setWidth(60);
  }
  return (
    <div id="app">
      <Router>
        <Header openSidenav={openSidenav} />
        <div id="mySidenav" className="sidenav" style={{ width: width + '%' }}>
          <CloseIcon className="closebtn" onClick={closeSidenav} />
          <Link to="/" onClick={closeSidenav}>
            Home
          </Link>
          <Link to="/thewriter" onClick={closeSidenav}>
            The Writer
          </Link>
          <Link to="/watch" onClick={closeSidenav}>
            Watch
          </Link>
          <Link to="/about" onClick={closeSidenav}>
            About
          </Link>
        </div>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/thewriter" component={TheWriter} />
              <Route exact path="/watch" component={Watch} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Suspense>
        </main>
      </Router>
    </div>
  );
}
