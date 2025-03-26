import React from 'react';
import '../Styles/SingleProcess.css';

const SingleProcess = () => {
  const processSteps = [
    {
      title: "Traditional Animal Care",
      description: "Holistic approach to animal welfare with personalized attention and stress-free environments.",
      color: "#3498db"
    },
    {
      title: "Sustainable Grazing",
      description: "Rotational grazing methods that promote soil health and natural cattle nutrition.",
      color: "#2ecc71"
    },
    {
      title: "Innovative Monitoring",
      description: "Advanced health tracking using IoT sensors and predictive analytics for optimal herd management.",
      color: "#9b59b6"
    },
    {
      title: "Ecological Practices",
      description: "Minimizing carbon footprint through renewable energy and responsible waste management.",
      color: "#e67e22"
    }
  ];

  return (
    <div className="dairy-process-container">
      <div className="hero-section">
        <h1>Our Dairy Farming Process</h1>
        <p>Bridging tradition with cutting-edge innovation</p>
      </div>

      <div className="process-steps">
        {processSteps.map((step, index) => (
          <div 
            key={index} 
            className="process-step"
            style={{
              borderTop: `5px solid ${step.color}`,
              boxShadow: `0 10px 20px rgba(${getColorRGB(step.color)}, 0.1)`
            }}
          >
            <div className="step-content">
              <h3 style={{ color: step.color }}>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Discover Our Commitment to Quality</h2>
        <button className="cta-button">Learn More About Our Process</button>
      </div>
    </div>
  );
};

// Helper function to convert hex to RGB for box-shadow
function getColorRGB(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

export default SingleProcess;