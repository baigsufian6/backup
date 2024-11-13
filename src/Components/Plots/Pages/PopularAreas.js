import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import area1 from '../Assets/new2.png';
import area2 from '../Assets/new1.png';
import area3 from '../Assets/new3.png';
import area4 from '../Assets/new5.jpeg';
import './PopularAreas.css';

const ProjectCards = () => {
  const navigate = useNavigate();
  
  const cards = [
    { image: area1, title: "Project 1", route: "/plots/InnerPage1" },
    { image: area2, title: "Project 2", route: "/plots/InnerPage2" },
    { image: area3, title: "Project 3", route: "/plots/InnerPage3" },
    { image: area4, title: "Project 4", route: "/plots/InnerPage4" }
  ];

  return (
    <div className="project-cards-container">
      <div className="project-cards-content">
        <h2 className="project-cards-title">LATEST PROJECTS</h2>
        
        <div className="project-cards-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.route)}
              className="project-card"
              style={{
                backgroundImage: `url(${card.image})`
              }}
            >
              {/* Gradient Overlay */}
              <div className="project-card-overlay" />
              
              {/* Animated Arrow Container */}
              <div className="project-card-arrow-container">
                <div className="project-card-arrow-circle">
                  <ArrowRight 
                    className="project-card-arrow-icon"
                    size={24}
                  />
                </div>
                
                <div className="project-card-sliding-arrows">
                  {[...Array(3)].map((_, i) => (
                    <ArrowRight 
                      key={i}
                      className="project-card-sliding-arrow"
                      size={20}
                      style={{
                        animation: `slideRight 1.5s ease-in-out ${i * 0.2}s infinite`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Card Number */}
              <div className="project-card-number">
                <div className="project-card-number-circle">
                  <span className="project-card-number-text">
                    {index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
