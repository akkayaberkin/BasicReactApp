import React from 'react';
import BannerImage from '../assets/about.jpg';
import '../styles/About.css';

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor
        </p>
      </div>
    </div>
  );
};
