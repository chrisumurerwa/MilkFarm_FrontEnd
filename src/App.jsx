import { useState } from "react";
import "./App.css";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Feed from "./Components/Feed";
import Farming from "./Components/Farming";
import Contact from "./Components/Contact";
import Mentorship from "./Components/Mentorship";
import Veterinary from "./Components/Veterinary";
import MarketLinkagesPage from "./Components/MarketLinkages";
import Main from "./Dashboard/components/Main";
import GetInTouch from "./Components/GetInTouch";
import Search from "./Components/Search";
import DashboardLayout from "./Dashboard/components/DashboardLayout";
import SingleAppointment from "./Components/SingleAppointment";
import SingleProduct from "./Components/SingleProduct";
import Singlefarm from "./Components/SingleFarm";
import SingleProcess from "./Components/SingleProcess";
import Dairlyfarmprocess from "./Components/Dairlyfarmprocess";
import ApplyNow from "./Components/ApplyNow";
import Healthcheckup from "./Components/Healthcheckup";
import Diseaseprevention from "./Components/Diseaseprevention";
import Emergencycare from "./Components/Emergencycare";


import Appointment from "./Dashboard/components/Appointment";
import Milkproduction from "./Dashboard/components/Milkproduction";
import MedicalCheckup from "./Dashboard/components/MedicalCheckup";
import Births from "./Dashboard/components/Births";
import MentorshipApp from "./Dashboard/components/MentorshipApp";

function App() {
  return (
    <>
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Feed" element={<Feed />} />
              <Route path="/Farming" element={<Farming/>}/>
              <Route path="/Mentorship" element={<Mentorship/>}/>
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Veterinary" element={<Veterinary/>}/>
              <Route path="/SingleAppointment" element={<SingleAppointment/>}/>
              <Route path="/MarketLinkages" element={<MarketLinkagesPage/>}/>
              <Route path="/GetInTouch" element={<GetInTouch/>}/>
              <Route path="/Search" element={<Search/>}/>
              <Route path="/single-product" element={<SingleProduct/>}/>
              <Route path="/single-farm" element={<Singlefarm/>}/>
              <Route path="/single-process" element={<SingleProcess/>}/>
              <Route path="/Dairlyfarmprocess" element={<Dairlyfarmprocess/>}/>
              <Route path="/ApplyNow" element={<ApplyNow/>}/>
              <Route path="/Healthcheckup" element={<Healthcheckup/>}/>
              <Route path="/Diseaseprevention" element={<Diseaseprevention/>}/>
              <Route path="/Emergencycare" element={<Emergencycare/>}/>

              
            </Route>

            <Route path="/Login" element={<Login/>} />
            <Route path="/" element={<DashboardLayout/>} >
            <Route path="/" index element={<Main/>}/>
            <Route path="/Dashboard"  element={<Main/>}/>
            <Route path="/MentorshipApp" element={<MentorshipApp/>}/>
            <Route path="/Appointment" element={<Appointment/>}/>
            <Route path="/Milkproduction" element={<Milkproduction/>}/>
            <Route path="/MedicalCheckup" element={<MedicalCheckup/>}/>
            <Route path="/Births" element={<Births/>}/>
            </Route>

          </Routes>
          
      </BrowserRouter>
    </>
  );
}

export default App;
