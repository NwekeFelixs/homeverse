import React from 'react';
import '../css/style.css';
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="./assets/images/logo-light.png" alt="Homeverse logo" />
            </a>
            <p className="section-text">
              Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
            </p>
            <ul className="contact-list">
              <li>
                <a href="#" className="contact-link">
                  <IoLocationOutline />
                  <address>Brooklyn, New York, United States</address>
                </a>
              </li>
              <li>
                <a href="tel:+0123456789" className="contact-link">
                  <IoCallOutline />
                  <span>+0123-456789</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@homeverse.com" className="contact-link">
                  <IoMailOutline />
                  <span>contact@homeverse.com</span>
                </a>
              </li>
            </ul>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <IoLogoFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IoLogoTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <IoLogoYoutube />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-link-box">
            <ul class="footer-list">

            <li>
                <p class="footer-list-title">Company</p>
            </li>

            <li>
                <a href="#" class="footer-link">About</a>
            </li>

            <li>
                <a href="#" class="footer-link">Blog</a>
            </li>

            <li>
                <a href="#" class="footer-link">All Products</a>
            </li>

            <li>
                <a href="#" class="footer-link">Locations Map</a>
            </li>

            <li>
                <a href="#" class="footer-link">FAQ</a>
            </li>

            <li>
                <a href="#" class="footer-link">Contact us</a>
            </li>

            </ul>

            <ul class="footer-list">

            <li>
                <p class="footer-list-title">Services</p>
            </li>

            <li>
                <a href="#" class="footer-link">Order tracking</a>
            </li>

            <li>
                <a href="#" class="footer-link">Wish List</a>
            </li>

            <li>
                <a href="#" class="footer-link">Login</a>
            </li>

            <li>
                <a href="#" class="footer-link">My account</a>
            </li>

            <li>
                <a href="#" class="footer-link">Terms & Conditions</a>
            </li>

            <li>
                <a href="#" class="footer-link">Promotional Offers</a>
            </li>

            </ul>

            <ul class="footer-list">

            <li>
                <p class="footer-list-title">Customer Care</p>
            </li>

            <li>
                <a href="#" class="footer-link">Login</a>
            </li>

            <li>
                <a href="#" class="footer-link">My account</a>
            </li>

            <li>
                <a href="#" class="footer-link">Wish List</a>
            </li>

            <li>
                <a href="#" class="footer-link">Order tracking</a>
            </li>

            <li>
                <a href="#" class="footer-link">FAQ</a>
            </li>

            <li>
                <a href="#" class="footer-link">Contact us</a>
            </li>

            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <a href="#">Feylicks</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
