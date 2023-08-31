import React, { useState, useEffect } from "react";
import "./App.css";
import { WeatherData } from "./WeatherData";
import WeatherFacade from "./services/WeatherFacade";
import City from "./components/City";
import TodayForecast from "./components/TodayForecast";
import AirCondition from "./components/AirCondition";
import LayoutContent from "./components/LayoutContent";

function App() {
  const [search, setSearch] = useState("");

  const onKeyUpValueHandler = async (event: any) => {
    const value = event.target.value;
    // console.log("app value ", value);
    setSearch(value);
    // return value;
  };

  return (
    <div className="App">
      {/* <header>
        <h1>Weather App</h1>
      </header>
      <div>
        <input
          type="text"
          placeholder="Search for cities"
          onChange={(e) => setSearch(e.target.value)}
          // onKeyUp={(e) => onKeyUpValueHandler(e)}
        />
      </div> */}
      <LayoutContent></LayoutContent>
    </div>
  );
}

export default App;
