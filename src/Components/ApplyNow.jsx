import React, { useState } from 'react';
import '../Styles/ApplyNow.css';
import { useNavigate } from 'react-router-dom';

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    farmLocation: '',
    farmSize: '',
    yearsOfDairyFarming: '',
    mentorshipGoals: '',
    typeOfDairyFarm: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const navigate=useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response =await fetch('http://localhost:5001/apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      alert('Error submitting application. Please try again later.');
      return;
    }
    // Reset form after successful submission
    console.log('Application Submitted:', formData);
    navigate('/Dashboard')

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
              name="phoneNumber"
              value={formData.phoneNumber}
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
              name="yearsOfDairyFarming"
              value={formData.yearsOfDairyFarming}
              onChange={handleChange}
              required
              placeholder="Years of experience"
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="farmType">Type of Dairy Farm</label>
            <select
              id="farmType"
              name="typeOfDairyFarm"
              value={formData.typeOfDairyFarm}
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
              name="mentorshipGoals"
              value={formData.mentorshipGoals}
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