import "./AirCondition.css";
import thermometer from "../../images/thermometer.png";
import wind from "../../images/wind.png";
import drop from "../../images/drop.png";
import sun from "../../images/sun.png";

export default function AirCondition(props: any) {
  return (
    <div className="bg-gray-100 grid grid-cols-2 grid-rows-3 gap-y-3 justify-items-center mb-4 rounded-md">
      <p className="flex text-gray-400 font-bold">Air Conditions</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full px-2 py-1">
        See more
      </button>
      <div className="">
        <div className="flex gap-2">
          <img
            className="icon"
            src={thermometer}
            alt="thermometer for real feel"
          ></img>
          <p className="text-gray-400">Real Feel</p>
        </div>
        <p className="text-3xl font-bold">
          {Math.ceil(props.city.feels_like)}&deg;C
        </p>
      </div>

      <div>
        <div className="flex gap-2">
          <img className="icon" src={wind} alt="wind"></img>
          <p className="text-gray-400">wind</p>
        </div>
        <p className="text-3xl font-bold">{props.city.wind_speed} Km/h</p>
      </div>

      <div>
        <div className="flex gap-2">
          <img
            className="icon"
            src={drop}
            alt="drop of water - chance of rain"
          ></img>
          <p className="text-gray-400">Chance of Rain</p>
        </div>
        <p className="text-3xl font-bold">{props.city.humidity}%</p>
      </div>

      <div>
        <div className="flex gap-2">
          <img className="icon" src={sun} alt="sun for UV index"></img>
          <p className="text-gray-400">UV Index</p>
        </div>
        <p className="text-3xl font-bold">{props.city.uvi}</p>
      </div>
    </div>
  );
}
