import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/SingleAppointment.css';

function SingleAppointment() {
  const { id } = useParams(); // Assuming appointments have unique IDs
  
  return (
    <div className="appointmentcontainer">
      <h2>Book Veterinary Appointment</h2>
      <div className="appointment-details">
        <p><strong>Appointment ID:</strong> {id}</p>
        <label htmlFor="service">Select Service:</label>
        <select id="service" className="service-dropdown">
          <option value="checkup">General Checkup</option>
          <option value="treatment">Treatment</option>
          <option value="consultation">Consultation</option>
        </select>
        <label htmlFor="date">Select Date:</label>
        <input type="date" id="date" className="date-picker" />
        <label htmlFor="time">Select Time:</label>
        <input type="time" id="time" className="time-picker" />
        <button className="book-btn">Book Appointment</button>
      </div>
    </div>
  );
}

export default SingleAppointment;
