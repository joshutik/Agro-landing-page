import React from 'react';
import './Testimonials.css'
import client1 from '../Assets/Ellipse1.png';
import client2 from '../Assets/Ellipse2.png';
import client3 from '../Assets/Ellipse3.png';
import quote from '../Assets/“.png'

const Testimonials = () => {
  return (
    <div className="client-testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <span><img src={quote} alt="" /></span>
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet consectetur. Eget arcu pharetra lorem venenatis velit neque ullamcorper. Vel sed enim bibendum turpis sagittis curabitur. Purus euismod sem elementum mattis. Molestie id dis mi orci enim.
          </p>
          <div className="client-info">
            <img src={client1} alt="John Smith" className="client-img" />
            <div className="client-details">
              <h3>John Smith</h3>
              <p>Founder of Awesomeux Technology</p>
            </div>
          </div>
        </div>
        
        <div className="testimonial-card">
        <span><img src={quote} alt="" /></span>
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet consectetur. Eget arcu pharetra lorem venenatis velit neque ullamcorper. Vel sed enim bibendum turpis sagittis curabitur. Purus euismod sem elementum mattis. Molestie id dis mi orci enim.
          </p>
          <div className="client-info">
            <img src={client2} alt="Alvin Gap" className="client-img" />
            <div className="client-details">
              <h3>Alvin Gap</h3>
              <p>Team Lead QEP AgroTech</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
        <span><img src={quote} alt="" /></span>
          <p className="testimonial-text">
            Lorem ipsum dolor sit amet consectetur. Eget arcu pharetra lorem venenatis velit neque ullamcorper. Vel sed enim bibendum turpis sagittis curabitur. Purus euismod sem elementum mattis. Molestie id dis mi orci enim.
          </p>
          <div className="client-info">
            <img src={client3} alt="Roland Griffin" className="client-img" />
            <div className="client-details">
              <h3>Roland Griffin</h3>
              <p>Founder AgroNig Robotics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

