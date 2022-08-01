import NavPane from "./Components/NavPane";


function App() {

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      // console.log("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude : ",position.coords.latitude);
          console.log("Longitude : ",position.coords.longitude);
        },
        () => {
          console.log("Unable to retrieve your location");
        }
      );
    }
  };

  
  return (
    <div>
      <NavPane />
      {getLocation()}
    </div>
  );
}

export default App;
