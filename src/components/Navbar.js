import React from 'react';
import OurEmployeeLogo from '../assets/logo-icon.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={OurEmployeeLogo} alt="" />
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/ourEmployee">Çalışanlarımız</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
};
