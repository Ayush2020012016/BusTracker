import React, { useEffect } from "react";
import BusViewItem from "./BusViewItem";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useCallback } from "react";

const BusView = () => {
  // const location = useLocation();
  // console.log(location.pathname);

  const [searchParams, setSearchParams] = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");



  const [busdata, setBusdata] = useState("");
  const [idx, setidx] = useState("");
  const [namex, setnamex] = useState("");
  const [timex, settimex] = useState("");
  const [destx, setdestx] = useState("");

  useEffect(() => {
    fetch(
          `http://localhost:4000/search?from=${from}&to=${to}`,
          {
            headers: { "Access-Control-Allow-Origin": "*" },
          }
        ).then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setBusdata(data);
      });
  }, []);

  useEffect(() => {
    setidx(busdata.id);
    setnamex(busdata.name);
    settimex(busdata.time);
    setdestx(busdata.route);
  }, [busdata]);


  return (
    <div className="m-4 p-3 gap-3 bg-white rounded-lg">
      <h3 className="font-semibold">Available Buses</h3>
      <BusViewItem id={idx} name={namex} time={timex} dest={destx} />
    </div>
  );
};

export default BusView;
