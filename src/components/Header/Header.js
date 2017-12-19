import React from 'react';
import './Header.css';

const Header = ({ name }) => {
  return (
    <div className="header">
      <h1 className="header--text">Welcome, {name}!</h1>
    </div>
  )
};

export default Header;