import Progess from "./Progess";

const BusRoute = () => {
  return (
    <div>
      <div className="pl-14 p-4 m-4 shadow-lg rounded-lg bg-white">
        <div className="flex">
          <Progess percentage={"76%"} />
          <div className="grid place-content-between p-4 font-semibold">
            <ul>8th Mile</ul>
            <ul>8th Mile</ul>
            <ul>8th Mile</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusRoute;
