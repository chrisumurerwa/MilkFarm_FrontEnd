import React from 'react';
import { 
  ShieldCheck, 
  Droplet, 
  Thermometer, 
  Stethoscope, 
  Beaker, 
  ClipboardList 
} from 'lucide-react';
import '../Styles/Diseaseprevention.css';

const DiseasePrevention = () => {
  return (
    <div className="milk-farm-disease-prevention-container">
      <header className="prevention-header">
        <div className="header-content">
          <h1>Milk Farm Disease Prevention Strategies</h1>
          <p>Protecting cattle  Health and Milk Quality</p>
        </div>
      </header>

      <section className="prevention-core-challenges">
        <h2>Key Disease Challenges in Milk Farms</h2>
        <div className="challenges-grid">
          <div className="challenge-card">
            <Droplet className="challenge-icon" aria-hidden="true" />
            <h3>Mastitis Prevention</h3>
            <p>Comprehensive strategies to prevent and manage udder infections that impact milk quality and cow health.</p>
          </div>
          <div className="challenge-card">
            <Thermometer className="challenge-icon" aria-hidden="true" />
            <h3>Metabolic Disorders</h3>
            <p>Proactive management of nutritional and metabolic conditions affecting dairy cow productivity.</p>
          </div>
          <div className="challenge-card">
            <Stethoscope className="challenge-icon" aria-hidden="true" />
            <h3>Reproductive Health</h3>
            <p>Advanced protocols to maintain optimal reproductive health and minimize fertility-related issues.</p>
          </div>
          <div className="challenge-card">
            <Beaker className="challenge-icon" aria-hidden="true" />
            <h3>Zoonotic Disease Control</h3>
            <p>Comprehensive measures to prevent transmission of diseases between animals and humans.</p>
          </div>
        </div>
      </section>

      <section className="prevention-strategies">
        <div className="strategies-content">
          <div className="strategies-text">
            <h2>Comprehensive Disease Prevention Protocol</h2>
            <ul>
              <li>
                <strong>Hygiene Management:</strong> Strict cleaning and sanitization protocols for milking areas, equipment, and cow living spaces.
              </li>
              <li>
                <strong>Vaccination Programs:</strong> Customized immunization schedules targeting farm-specific disease risks.
              </li>
              <li>
                <strong>Nutritional Optimization:</strong> Balanced diet and supplements to enhance immune system resilience.
              </li>
              <li>
                <strong>Regular Health Monitoring:</strong> Systematic health checks and early detection mechanisms.
              </li>
              <li>
                <strong>Environmental Control:</strong> Managing farm conditions to minimize disease transmission risks.
              </li>
            </ul>
          </div>
          <div className="strategies-diagnostic">
            <div className="diagnostic-card">
              <ClipboardList className="diagnostic-icon" aria-hidden="true" />
              <h3>Diagnostic Approach</h3>
              <p>Advanced screening techniques including:</p>
              <ul>
                <li>Regular milk quality tests</li>
                <li>Blood parameter analysis</li>
                <li>Genetic resistance screening</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="milk-quality-impact">
        <h2>Impact of Disease Prevention on Milk Quality</h2>
        <div className="quality-metrics">
          <div className="metric-card">
            <h3>Milk Somatic Cell Count</h3>
            <p>Reduced by up to 60% through strategic prevention</p>
          </div>
          <div className="metric-card">
            <h3>Bacterial Contamination</h3>
            <p>Minimized to less than 10,000 CFU/ml</p>
          </div>
          <div className="metric-card">
            <h3>Antibiotic Usage</h3>
            <p>Decreased by 75% with proactive health management</p>
          </div>
        </div>
      </section>

      <section className="biosecurity-protocols">
        <h2>Advanced Biosecurity Protocols</h2>
        <div className="protocol-steps">
          <div className="protocol-step">
            <span className="step-number">1</span>
            <h4>Controlled Farm Access</h4>
            <p>Restricted entry and comprehensive visitor management protocols.</p>
          </div>
          <div className="protocol-step">
            <span className="step-number">2</span>
            <h4>Quarantine Procedures</h4>
            <p>Systematic isolation and monitoring of new or sick animals.</p>
          </div>
          <div className="protocol-step">
            <span className="step-number">3</span>
            <h4>Continuous Training</h4>
            <p>Regular staff education on disease prevention and biosecurity.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default DiseasePrevention;
