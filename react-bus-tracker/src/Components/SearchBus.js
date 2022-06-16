import React from "react";
import { useState } from "react";

const SearchBus = ({ onClick,search }) => {
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");

  const onSubmit = (e) => {
    onClick()
    e.preventDefault();

    if (!startLocation) {
      alert("Please add a starting point.");
      return;
    }
    if (!destination) {
      alert("Please add a destination.");
      return;
    }

    console.log("Starting, Destination :",startLocation, destination);
    search({ startLocation, destination });
    setStartLocation("");
    setDestination("");
  };

  return (
    <div>
      <div className="grid gap-4 p-3 bg-white m-4 rounded-lg shadow-lg">
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
          onClick={ onSubmit
          }
        >
          Find Buses
        </button>
      </div>
    </div>
  );
};

export default SearchBus;
