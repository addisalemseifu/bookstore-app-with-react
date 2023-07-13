import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../icons';

export default function Navigation() {
  return (
    <nav>
      <h3>Bookstore CMC</h3>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/catagories">Categories</Link></li>
      <User />
    </nav>
  );
}
