import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBus = () => {
  const navigate = useNavigate();

  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");

  const onSubmit = () => {
    if (!startLocation) {
      alert("Please add a starting point.");
      return;
    }
    if (!destination) {
      alert("Please add a destination.");
      return;
    }

    fetchBusDetails(startLocation, destination).then((data) => {
      console.log(data);
      navigate(`/BusTracker/busview?from=${startLocation}&to=${destination}`);
      
    });

    setStartLocation("");
    setDestination("");
  };

  async function fetchBusDetails(startLocation, destination) {
    const responce = await fetch(
      `http://localhost:4000/search?from=${startLocation}&to=${destination}`,
      {
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    );
    const data = await responce.json();
    return data;
  }

  return (
    <div>
      <div className="grid gap-4 p-3 m-4 bg-white rounded-lg shadow-lg">
        <input
          input="text"
          placeholder="From Bus Stop"
          className="p-3 rounded-lg shadow-sm border-2 border-blue-300"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
        />
        <input
          input="text"
          placeholder="To Bus Stop"
          className="p-3 rounded-lg shadow-sm border-2 border-green-300"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button
          className="bg-green-500 p-3 rounded-lg font-semibold active:bg-green-600 shadow-sm text-white"
          onClick={onSubmit}
        >
          Find Buses
        </button>
      </div>
    </div>
  );
};

export default SearchBus;
