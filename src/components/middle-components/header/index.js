import React from 'react';

import './style.css';

import Profile from '../../../img/profile.png';

import { FaBell } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <div className="header">
      <div className="search">
        <div className="input">
          <input type="text" />
          <FaSearch color="#afafaf" />
        </div>
      </div>

      <div className="perfil">
        <FaBell color="#1cf08a" className="bell" />
        <img src={Profile} alt="profile" />
        <p>Hi, CauaS1! </p>
        <FaChevronDown color="#fff" />
      </div>
    </div>
  );
}

export default Header;