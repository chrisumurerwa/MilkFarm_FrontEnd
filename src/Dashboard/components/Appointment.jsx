
import React, { useState } from "react";
import '../styles/Appointment.css'; // Adjust the path as necessary

const Appointment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const appointments = [
    { id: 1, name: "", email: "", service: "", date: "", time: "" },
    { id: 2, name: "", email: "", service: "", date: "", time: "" },
    { id: 3, name: "", email: "", service: "", date: "", time: "" },
  ];

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="appointment-container">
      <h1>User Appointment</h1>
      <input
        type="text"
        placeholder="Search users..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.name}</td>
              <td>{appointment.email}</td>
              <td>{appointment.service}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointment;