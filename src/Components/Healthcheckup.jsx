import React from 'react';
import { Shield, Syringe, Stethoscope, CalendarCheck } from 'lucide-react';
import '../Styles/healthcheckup.css';
import Image from '../assets/cow-checkup.jpeg'; // Corrected import path

const Healthcheckup = () => {
  return (
    <div className="cow-health-checkup-container">
      <header className="checkup-header">
        <h1>Comprehensive Cow Health Management</h1>
        <p>Ensuring the Wellness of Your Herd Through Expert Care</p>
      </header>
      
      <section className="checkup-benefits">
        <div className="benefit-card">
          <Shield className="benefit-icon" />
          <h3>Preventive Health Screening</h3>
          <p>Comprehensive health assessments to detect and prevent potential health issues early.</p>
        </div>
        
        <div className="benefit-card">
          <Syringe className="benefit-icon" />
          <h3>Customized Vaccination Programs</h3>
          <p>Tailored vaccination schedules protecting against common livestock diseases.</p>
        </div>
        
        <div className="benefit-card">
          <Stethoscope className="benefit-icon" />
          <h3>Expert Veterinary Consultation</h3>
          <p>Professional guidance and support for maintaining optimal herd health.</p>
        </div>
        
        <div className="benefit-card">
          <CalendarCheck className="benefit-icon" />
          <h3>Regular Monitoring</h3>
          <p>Systematic health tracking and proactive intervention strategies.</p>
        </div>
      </section>
      
      <section className="vaccination-details">
        <h2>Our Vaccination Approach</h2>
        <div className="vaccination-content">
          <div className="vaccination-text">
            <p>Our specialized health checkup program includes:</p>
            <ul>
              <li>Comprehensive initial health assessment</li>
              <li>Disease-specific vaccination protocols</li>
              <li>Individualized herd health management</li>
              <li>Quarterly follow-up evaluations</li>
              <li>Detailed health reporting and recommendations</li>
            </ul>
          </div>
          <div className="vaccination-image">
            <img src={Image} alt="Cow Health Checkup" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcheckup;