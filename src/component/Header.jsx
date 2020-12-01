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
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
