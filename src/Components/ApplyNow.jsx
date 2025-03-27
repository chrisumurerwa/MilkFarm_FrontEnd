import React, { useState } from 'react';
import '../Styles/ApplyNow.css';

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    farmLocation: '',
    farmSize: '',
    experienceYears: '',
    motivationLetter: '',
    farmType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Application Submitted:', formData);
    alert('Thank you for your application! We will review it shortly.');
  };

  return (
    <div className="mentorship-application-container">
      <div className="application-header">
        <h1>Dairy Farming Mentorship Program</h1>
        <p>Join our mission to transform dairy farming</p>
      </div>

      <form className="mentorship-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="farmLocation">Farm Location</label>
            <input
              type="text"
              id="farmLocation"
              name="farmLocation"
              value={formData.farmLocation}
              onChange={handleChange}
              required
              placeholder="City, Region, Country"
            />
          </div>

          <div className="form-group">
            <label htmlFor="farmSize">Farm Size (Acres)</label>
            <input
              type="number"
              id="farmSize"
              name="farmSize"
              value={formData.farmSize}
              onChange={handleChange}
              required
              placeholder="Total farm area"
            />
          </div>

          <div className="form-group">
            <label htmlFor="experienceYears">Years of Dairy Farming</label>
            <input
              type="number"
              id="experienceYears"
              name="experienceYears"
              value={formData.experienceYears}
              onChange={handleChange}
              required
              placeholder="Years of experience"
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="farmType">Type of Dairy Farm</label>
            <select
              id="farmType"
              name="farmType"
              value={formData.farmType}
              onChange={handleChange}
              required
            >
              <option value="">Select Farm Type</option>
              <option value="smallScale">Small Scale</option>
              <option value="mediumScale">Medium Scale</option>
              <option value="largeScale">Large Scale</option>
              <option value="organic">Organic</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="motivationLetter">Why Do You Want to Join Our Mentorship Program?</label>
            <textarea
              id="motivationLetter"
              name="motivationLetter"
              value={formData.motivationLetter}
              onChange={handleChange}
              required
              placeholder="Share your dairy farming goals and aspirations"
              rows="5"
            ></textarea>
          </div>
        </div>

        <div className="form-submission">
          <button type="submit" className="submit-button">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyNow;