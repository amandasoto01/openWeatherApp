import { useState, useEffect } from "react";
import City from "./City";
import TodayForecast from "./TodayForecast";
import AirCondition from "./AirCondition";
import WeatherFacade from "../services/WeatherFacade";
import WeekForecast from "./WeekForecast";

export default function LayoutContent() {
  const [search, setSearch] = useState("");
  const [cityCurrent, setCityCurrent] = useState({});
  const [cityForecast, setCityForecast] = useState({});
  const [airConditions, setAirConditions] = useState({});
  const [weekForecast, setWeekForecast] = useState({});

  useEffect(() => {
    const findInitialCity = async () => {
      const result = await WeatherFacade.findByName("Bogota");
      const forecast = await WeatherFacade.getForecast(
        result.coord.lat,
        result.coord.lon
      );
      setCityCurrent(result);
      setCityForecast(forecast);
      setAirConditions(forecast.current);
      setWeekForecast(forecast.daily);
    };
    findInitialCity();
  }, []);

  const onKeyUpValueHandler = (event: any) => {
    const setData = async () => {
      setSearch(event.target.value);
      const cityName = search !== "" ? search : "bogota";
      if (event.key === "Enter" && event.target.value !== "") {
        const result = await WeatherFacade.findByName(cityName);
        setCityCurrent(result);

        if (result?.main) {
          setCityCurrent(result);
        }

        if (result?.coord) {
          const lat = result.coord.lat;
          const lon = result.coord.lon;
          const forecast = await WeatherFacade.getForecast(lat, lon);
          setCityForecast(forecast);
          setAirConditions(forecast.current);
          console.log("daily ", forecast.daily);
          setWeekForecast(forecast.daily);
        }
      }
    };
    setData();
  };

  return (
    <div>
      <header>
        <h1>Weather App</h1>
      </header>
      <div>
        <input
          type="text"
          placeholder="Search for cities"
          //onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) => onKeyUpValueHandler(e)}
        />
      </div>
      <City city={cityCurrent}></City>
      <TodayForecast city={cityForecast}></TodayForecast>
      <AirCondition city={airConditions}></AirCondition>
      <WeekForecast city={weekForecast}></WeekForecast>
    </div>
  );
}
