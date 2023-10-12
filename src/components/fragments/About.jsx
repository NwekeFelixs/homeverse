import React from 'react';
import { AiOutlineHome, AiOutlineCheckCircle } from 'react-icons/ai';
import image1 from '../img/about-banner-1.png';
import image2 from '../img/about-banner-2.jpg';
import '../css/style.css';
import {FaLeaf, FaWineGlassAlt} from 'react-icons/fa';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img src={image1} alt="House interior" />
          <img src={image2} alt="House interior" className="abs-img" />
        </figure>
        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">The Leading Real Estate Rental Marketplace.</h2>
          <p className="about-text">
            Over 39,000 people work for us in more than 70 countries all over the world. This breadth of global coverage, combined with specialist services.
          </p>
          <ul className="about-list">
            <li className="about-item">
              <div className="about-item-icon">
                <AiOutlineHome />
              </div>
              <p className="about-item-text">Smart Home Design</p>
            </li>
            <li className="about-item">
              <div className="about-item-icon">
                <FaLeaf />
              </div>
              <p className="about-item-text">Beautiful Scene Around</p>
            </li>
            <li className="about-item">
              <div className="about-item-icon">
                <FaWineGlassAlt />
              </div>
              <p className="about-item-text">Exceptional Lifestyle</p>
            </li>
            <li className="about-item">
              <div className="about-item-icon">
                <AiOutlineCheckCircle />
              </div>
              <p className="about-item-text">Complete 24/7 Security</p>
            </li>
          </ul>
          <p className="callout">
            "Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet"
          </p>
          <a href="#service" className="btn">Our Services</a>
        </div>
      </div>
    </section>
  );
}

export default About;
