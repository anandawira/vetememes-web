import '../style/Header.scss';
import logo from '../asset/vetememes.jpg';
import { Link } from 'react-router-dom';

import React from 'react';

export default function Header() {
  return (
    <div id="header">
      <Link to="/" id="logo">
        <img src={logo} alt="logo" />
        <p>
          vete<span>memes</span>
        </p>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li><li>
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
