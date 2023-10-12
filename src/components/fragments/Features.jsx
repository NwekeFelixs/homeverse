import React from 'react';
import { IoCarSportOutline, IoWaterOutline, IoShieldCheckmarkOutline, IoFitnessOutline, IoLibraryOutline, IoBedOutline, IoHomeOutline, IoFootballOutline } from 'react-icons/io5';
import {AiOutlineArrowRight} from 'react-icons/ai';
const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <p className="section-subtitle">Our Amenities</p>
        <h2 className="h2 section-title">Building Amenities</h2>
        <ul className="features-list">
          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <IoCarSportOutline />
              </div>
              <h3 className="card-title">Parking Space</h3>
              <div className="card-btn">
                <AiOutlineArrowRight/>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <IoWaterOutline />
              </div>
              <h3 className="card-title">Swimming Pool</h3>
              <div className="card-btn">
                <AiOutlineArrowRight/>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <IoShieldCheckmarkOutline />
              </div>
              <h3 className="card-title">Private Security</h3>
              <div className="card-btn">
                <AiOutlineArrowRight/>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <IoFitnessOutline />
              </div>
              <h3 className="card-title">Medical Center</h3>
              <div className="card-btn">
                <AiOutlineArrowRight/>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <IoLibraryOutline />
              </div>
              <h3 className="card-title">Library Area</h3>
              <div className="card-btn">
                <AiOutlineArrowRight/>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <IoBedOutline />
              </div>
              <h3 className="card-title">King Size Beds</h3>
              <div className="card-btn">
                <AiOutlineArrowRight/>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <IoHomeOutline />
              </div>
              <h3 className="card-title">Smart Homes</h3>
              <div className="card-btn">
                <AiOutlineArrowRight/>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="features-card">
              <div className="card-icon">
                <IoFootballOutline />
              </div>
              <h3 className="card-title">Kid’s Playland</h3>
              <div className="card-btn">
                <AiOutlineArrowRight/>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
