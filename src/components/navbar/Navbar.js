/*eslint-disable*/
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navbar.css';
import { FaUser } from "react-icons/fa";

const Nav = () => (
  <header className="heading">
    <div className='nav-container'>
      <p className="logo"><strong>Bookstore CMS</strong></p>
      <nav>
        <ul className="nav-link">
          <li className="link-item" id="books" data-testid="books"><Link to="/">Books</Link></li>
          <li className="link-item"><Link to="/categories">Categories</Link></li>
        </ul>
      </nav>
    </div>
    <div className='user-details'>
      <FaUser className='person' />
    </div>
    <Outlet />
  </header>
);

export default Nav;