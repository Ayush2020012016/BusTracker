import React from "react";
import NavBar from "./NavBar";
// import History from "./History";
import SearchBus from "./SearchBus";
import BusView from "./BusView";
import BusRoute from "./BusRoute";
import { Routes, Route } from "react-router-dom";
// import { useState} from "react";

const NavPane = () => {
  

  return (
    <div className="h-screen border-r-2 border-slate-200 shadow-xl bg-gray-100 overflow-y-auto">
      <NavBar />
      <div className="grid md:grid-cols-2">
        <div>
          <Routes>
            <Route
              path="BusTracker"
              element={<SearchBus/>}
            />
          </Routes>
          <Routes>
            <Route exact
              path="BusTracker/busview"
              element={<BusView/>}
            />
          </Routes>
        </div>
        <div>
          <Routes>
            <Route path="BusTracker/busroute" element={<BusRoute />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default NavPane;
