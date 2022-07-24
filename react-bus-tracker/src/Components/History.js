import React from "react";
import BusViewItem from "./BusViewItem";

const History = ({id,name,time,dest}) => {

  return (
    <div className="p-3 m-4 shadow-lg rounded-lg bg-white">
      <p className="font-semibold">Search History</p>
      <BusViewItem id={id} name={name} time={time} dest={dest}/>
      <BusViewItem id={id} name={name} time={time} dest={dest}/>
      <BusViewItem id={id} name={name} time={time} dest={dest}/>
    </div>
  );
};

export default History;
