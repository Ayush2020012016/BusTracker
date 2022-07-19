import React from "react";
import NavBar from "./NavBar";
import History from "./History";
import SearchBus from "./SearchBus";
import BusView from "./BusView";
import { useState } from "react";
import BusRoute from "./BusRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const NavPane = () => {
  const [toggleBusView, setToggleBusView] = useState(false);
  // const [toggleArrow, setToggleArrow] = useState(false)

  return (
    <BrowserRouter>
      <div className="h-screen border-r-2 border-slate-200 shadow-xl bg-gray-100 overflow-y-auto">
        <NavBar
          show={toggleBusView}
          goBack={() => setToggleBusView(!toggleBusView)}
        />
        <div className="grid md:grid-cols-2">
          <div>
            {toggleBusView ? (
              ""
            ) : (
              <SearchBus onClick={() => setToggleBusView(!toggleBusView)} />
            )}
            {toggleBusView ? <BusView /> : ""}

            {toggleBusView ? "" : <History />}
          </div>
          <div>
            <Routes>
              <Route path="BusTracker/busroute" element={<BusRoute />} />
            </Routes>
            <BusRoute />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default NavPane;
