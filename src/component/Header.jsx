import '../style/Header.scss';
import logo from '../asset/vetememes.jpg';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../asset/menu-24px.svg';

import React from 'react';

export default function Header(props) {
  return (
    <div id="header">
      <MenuIcon id="menu-icon" onClick={props.openSidenav} />
      <Link to="/" id="logo">
        <img src={logo} alt="logo" />
        <p>
          vete<span>memes</span>
        </p>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/thewriter">THE WRITER</Link>
          </li>
          <li>
            <Link to="/watch">WATCH</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
