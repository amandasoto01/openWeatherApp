import "./AirCondition.css";
import thermometer from "../images/thermometer.png";
import wind from "../images/wind.png";
import drop from "../images/drop.png";
import sun from "../images/sun.png";

export default function AirCondition(props: any) {
  return (
    <div>
      <h1>Air Conditions</h1>
      <button>See more</button>
      <div>
        <div>
          <img src={thermometer} alt="thermometer for real feel"></img>
          <p>Real Feel</p>
        </div>
        <p>{Math.ceil(props.city.feels_like)}&deg;C</p>
      </div>

      <div>
        <div>
          <img src={wind} alt="wind"></img>
          <p>wind</p>
        </div>
        <p>{props.city.wind_speed} Km/h</p>
      </div>

      <div>
        <div>
          <img src={drop} alt="drop of water - chance of rain"></img>
          <p>Chance of Rain</p>
        </div>
        <p>{props.city.humidity}%</p>
      </div>

      <div>
        <div>
          <img src={sun} alt="sun for UV index"></img>
          <p>UV Index</p>
        </div>
        <p>{props.city.uvi}</p>
      </div>
    </div>
  );
}
