        // Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-branding">
                    <img src="logo.png" alt="FarmSol Logo" className="footer-logo" />
                    <h3>FarmSol</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Arcu id maecenas adipiscing tempus tempor id quam venenatis. Orci eu lacus at donec. Mi volutpat augue vivamus lorem justo scelerisque in. Malesuada</p>
                    <div className="footer-socials">
                        <a href="https://www.facebook.com"><img src="facebook-icon.png" alt="Facebook" /></a>
                        <a href="https://www.instagram.com"><img src="instagram-icon.png" alt="Instagram" /></a>
                        <a href="/"><img src="web-icon.png" alt="Website" /></a>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Services</a></li>
                             <li><a href="/">Our Projects</a></li>
                            <li><a href="/">Latest News</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Others</h4>
                        <ul>
                            <li><a href="/">Testimonial</a></li>
                            <li><a href="/">Benefit</a></li>
                            <li><a href="/">Meet the farmers</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="tel:08053789452">08053789452</a></li>
                            <li><a href="mailto:Farmsol@servicemail.com">Farmsol@servicemail.com</a></li>
                            <li>Plot345 Trans Amadi industrial layout, Port Harcourt Rivers State</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
