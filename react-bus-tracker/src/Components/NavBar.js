import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import {MdFeedback} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import {useLocation} from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();
  // const location = useLocation()
  // console.log(location.pathname)

  return (
    <div className="bg-black text-white p-3 shadow-sm text-2xl flex justify-between">
      <div>
        <Routes>
          <Route
            path="BusTracker/busview"
            element={
              <HiArrowLeft
                onClick={() => {
                  navigate("BusTracker");
                }}
              />
            }
          />
          <Route
            path="BusTracker/busroute"
            element={
              <HiArrowLeft
                onClick={() => {
                  navigate("BusTracker");
                }}
              />
            }
          />
          <Route
            path="BusTracker/feedback"
            element={
              <HiArrowLeft
                onClick={() => {
                  navigate("BusTracker");
                }}
              />
            }
          />
        </Routes>
      </div>
      <ul>Bus Tracker</ul>
      <div><Routes>
          <Route
            path="BusTracker/busroute"
            element={
              <MdFeedback
                onClick={() => {
                  navigate("BusTracker/feedback");
                }}
              />
            }
          /></Routes></div>
    </div>
  );
};

export default NavBar;
