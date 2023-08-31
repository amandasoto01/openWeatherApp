import { useState, useEffect } from "react";

interface NewHourlyData {
  date: string;
  temp: number;
  weather: { main: any; icon: any };
}

function getDailyForecast(result: any) {
  const hourly = result.hourly;
  const hours: NewHourlyData[] = [];

  for (let i = 0; i < 18; i += 3) {
    const formattedTime = new Date(hourly[i].dt * 1000).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    hours.push({
      date: formattedTime,
      temp: Math.ceil(hourly[i].temp),
      weather: {
        main: hourly[i].weather[0].main,
        icon: hourly[i].weather[0].icon,
      },
    });
  }
  return hours;
}

export default function TodayForecast(props: any) {
  const [data, setData] = useState<NewHourlyData[]>([]);

  useEffect(() => {
    if (props.city != undefined && props.city.hourly != undefined) {
      const dailyForecast = getDailyForecast(props.city);
      if (dailyForecast) {
        setData(dailyForecast);
      }
    }
  }, [props.city]);

  return (
    <div>
      <h1>Todays Forecast</h1>
      {data.map((item: NewHourlyData, index: number) => (
        <div key={index}>
          <p>Date: {item.date}</p>
          <p>Temperature: {item.temp}&deg;C</p>
          <p>Weather: {item.weather.main}</p>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather.icon}.png`}
            alt="Weather Icon"
          />
          <hr />
        </div>
      ))}
    </div>
  );
}
