import "./Sidebar.css";
import umbrella from "../../images/sidebar/umbrellapng.png";
import weather from "../../images/sidebar/weather-forecast.png";
import cities from "../../images/sidebar/menu.png";
import map from "../../images/sidebar/map.png";
import settings from "../../images/sidebar/settings.png";

export default function Sidebar() {
  return (
    // col-start-0 row-span-3
    <div className="bg-gray-100 mb-4 rounded-md">
      <h1>Sidebar</h1>
      <div className="flex flex-col justify-center items-center gap-4 mt-4">
        <div className="self-center">
          <button type="button">
            <img className="sidebarImg" src={umbrella} alt={umbrella}></img>
          </button>
        </div>
        <div className="self-center">
          <button>
            <img className="sidebarImg" src={weather} alt="weather image"></img>
            <p>Weather</p>
          </button>
        </div>
        <div className="self-center">
          <button>
            <img className="sidebarImg" src={cities} alt="weather image"></img>
            <p>Cities</p>
          </button>
        </div>
        <div className="self-center">
          <button>
            <img className="sidebarImg" src={map} alt="weather image"></img>
            <p>Map</p>
          </button>
        </div>
        <div className="self-center">
          <button>
            <img
              className="sidebarImg"
              src={settings}
              alt="weather image"
            ></img>
            <p>Settings</p>
          </button>
        </div>
      </div>
    </div>
  );
}
