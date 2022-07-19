import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const NavBar = ({ goBack }) => {

  const history = useNavigate()

  return (
    <div className="bg-black text-white p-3 shadow-sm text-2xl flex justify-between">
      <div>
        <Routes>
          <Route path="BusTracker/busroute" element={<HiArrowLeft onClick={goBack}/>} />
        </Routes>
      </div>
      <ul>Bus Tracker</ul>
      <div></div>
    </div>
  );
};

export default NavBar;
