import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Grand Exchange</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Item List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/items" className="nav-link">All Items</Link>
          </li>
          <li className="navbar-item">
          <Link to="/category" className="nav-link">Item Categorys</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
