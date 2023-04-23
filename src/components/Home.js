import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/carousel-1.jpg';
import '../styles/Home.css';

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="order">
        <Link to="/contact">
          <button>Bize Ulaş</button>
        </Link>
      </div>
    </div>
  );
};
