import React from 'react';
import '../styles/Sidebar.css';
import { MdDashboard } from "react-icons/md";
import { LuMilk } from "react-icons/lu";
import { TbCheckupList } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LiaHireAHelper } from "react-icons/lia";
import { RiListOrdered2 } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
const Sidebar = () => {
  // Get current path to determine active link
  const currentPath = window.location.pathname;

  return (
    <div className="Sidebar-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Milk Farm</h2>
        <ul>
          <li>
            <Link to="/Dashboard" className={currentPath === "/Dashboard" ? "active" : ""}>
              <MdDashboard className="sidebar-icon" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Users" className={currentPath === "/Users" ? "active" : ""}>
              <FaRegUser className="sidebar-icon" /> Admin
            </Link>
          </li>
          <li>
            <Link to="/Users" className={currentPath === "/Users" ? "active" : ""}>
              <FaCalendarAlt className="sidebar-icon" /> Appointment
            </Link>
          </li>
          <li>
            <Link to="/Users" className={currentPath === "/Users" ? "active" : ""}>
              <RiListOrdered2 className="sidebar-icon" /> Order milk
            </Link>

          </li>
          <li>
            <Link to="/Users" className={currentPath === "/Users" ? "active" : ""}>
              <LiaHireAHelper className="sidebar-icon" />Help center
            </Link>
          </li>
          <li>
            <Link to ="/Milkproduction" className={currentPath === "/Milkproduction" ? "active" : ""}>
              <LuMilk className="sidebar-icon" /> Milk Production
            </Link>
          </li>
          <li>
            <Link to="/medicalCheckup" className={currentPath === "/medicalCheckup" ? "active" : ""}>
              <TbCheckupList className="sidebar-icon" /> MedicalCheckup
            </Link>
          </li>
          <li>
            <Link to="/Births" className={currentPath === "/Births" ? "active" : ""}>
              <FaBaby className="sidebar-icon" /> Births
            </Link>
          </li>
        </ul>
      </aside>
      {/* Main Content */}
    </div>
  );
};

export default Sidebar;