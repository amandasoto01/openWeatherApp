import "./TodayForecast.css";
import { NewHourlyData } from "../interfaces/HourlyDataInterface";
import { getImagePath } from "../../services/WeatherFacade";
// import rain from "../images/weather/rain.png";

function getDailyForecast(result: any) {
  const hourly = result.hourly;
  const hours: NewHourlyData[] = [];

  for (let i = 0; i < 18; i += 3) {
    const formattedTime = new Date(hourly[i].dt * 1000).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const value = getImagePath(hourly[i].weather[0].main);
    const imagePath = require(`../../images/weather/${value}.png`);

    hours.push({
      date: formattedTime,
      temp: Math.ceil(hourly[i].temp),
      image: imagePath,
      weather: {
        main: hourly[i].weather[0].main,
        icon: hourly[i].weather[0].icon,
      },
    });
  }
  return hours;
}

export default function TodayForecast(props: any) {
  let data: NewHourlyData[] = [];

  if (props.city?.hourly) {
    data = getDailyForecast(props.city);
  }

  return (
    // w-1/3
    <div className="col-start-2 row-stat-3 col-span-2 bg-gray-100 px-2 m-4 rounded-md ">
      <div className="grid grid-cols-1 grid-rows-1 p-4">
        <p className="flex justify-start text-gray-400 font-bold">
          TODAY'S FORECAST
        </p>
        {/* justify-center */}
        {/* flex  items-center */}
        <div className="grid grid-cols-6 grid-rows-1 gap-4 m-5 justify-items-center">
          {data.map((item: NewHourlyData, index: number) => (
            <div
              className={index === 0 ? "self-center" : "self-center divider"}
              key={index}
            >
              <p className="text-gray-400 font-medium">{item.date}</p>
              {/* <p>Weather: {item.weather.main}</p> */}
              <img src={item.image} alt="Weather Icon" />
              <p className="font-semibold">{item.temp}&deg;C</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
