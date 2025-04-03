import React, { useState } from 'react';
import { 
  Ambulance, 
  PhoneCall, 
  Clock, 
  Shield, 
  Stethoscope, 
  AlertCircle 
} from 'lucide-react';
import '../Styles/Emergencycare.css';

const EmergencyCare = () => {
  const [activeTab, setActiveTab] = useState('services');

  const emergencyServices = [
    {
      icon: <Ambulance className="service-icon" />,
      title: "Mobile Veterinary Units",
      description: "Fully equipped mobile clinics ready to respond to critical situations across farm locations."
    },
    {
      icon: <Stethoscope className="service-icon" />,
      title: "Specialized Emergency Treatment",
      description: "Immediate medical interventions for various livestock emergency conditions."
    },
    {
      icon: <Shield className="service-icon" />,
      title: "Rapid Response Protocols",
      description: "Systematic approach to handle critical medical emergencies with precision and care."
    }
  ];

  const emergencySteps = [
    {
      number: "1",
      title: "Immediate Assessment",
      description: "Rapid evaluation of the animal's condition using advanced diagnostic tools."
    },
    {
      number: "2",
      title: "Urgent Intervention",
      description: "Implementing immediate medical procedures to stabilize the animal's health."
    },
    {
      number: "3",
      title: "Comprehensive Follow-up",
      description: "Detailed monitoring and continued care post-emergency treatment."
    }
  ];

  return (
    <div className="emergency-care-container">
      <header className="emergency-header">
        <div className="header-content">
          <h1>24/7 Emergency Veterinary Care</h1>
          <p>Immediate Professional Support for Your Livestock</p>
        </div>
      </header>

      <section className="emergency-contact">
        <div className="contact-info">
          <PhoneCall className="contact-icon" />
          <div className="contact-details">
            <h2>Emergency Hotline</h2>
            <p>+25 0721284499</p>
            <span>Available 24 Hours a Day, 7 Days a Week</span>
          </div>
        </div>
      </section>

      <section className="emergency-services">
        <h2>Our Emergency Services</h2>
        <div className="services-grid">
          {emergencyServices.map((service, index) => (
            <div key={index} className="service-card">
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="emergency-process">
        <h2>Our Emergency Response Process</h2>
        <div className="process-steps">
          {emergencySteps.map((step, index) => (
            <div key={index} className="process-step">
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="emergency-preparedness">
        <div className="preparedness-content">
          <AlertCircle className="preparedness-icon" />
          <div className="preparedness-text">
            <h2>Emergency Preparedness</h2>
            <p>We recommend having an emergency plan in place:</p>
            <ul>
              <li>Keep our emergency contact information readily available</li>
              <li>Maintain a basic first aid kit for livestock</li>
              <li>Know the exact location and access points of your farm</li>
              <li>Have animal medical history documents accessible</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Are You Facing a Livestock Emergency?</h2>
        <p>Our veterinary team is ready to provide immediate assistance</p>
        <button className="emergency-call-btn">Call Emergency Line</button>
      </section>
    </div>
  );
};

export default EmergencyCare;