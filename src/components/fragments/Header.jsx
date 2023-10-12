import React, { useState, useEffect } from 'react';
import '../css/style.css'
import { AiOutlineClose, AiOutlineMeh, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser, AiOutlineWhatsApp } from 'react-icons/ai';
import {FaLocationDot} from 'react-icons/fa6'
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import logoImage from '../img/logo.png';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    elemToggleFunc(document.querySelector("[data-navbar]"));
    elemToggleFunc(document.querySelector("[data-overlay]"));
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
    elemToggleFunc(document.querySelector("[data-navbar]"));
    elemToggleFunc(document.querySelector("[data-overlay]"));
  };

  const elemToggleFunc = (elem) => {
    elem.classList.toggle("active");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsHeaderActive(true);
        document.querySelector("[data-header]").classList.add("active");
      } else {
        setIsHeaderActive(false);
        document.querySelector("[data-header]").classList.remove("active");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="overlay" data-overlay></div>
      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li>
              <a href="mailto:info@homeverse.com" className="header-top-link">
                <AiOutlineMail />
                <span>info@homeverse.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="header-top-link">
                <FaLocationDot />
                <address>15/A, Nest Tower, NYC</address>
              </a>
            </li>
          </ul>
          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="#" className="header-top-social-link">
                  <AiOutlineFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="header-top-social-link">
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
            <button className="header-top-btn">Add Listing</button>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <a href="#" className="logo">
            <img src={logoImage} alt="Homeverse logo" />
          </a>
          <nav className={`navbar ${isNavbarOpen ? 'active' : ''}`} data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <img src={logoImage} alt="Homeverse logo" />
              </a>
              <button className="nav-close-btn" onClick={closeNavbar} data-nav-close-btn aria-label="Close Menu">
                <AiOutlineClose className='ion-icon' />
              </button>
            </div>
            <div className="navbar-bottom">
              <ul className="navbar-list">
                <li>
                  <a href="#home" className="navbar-link" data-nav-link>Home</a>
                </li>
                <li>
                  <a href="#about" className="navbar-link" data-nav-link>About</a>
                </li>
                <li>
                  <a href="#service" className="navbar-link" data-nav-link>Service</a>
                </li>
                <li>
                  <a href="#property" className="navbar-link" data-nav-link>Property</a>
                </li>
                <li>
                  <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
                </li>
                <li>
                  <a href="#contact" className="navbar-link" data-nav-link>Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header-bottom-actions">
            <button className="header-bottom-actions-btn" aria-label="Search">
              <AiOutlineSearch className='ion-icon' />
              <span>Search</span>
            </button>
            <button className="header-bottom-actions-btn" aria-label="Profile">
              <AiOutlineUser className='ion-icon' />
              <span>Profile</span>
            </button>
            <button className="header-bottom-actions-btn" aria-label="Cart">
              <AiOutlineShoppingCart className='ion-icon' />
              <span>Cart</span>
            </button>
            <button className="header-bottom-actions-btn" onClick={toggleNavbar} data-nav-open-btn aria-label="Open Menu">
              <AiOutlineMenu className='ion-icon' />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
