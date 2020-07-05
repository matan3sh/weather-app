import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <img
        src='https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png'
        alt='Weather-App'
        className='logo'
      />
      <ul className='main-menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
