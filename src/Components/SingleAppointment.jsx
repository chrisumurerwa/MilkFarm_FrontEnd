import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/SingleAppointment.css';

function SingleAppointment() {
  const { id } = useParams(); // Assuming appointments have unique IDs

  // State to store form data
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    service: 'checkup',
    date: '',
    time: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5001/bookAppointment/bookAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert('Appointment booked successfully!');
        setFormData({ customerName: '', customerEmail: '', service: 'checkup', date: '', time: '' }); // Reset form
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="appointmentcontainer">
      <h2>Book Veterinary Appointment</h2>
      <form className="appointment-details" onSubmit={handleSubmit}>
        <label htmlFor="customerName">Customer Name:</label>
        <input type="text" id="customerName" className="customer-input" placeholder="Enter your name" value={formData.customerName} onChange={handleChange} required />

        <label htmlFor="customerEmail">Customer Email:</label>
        <input type="email" id="customerEmail" className="customer-input" placeholder="Enter your email" value={formData.customerEmail} onChange={handleChange} required />

        <label htmlFor="service">Select Service:</label>
        <select id="service" className="service-dropdown" value={formData.service} onChange={handleChange}>
          <option value="checkup">General Checkup</option>
          <option value="treatment">Treatment</option>
          <option value="consultation">Consultation</option>
        </select>

        <label htmlFor="date">Select Date:</label>
        <input type="date" id="date" className="date-picker" value={formData.date} onChange={handleChange} required />

        <label htmlFor="time">Select Time:</label>
        <input type="time" id="time" className="time-picker" value={formData.time} onChange={handleChange} required />

        <button type="submit" className="book-btn">Book Appointment</button>
      </form>
    </div>
  );
}

export default SingleAppointment;
