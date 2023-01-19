import './App.css';
import React, { useState } from "react";
import NavBar from './components/navBar.js';
import ParkingLocations from './components/ParkingLocations';
import StartMessage from './components/startMessage';
import BuySpotPopup from './components/buySpotPopup';
import locations from './locations';

function App() {
  const [showLocations, setShowLocations] = useState(false);
  const [parkingSpotData, setParkingSpotData] = useState(null);

  return (
    <div className="App">
      <NavBar setShowLocations={setShowLocations}></NavBar>
      {showLocations ? (
        <ParkingLocations locations={locations} setParkingSpotData={setParkingSpotData}></ParkingLocations>
      ) : (
        <StartMessage setShowLocations={setShowLocations}></StartMessage>
      )}
      {parkingSpotData && (
        <BuySpotPopup parkingSpotData={parkingSpotData} setParkingSpotData={setParkingSpotData}></BuySpotPopup>
      )}
    </div>
  );
}

export default App;
