import React from 'react'
import { useNavigate } from "react-router-dom";

const BusViewItem = ({id,name,time,dest}) => {

  const history = useNavigate();

  
  function fetchBusDetails(id) {
    return fetch(`http://localhost:4000/busroute?id=${id}`,{
      headers: {'Access-Control-Allow-Origin' : '*'}
    })
      .then((response) => console.log(response))
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <div>
        <div className="mt-3 bg-slate-100 p-3 border-l-4 border-green-500" onClick={()=>{history("BusTracker/busroute"); fetchBusDetails(id)}}>
            <ul className="font-semibold">{name}</ul>
            <ul className="font-thin">{time}</ul>
            <ul className="font-semibold">{dest}</ul>
        </div>
    </div>
  )
}

export default BusViewItem