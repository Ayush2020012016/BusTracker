import React, { useEffect } from "react";
import BusViewItem from "./BusViewItem";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
// import { useCallback } from "react";

const BusView = () => {
  const location = useLocation();
  console.log(location.pathname);

  const [searchParams, setSearchParams] = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");

  // var idx,namex,timex,destx

  const [idx, setidx] = useState("");
  const [namex, setnamex] = useState("");
  const [timex, settimex] = useState("");
  const [destx, setdestx] = useState("");


  
//   const [allValues, setAllValues] = useState({
//     idx: '',
//     namex: '',
//     timex: '',
//     destx: '',
//  });


  fetchBusDetails(from, to).then((data) => {
    console.log("BUs view", data);
    // idx=data.id
    // namex=data.name
    // timex=data.time
    // destx=data.route


    setidx(data.id);
    setnamex(data.name);
    settimex(data.time);
    setdestx(data.route);

    // setAllValues({idx:data.id, namex:data.name, timex:data.time, destx:data.route})

  });

  async function fetchBusDetails(from, to) {
    const responce = await fetch(
      `http://localhost:4000/search?from=${from}&to=${to}`,
      {
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    );
    const data = await responce.json();
    return data;
  }

  return (
    <div className="m-4 p-3 gap-3 bg-white rounded-lg">
      <h3 className="font-semibold">Available Buses</h3>
      <BusViewItem id={idx} name={namex} time={timex} dest={destx} />
    </div>
  );
};

export default BusView;
