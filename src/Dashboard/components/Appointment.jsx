import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";

const Appointment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [app, setApp] = useState([]);
  const [appointments, setAppointments] = useState([
    { id: 1, name: "", email: "", service: "", date: "", time: "" },
    { id: 2, name: "", email: "", service: "", date: "", time: "" },
    { id: 3, name: "", email: "", service: "", date: "", time: "" },
  ]);

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const getAllappoint = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5001/getAppointments/getAppointments`
        );
        setApp(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllappoint();
  },[]);

  return (
    <div className="appointment-dashboard">
      <div className="dashboard-header">
        <h1>User Appointments</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* <button className="search-button"></button> */}
        </div>
      </div>

      <div className="table-container">
        {filteredAppointments.length > 0 ? (
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Date</th>
                <th>Time</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {app.map((appointment,index) => (
                <tr key={appointment._id}>
                  <td>{index+1}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.service}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td className="action-buttons">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-data">
            <p>No appointments found. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
