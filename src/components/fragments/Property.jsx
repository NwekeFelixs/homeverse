import React from 'react';
import { AiOutlineHeart, AiOutlineSearch, AiFillCamera, AiOutlineArrowsAlt} from 'react-icons/ai';
import '../css/style.css';
import {BiBed, BiFilm, BiBath} from 'react-icons/bi';
import {BsSquare} from 'react-icons/bs';
import {FaLocationDot} from 'react-icons/fa6';
import property1 from '../img/property-1.jpg';
import property2 from '../img/property-2.jpg';
import property3 from '../img/property-3.jpg';
import property4 from '../img/property-4.png';
import author from '../img/author.jpg';

const Property = () => {
  return (
    <section className="property" id="property">
      <div className="container">
        <p className="section-subtitle">Properties</p>
        <h2 className="h2 section-title">Featured Listings</h2>
        <ul className="property-list has-scrollbar">
          <li>
            <div className="property-card">
              <figure className="card-banner">
                <a href="#">
                  <img src={property1} alt="New Apartment Nice View" className="w-100" />
                </a>
                <div className="card-badge green">For Rent</div>
                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <FaLocationDot />
                    <address>Belmont Gardens, Chicago</address>
                  </button>
                  <button className="banner-actions-btn">
                    <AiFillCamera />
                    <span>4</span>
                  </button>
                  <button className="banner-actions-btn">
                    <BiFilm />
                    <span>2</span>
                  </button>
                </div>
              </figure>
              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>
                <h3 className="h3 card-title">
                  <a href="#">New Apartment Nice View</a>
                </h3>
                <p className="card-text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                </p>
                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>
                    <BiBed />
                    <span>Bedrooms</span>
                  </li>
                  <li className="card-item">
                    <strong>2</strong>
                    <BiBath />
                    <span>Bathrooms</span>
                  </li>
                  <li className="card-item">
                    <strong>3450</strong>
                    <BsSquare />
                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>
              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    <img src={author} alt="William Seklo" className="w-100" />
                  </figure>
                  <div>
                    <p className="author-name">
                      <a href="#">William Seklo</a>
                    </p>
                    <p className="author-title">Estate Agents</p>
                  </div>
                </div>
                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <AiOutlineSearch />
                  </button>
                  <button className="card-footer-actions-btn">
                    <AiOutlineHeart />
                  </button>
                  <button className="card-footer-actions-btn">
                    <AiOutlineArrowsAlt />
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="property-card">
              <figure className="card-banner">
                <a href="#">
                  <img src={property2} alt="Modern Apartments" className="w-100" />
                </a>
                <div className="card-badge orange">For Sales</div>
                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <FaLocationDot />
                    <address>Belmont Gardens, Chicago</address>
                  </button>
                  <button className="banner-actions-btn">
                    <AiFillCamera />
                    <span>4</span>
                  </button>
                  <button className="banner-actions-btn">
                    <BiFilm />
                    <span>2</span>
                  </button>
                </div>
              </figure>
              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>
                <h3 className="h3 card-title">
                  <a href="#">Modern Apartments</a>
                </h3>
                <p className="card-text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                </p>
                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>
                    <BiBed />
                    <span>Bedrooms</span>
                  </li>
                  <li className="card-item">
                    <strong>2</strong>
                    <BiBath />
                    <span>Bathrooms</span>
                  </li>
                  <li className="card-item">
                    <strong>3450</strong>
                    <BsSquare />
                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>
              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    <img src={author} alt="William Seklo" className="w-100" />
                  </figure>
                  <div>
                    <p className="author-name">
                      <a href="#">William Seklo</a>
                    </p>
                    <p className="author-title">Estate Agents</p>
                  </div>
                </div>
                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <AiOutlineSearch />
                  </button>
                  <button className="card-footer-actions-btn">
                    <AiOutlineHeart />
                  </button>
                  <button className="card-footer-actions-btn">
                    <AiOutlineArrowsAlt />
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="property-card">
              <figure className="card-banner">
                <a href="#">
                  <img src={property3} alt="Comfortable Apartment" className="w-100" />
                </a>
                <div className="card-badge green">For Rent</div>
                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <FaLocationDot />
                    <address>Belmont Gardens, Chicago</address>
                  </button>
                  <button className="banner-actions-btn">
                    <AiFillCamera />
                    <span>4</span>
                  </button>
                  <button className="banner-actions-btn">
                    <BiFilm />
                    <span>2</span>
                  </button>
                </div>
              </figure>
              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>
                <h3 className="h3 card-title">
                  <a href="#">Comfortable Apartment</a>
                </h3>
                <p className="card-text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                </p>
                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>
                    <BiBed />
                    <span>Bedrooms</span>
                  </li>
                  <li className="card-item">
                    <strong>2</strong>
                    <BiBath />
                    <span>Bathrooms</span>
                  </li>
                  <li className="card-item">
                    <strong>3450</strong>
                    <BsSquare />
                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>
              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    <img src={author} alt="William Seklo" className="w-100" />
                  </figure>
                  <div>
                    <p className="author-name">
                      <a href="#">William Seklo</a>
                    </p>
                    <p className="author-title">Estate Agents</p>
                  </div>
                </div>
                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <AiOutlineSearch />
                  </button>
                  <button className="card-footer-actions-btn">
                    <AiOutlineHeart />
                  </button>
                  <button className="card-footer-actions-btn">
                    <AiOutlineArrowsAlt />
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="property-card">
              <figure className="card-banner">
                <a href="#">
                  <img src={property4} alt="Luxury villa in Rego Park" className="w-100" />
                </a>
                <div className="card-badge green">For Rent</div>
                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <FaLocationDot />
                    <address>Belmont Gardens, Chicago</address>
                  </button>
                  <button className="banner-actions-btn">
                    <AiFillCamera />
                    <span>4</span>
                  </button>
                  <button className="banner-actions-btn">
                    <BiFilm />
                    <span>2</span>
                  </button>
                </div>
              </figure>
              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>
                <h3 className="h3 card-title">
                  <a href="#">Luxury villa in Rego Park</a>
                </h3>
                <p className="card-text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                </p>
                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>
                    <BiBed />
                    <span>Bedrooms</span>
                  </li>
                  <li className="card-item">
                    <strong>2</strong>
                    <BiBath />
                    <span>Bathrooms</span>
                  </li>
                  <li className="card-item">
                    <strong>3450</strong>
                    <BsSquare />
                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>
              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    <img src={author} alt="William Seklo" className="w-100" />
                  </figure>
                  <div>
                    <p className="author-name">
                      <a href="#">William Seklo</a>
                    </p>
                    <p className="author-title">Estate Agents</p>
                  </div>
                </div>
                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <AiOutlineSearch />
                  </button>
                  <button className="card-footer-actions-btn">
                    <AiOutlineHeart />
                  </button>
                  <button className="card-footer-actions-btn">
                    <AiOutlineArrowsAlt />
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Property;
