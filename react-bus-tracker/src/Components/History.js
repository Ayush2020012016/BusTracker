import React from "react";
import BusViewItem from "./BusViewItem";

const History = () => {

  return (
    <div className="p-3 m-4 shadow-lg rounded-lg bg-white">
      <p className="font-semibold">Search History</p>
      <BusViewItem id="1" name="St John" time="6pm - 7pm" dest="RIT - Pampady" /> 
      <BusViewItem id="1" name="St John" time="6pm - 7pm" dest="RIT - Pampady" /> 
      <BusViewItem id="1" name="St John" time="6pm - 7pm" dest="RIT - Pampady" /> 
    </div>
  );
};

export default History;
