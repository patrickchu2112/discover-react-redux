import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" activeClassName="active" exact className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/payees" activeClassName="active" className="nav-link">
              Payees
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/people" activeClassName="active" className="nav-link">
              People
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/transactions" activeClassName="active" className="nav-link">
              Transactions
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
