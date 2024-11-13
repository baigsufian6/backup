import { React, useEffect } from 'react';
import ImageCarousel from './ImageCarousel5'; // Carousel component for project images
import projectBanner from '../Assets/rohanlogo.png'; // Banner image path
import './project1.css'; // Import the CSS file for styling
import lmap from '../Assets/Layout541.jpg';

const Project4 = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-container">
      
      {/* Project Banner */}
      <div className="banner-container">
        <img src={projectBanner} alt="Project Banner" className="banner-image" />
      </div>

      {/* Project Introduction */}
      <div className="details-container">
        <h1 className="company-name">ROHAN INFRA BUILDERRS AND DEVELOPERRS</h1>
        <h2 className="project-name">Presenting "ROHAN AROHANA SERENITY"</h2>
        <p className="project-subtitle">A luxurious residential project located on Mysore Road, designed for those who appreciate elegance and exclusivity.</p>
      </div>

      {/* Project Details */}
      <div className="section project-details-section">
        <h3 className="section-title">Project Details</h3>
        <p className="detail-item"><strong>Location:</strong> Ramohalli, Mysore Road</p>
        <p className="detail-item"><strong>Price:</strong> Price starting from 5290/sft</p>
        <p className="detail-item"><strong>Total Plots:</strong> 86</p>
        <p className="detail-item"><strong>Total Area:</strong> 5 acres 33 guntas</p>
        <p className="detail-item"><strong>Dimensions:</strong> 20x30, 30x40, 30x50</p>
        <p className="detail-item"><strong>Approval:</strong> BDA Approved</p>
        <p className="detail-item"><strong>Khata:</strong> A Khata</p>
        <p className="detail-item"><strong>RERA Registration:</strong> Registered</p>
      </div>

      <img src={lmap} alt="layout map"  />
    
      {/* Accessibility & Connectivity */}
      <div className="section connectivity-section">
        <h3 className="section-title">Accessibility & Connectivity</h3>
        <ul className="connectivity-list">
          <li>10 min from Mysore Road</li>
          <li>15 min from Challaghatta Metro Station</li>
          <li>Close proximity to RR Medical and Engineering College</li>
          <li>Nearby key areas: Kengeri, RR Nagar, Nagarbhavi, Vijaynagar</li>
        </ul>
      </div>

      {/* Amenities Section */}
      <div className="section amenities-section">
        <h3 className="section-title">Amenities</h3>
        <ul className="amenities-list">
          <li>Secure Gated Community with 40 ft wide roads</li>
          <li>Overhead Tank & Borewell</li>
          <li>Amphitheater and Multipurpose Court</li>
          <li>Children's Play Area, Butterfly Park, and Senior Citizen Park</li>
          <li>Underground Electricity System</li>
          <li>Avenue Plantation for a green, serene environment</li>
        </ul>
      </div>

      {/* Image Carousel for Location Map and Images */}
      <div className="map-section">
        <ImageCarousel />
      </div>

      {/* Payment and Registration Details */}
      <div className="section payment-section">
        <h3 className="section-title">Payment and Registration</h3>
        <p className="payment-info"><strong>Payment Options:</strong> Cash, Cheque, UPI</p>
        <p className="payment-info">Contact us for attractive offers and flexible payment plans.</p>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h3 className="contact-title">Get in Touch Today for More Details!</h3>
        <p className="contact-subtitle">Reserve your plot at "ROHAN AROHANA SERENITY" and be part of an exclusive community.</p>
      </div>
    </div>
  );
};

export default Project4;