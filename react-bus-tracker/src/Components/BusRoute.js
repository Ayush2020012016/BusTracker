import Progess from "./Progess";

const BusRoute = () => {
  return (
    <div>
      <div className="pl-14 p-4 m-4 shadow-lg rounded-lg bg-white">
        <h1 className="font-bold text-lg">St. John</h1>
        <div className="flex justify-around">
          <Progess percentage={"76%"} />
          <div className="grid place-content-between p-4 font-semibold">
            <ul>8th Mile</ul>
            <ul>8th Mile</ul>
            <ul>8th Mile</ul>
          </div>
          <div className="grid place-content-between p-4 font-semibold text-green-500">
            <ul>7pm</ul>
            <ul>7.30pm</ul>
            <ul>8pm</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusRoute;
