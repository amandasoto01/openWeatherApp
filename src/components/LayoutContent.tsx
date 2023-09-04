import { useState, useEffect } from "react";
import City from "./city/City";
import TodayForecast from "./TodayForecast";
import AirCondition from "./airCondition/AirCondition";
import { findByName, getForecast } from "../services/WeatherFacade";
import WeekForecast from "./weekForecast/WeekForecast";
import Sidebar from "./sidebar/Sidebar";

export default function LayoutContent(this: any) {
  const [search, setSearch] = useState("");
  const [cityCurrent, setCityCurrent] = useState({});
  const [cityForecast, setCityForecast] = useState({});
  const [airConditions, setAirConditions] = useState({});
  const [weekForecast, setWeekForecast] = useState({});
  const [isHide, setIsHide] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const findInitialCity = async () => {
      const result = await findByName("Bogota");
      const forecast = await getForecast(result.coord.lat, result.coord.lon);
      setCityCurrent(result);
      setCityForecast(forecast);
      setAirConditions(forecast.current);
      setWeekForecast(forecast.daily);
    };
    findInitialCity();
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const cityName = search !== "" ? search : "bogota";
      const fetchData = async () => {
        const result = await findByName(cityName);

        if (!result) {
          setIsHide(true);
          setErrorMessage(`City ${search} not found`);
        } else {
          setIsHide(false);
        }

        if (result?.main) {
          setCityCurrent(result);
        }

        if (result?.coord) {
          const lat = result.coord.lat;
          const lon = result.coord.lon;
          const forecast = await getForecast(lat, lon);
          setCityForecast(forecast);
          setAirConditions(forecast.current);
          setWeekForecast(forecast.daily);
        }
      };
      fetchData();
    }, 800);
    return () => clearTimeout(debounce);
  }, [search]);

  return (
    <div className="m-5">
      {/* grid grid-cols-4 grid-rows-4 */}
      <div className="">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search for cities"
            onChange={(e) => setSearch(e.target.value)}
            // onKeyUp={(e) => onKeyUpValueHandler(e)}
          />
        </div>

        {!isHide && (
          <>
            <City city={cityCurrent}></City>
            <TodayForecast city={cityForecast}></TodayForecast>
            <AirCondition city={airConditions}></AirCondition>
            <WeekForecast city={weekForecast}></WeekForecast>
          </>
        )}

        {isHide && <p>{errorMessage}</p>}

        <Sidebar></Sidebar>
      </div>
    </div>
  );
}
