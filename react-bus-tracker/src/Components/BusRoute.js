import Progess from "./Progess";
import { useSearchParams } from "react-router-dom";
import {useState} from 'react'

const BusRoute = () => {
  // var name;
  // var stop,time = [];

  // const [busname,setbusname]=useState("")

  // const [searchParams, setSearchParams] = useSearchParams();
  // const id = searchParams.get("id");
  // console.log(id);

  // fetchBusDetails(id).then((data) => {
  //   // console.log(data);
  //   name = data.name;
  //   stop = data.routes;
  //   time= data.time;
  //   console.log(stop);
  //   console.log(time)
  //   setbusname(name)
  // });

  // async function fetchBusDetails(id) {
  //   const responce = await fetch(`http://localhost:4000/busroute?id=${id}`, {
  //     headers: { "Access-Control-Allow-Origin": "*" },
  //   });
  //   const data = await responce.json();
  //   return data;
  // }

  const [searchParams, setSearchParams] = useSearchParams();
    const id= searchParams.get("id");

  

  const [idx,setidx]=useState("")
  const [namex,setnamex]=useState("")
  const [timex,settimex]=useState("")
  const [destx,setdestx]=useState("")
  const [routex,setroutex]=useState([])
  const [timesx,settimesx]=useState([])

    fetchBusDetails(id).then((data) => {
      console.log("BUs route",data);
      
      setidx(data.id)
      setnamex(data.name)
      settimex(data.time)
      setdestx(data.route)
      setroutex(data.routes)
      settimesx(data.times)
    });

    async function fetchBusDetails(id) {
      const responce = await fetch(
        `http://localhost:4000/busroute?id=${id}`,
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );
      const data = await responce.json();
      return data;
    }

    var routesdata = routex.map(function(dat){
      return <ul>{dat}</ul>
    })
    var timesdata = timesx.map(function(dat){
      return <ul>{dat}</ul>
    })


  return (
    <div>
      <div className="pl-14 p-4 m-4 shadow-lg rounded-lg bg-white">
        <h1 className="font-bold text-lg">{namex}</h1>
        <div className="flex justify-around">
          <Progess percentage={"33%"} />
          <div className="grid place-content-between p-4 font-semibold">
            
          {/* <ul>{routex[0]}</ul> */}
          {routesdata}
          
            
          </div>
          <div className="grid place-content-between p-4 font-semibold text-green-500">
            {/* <ul>{timesx[0]}</ul> */}
            {timesdata}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusRoute;
