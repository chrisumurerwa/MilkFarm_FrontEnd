import React from 'react';
import '../styles/MentorshipApp.css';


function MentorshipApp() {
  return (
    <div className="mentorship-container">
      <h1 className="page-title">Mentorship Applications</h1>
      <div className="table-container">
     
          
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Farm Location</th>
              <th>Farm Size</th>
              <th>Years of Dairy Farming</th>
              <th>Mentorship Goals</th>
              <th>Type of Dairy Farm</th>
            </tr>
          
          {/* <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+1234567890</td>
              <td>New York</td>
              <td>50 acres</td>
              <td>5 years</td>
              <td>Improve milk production</td>
              <td>Organic Dairy</td>
            </tr>
          </tbody> */}
       
      </div>
    </div>
  );
}

export default MentorshipApp;
