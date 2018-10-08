import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/admin">
            Admin
          </Link>
        </li>
        <li>
          <Link to="/checkin">
            CheckIn
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
