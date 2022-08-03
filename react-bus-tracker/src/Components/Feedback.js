import React from "react";

const Feedback = () => {
  return (
    <div>
      <div className="grid gap-4 p-3 m-4 bg-white rounded-lg shadow-lg">
        <h1 className="font-semibold">Feedback</h1>
        <p className="font-thin">Rate the crowd level on the bus</p>
        <div className="flex justify-between p-6">
            <h3 className="font-semibold text-green-600">Low</h3>
          <input className=" scale-150" type="radio" name="feedback" value="low" />
          <input className=" scale-150" type="radio" name="feedback" value="medium" />
          <input className=" scale-150" name="feedback" type="radio" value="high" />
          <input className=" scale-150" name="feedback" type="radio" value="veryhigh" />
          <h3 className="font-semibold text-red-600">Crowded</h3>
        </div>
        <button className="bg-green-500 p-3 rounded-lg font-semibold active:bg-green-600 shadow-sm text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Feedback;
