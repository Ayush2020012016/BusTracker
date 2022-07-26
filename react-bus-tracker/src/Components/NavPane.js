import React from "react";
import NavBar from "./NavBar";
import History from "./History";
import SearchBus from "./SearchBus";
import BusView from "./BusView";
import BusRoute from "./BusRoute";
import { Routes, Route } from "react-router-dom";
// import { useState} from "react";
// import Bus from './svg/bus.gif'

const NavPane = () => {
  var id, name, time, stop;

  const viewbus = (data) => {
    id = data.id;
    name = data.name;
    time = data.time;
    stop = data.routes;
    // console.log(id, name, time, stop);
    
  };

  return (
    <div className="h-screen border-r-2 border-slate-200 shadow-xl bg-gray-100 overflow-y-auto">
      <NavBar />
      <div className="grid md:grid-cols-2">
        <div>
          <Routes>
            <Route
              exact
              path="BusTracker"
              element={<SearchBus viewBusData={(e) => viewbus(e)} />}
            />
          </Routes>
          <Routes>
            <Route
              exact
              path="BusTracker/busview"
              element={<BusView id={id} name={name} time={time} dest={name} />}
            />
          </Routes>
          {/* <Routes>
            <Route
              exact
              path="BusTracker"
              element={
                <History
                id={id} name={name} time={time} dest={name}
                />
              }
            />
          </Routes> */}

          
          {/* <Routes>
          <Route exact path="BusTracker/busroute" element={<img src={Bus} className="rounded-2xl m-3 shadow-xl h-96 mt-72"/>}/>
          </Routes> */}
        </div>
        <div>
          <Routes>
            <Route exact path="BusTracker/busroute" element={<BusRoute />} />
          </Routes>
          {/* <Routes>
          <Route exact path="BusTracker" element={<img src={Bus} className="rounded-2xl m-3 shadow-xl h-96 mt-40"/>}/>
          </Routes> */}
        </div>
      </div>
    </div>
  );
};

export default NavPane;
