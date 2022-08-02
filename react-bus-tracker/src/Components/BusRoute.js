import Progess from "./Progess";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BusRoute = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [busdata, setBusdata] = useState("");
  const [routesdata, setRoutesdata] = useState();
  const [timesdata, setTimesdata] = useState();

  useEffect(() => {
    fetch(`http://localhost:4000/busroute?id=${id}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setBusdata(data);
      });
  }, []);

  useEffect(() => {
    // console.log(busdata.routes);
    setRoutesdata(busdata.routes);
    setTimesdata(busdata.times);
  }, [busdata]);

  return (
    <div>
      <div className="pl-14 p-4 m-4 shadow-lg rounded-lg bg-white">
        <h1 className="font-bold text-lg">{busdata.name}</h1>
        <div className="flex justify-around">
          <Progess percentage={"33%"} />
          <div className="grid place-content-between p-4 font-semibold">
            {routesdata==null ? "" : routesdata.map((element) => {
              return <ul key={element}>{element}</ul>;
            })}
          </div>
          <div className="grid place-content-between p-4 font-semibold text-green-500">
            {timesdata==null ? "" : timesdata.map((element) => {
              return <ul key={element}>{element}</ul>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusRoute;
