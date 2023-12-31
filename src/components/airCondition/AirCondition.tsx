import "./AirCondition.css";
import thermometer from "../../images/thermometer.png";
import wind from "../../images/wind.png";
import drop from "../../images/drop.png";
import sun from "../../images/sun.png";

export default function AirCondition(props: any) {
  return (
    <div className="col-start-2 row-stat-4 col-span-2 bg-gray-100 grid grid-cols-2 grid-rows-3 gap-y-3 justify-items-center m-4 rounded-md p-4">
      <p className="flex text-gray-400 font-bold justify-self-start">
        AIR CONDITIONS
      </p>
      <button className="buttonAir bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full justify-self-end">
        See more
      </button>

      <div className="justify-self-start">
        <div className="flex gap-2">
          <img
            className="icon"
            src={thermometer}
            alt="thermometer for real feel"
          ></img>
          <p className="text-gray-400">Real Feel</p>
        </div>
        <p className="text-2xl font-bold">
          {Math.ceil(props.city.feels_like)}&deg;C
        </p>
      </div>

      <div className="justify-self-start">
        <div className="flex gap-2">
          <img className="icon" src={wind} alt="wind"></img>
          <p className="text-gray-400">wind</p>
        </div>
        <p className="text-2xl font-bold">{props.city.wind_speed} Km/h</p>
      </div>

      <div className="justify-self-start">
        <div className="flex gap-2">
          <img
            className="icon"
            src={drop}
            alt="drop of water - chance of rain"
          ></img>
          <p className="text-gray-400">Chance of Rain</p>
        </div>
        <p className="text-2xl font-bold">{props.city.humidity}%</p>
      </div>

      <div className="justify-self-start">
        <div className="flex gap-2">
          <img className="icon" src={sun} alt="sun for UV index"></img>
          <p className="text-gray-400">UV Index</p>
        </div>
        <p className="text-2xl font-bold">{props.city.uvi}</p>
      </div>
    </div>
  );
}
