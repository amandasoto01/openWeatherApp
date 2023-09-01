import "./Sidebar.css";
import umbrella from "../../images/sidebar/umbrellapng.png";
import weather from "../../images/sidebar/weather-forecast.png";
import cities from "../../images/sidebar/menu.png";
import map from "../../images/sidebar/map.png";
import settings from "../../images/sidebar/settings.png";

export default function Sidebar() {
  return (
    <div>
      <h1>Sidebar</h1>
      <div>
        <img className="sidebarImg" src={umbrella} alt={umbrella}></img>
      </div>
      <div>
        <img className="sidebarImg" src={weather} alt="weather image"></img>
        <p>Weather</p>
      </div>
      <div>
        <img className="sidebarImg" src={cities} alt="weather image"></img>
        <p>Cities</p>
      </div>
      <div>
        <img className="sidebarImg" src={map} alt="weather image"></img>
        <p>Map</p>
      </div>
      <div>
        <img className="sidebarImg" src={settings} alt="weather image"></img>
        <p>Settings</p>
      </div>
    </div>
  );
}
