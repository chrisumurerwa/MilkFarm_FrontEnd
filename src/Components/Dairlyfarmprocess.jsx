import React, { useState } from 'react';
import '../Styles/Dairlyfarmprocess.css';

const Dailryfarmprocess = () => {
  const [activeSection, setActiveSection] = useState(null);

  const processTechniques = [
    {
      title: "Sustainable Grazing Management",
      description: "Our innovative grazing approach focuses on rotational pasture systems that optimize both animal welfare and land health.",
      details: [
        "Rotational grazing across 500 acres of carefully managed pastures",
        "Adaptive multi-paddock grazing technique",
        "Soil regeneration through strategic cattle movement",
        "Minimum 6-8 week rest period for each pasture section"
      ],
      benefits: [
        "Improved soil carbon sequestration",
        "Enhanced grass regrowth and nutrition",
        "Reduced environmental impact",
        "Higher quality milk production"
      ]
    },
    {
      title: "Advanced Animal Nutrition",
      description: "Precision nutrition program tailored to individual cow health and productivity.",
      details: [
        "Custom-formulated feed mixtures",
        "Regular nutritional assessments",
        "Probiotic and mineral supplementation",
        "Seasonal diet adjustments"
      ],
      benefits: [
        "Optimal milk production",
        "Improved animal immune system",
        "Reduced health complications",
        "Consistent milk quality"
      ]
    },
    {
      title: "Technology-Driven Herd Management",
      description: "Cutting-edge technologies for monitoring and maintaining herd health.",
      details: [
        "Real-time health monitoring sensors",
        "AI-powered predictive health analytics",
        "Individual cow tracking systems",
        "Automated milking and health diagnostics"
      ],
      benefits: [
        "Early disease detection",
        "Personalized animal care",
        "Increased operational efficiency",
        "Data-driven decision making"
      ]
    },
    {
      title: "Environmental Sustainability",
      description: "Comprehensive approach to reducing carbon footprint and promoting ecological balance.",
      details: [
        "Renewable energy integration",
        "Water recycling and conservation systems",
        "Methane capture and utilization",
        "Biodiversity preservation programs"
      ],
      benefits: [
        "Reduced carbon emissions",
        "Energy self-sufficiency",
        "Minimal environmental impact",
        "Sustainable farming practices"
      ]
    }
  ];

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="dairy-farm-process-container">
      <div className="process-hero">
        <h1>Our Comprehensive Dairy Farming Process</h1>
        <p>Innovative, Sustainable, and Ethical Dairy Production</p>
      </div>

      <div className="process-techniques-grid">
        {processTechniques.map((technique, index) => (
          <div 
            key={index} 
            className={`process-technique-card ${activeSection === index ? 'active' : ''}`}
            onClick={() => toggleSection(index)}
          >
            <div className="technique-header">
              <h3>{technique.title}</h3>
              <span className="toggle-icon">
                {activeSection === index ? '−' : '+'}
              </span>
            </div>

            <div className="technique-content">
              <p className="technique-description">{technique.description}</p>
              
              {activeSection === index && (
                <div className="technique-details">
                  <div className="details-section">
                    <h4>Key Techniques</h4>
                    <ul>
                      {technique.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="benefits-section">
                    <h4>Benefits</h4>
                    <ul>
                      {technique.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Dailryfarmprocess;