import React from "react";
import NavBar from "./NavBar";
import History from "./History";
import SearchBus from "./SearchBus";
import BusView from "./BusView";
import { useState } from "react";
import BusRoute from "./BusRoute";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavPane = () => {

  const history = useNavigate();

  // const [toggleBusView, setToggleBusView] = useState(false);
  // const [toggleArrow, setToggleArrow] = useState(false)

  return (
      <div className="h-screen border-r-2 border-slate-200 shadow-xl bg-gray-100 overflow-y-auto">
        
        <NavBar
          // show={toggleBusView}
          // goBack={() => {setToggleBusView(!toggleBusView);history("BusTracker/")}}
          goBack={()=>{history("BusTracker")}}
        />
        <div className="grid md:grid-cols-2">
          <div>
            {/* {toggleBusView ? (
              ""
            ) : (
              // <SearchBus onClick={() => setToggleBusView(!toggleBusView)} />
              <SearchBus onClick={() => {history("BusTracker/busview")}} />
            )} */}
            {/* {toggleBusView ? <BusView /> : ""} */}
            {/* {toggleBusView ? "" : <History />} */}
            

            <Routes>
              <Route path="BusTracker" element={<SearchBus/>} />
            </Routes>
            <Routes>
              <Route path="BusTracker/busview" element={<BusView/>} />
            </Routes>
            <Routes>
              <Route path="BusTracker" element={<History/>} />
            </Routes>

          </div>
          <div>
            {/* For displaying bus progress only on visiting /busroute  */}
            {/* <BusRoute /> */}
            <Routes>
              <Route path="/busroute" element={<BusRoute />} />
            </Routes>
          </div>
        </div>
      </div>
  );
};

export default NavPane;
