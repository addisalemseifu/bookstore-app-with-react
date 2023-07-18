import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../icons';

export default function Navigation() {
  return (
    <nav>
      <h3>Bookstore CMC</h3>
      <li className="links"><Link to="/"><a href="#ss">Home</a></Link></li>
      <li className="link"><Link to="/catagories"><a href="#ss">Categories</a></Link></li>
      <User />
    </nav>
  );
}
