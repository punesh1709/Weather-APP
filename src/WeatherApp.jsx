import React, { useState } from "react";

import InfoBox1 from "./InfoBox1";
import SearchBox from "./SearchBox";
function WeatherApp() {
  const [WeatherApp, setWeatherApp] = useState({
    city: "delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });
  let updateInfo = (newInfo) =>{
    setWeatherApp(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox1 info={WeatherApp}/>
    </div>
  );
}

export default WeatherApp;
