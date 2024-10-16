import React, { useRef } from "react";
import "./OurServicesSection.css";
import serviceImg1 from "../Assets/image 4.png";
import serviceImg2 from "../Assets/image 8.png";
import serviceImg3 from "../Assets/image 6 (1).png";
import serviceImg4 from "../Assets/image 4.png";

const OurServicesSection = () => {
  const containerRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplied by 2 for faster scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  return (
    <div>
      <div className="services-text">
        <h2>Our Services</h2>
        <p>We have tailored solutions for every farm</p>
      </div>
      <div className="services-cards-container"  onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}>
        
        <div className="card">
          <div className="card-img">
            <img src={serviceImg1} alt="" />
          </div>
          <h2>Precision Agriculture</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
            tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
            augue vivamus lorem justo scelerisque in. Malesuada
          </p>
          <div className="card-btn">
            <button>Read More</button>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={serviceImg2} alt="" />
          </div>
          <h2>Organic Farming Input</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
            tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
            augue vivamus lorem justo scelerisque in. Malesuada
          </p>
          <div className="card-btn">
            <button>Read More</button>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={serviceImg3} alt="" />
          </div>
          <h2>Smart Irrigation Systems</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
            tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
            augue vivamus lorem justo scelerisque in. Malesuada
          </p>
          <div className="card-btn">
            <button>Read More</button>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={serviceImg4} alt="" />
          </div>
          <h2>Crop Management</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing
            tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat
            augue vivamus lorem justo scelerisque in. Malesuada
          </p>
          <div className="card-btn">
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;
