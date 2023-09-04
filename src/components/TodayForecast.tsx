import { NewHourlyData } from "./interfaces/HourlyDataInterface";

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
  let data: NewHourlyData[] = [];

  if (props.city?.hourly) {
    data = getDailyForecast(props.city);
  }

  return (
    // w-1/3
    <div className="bg-gray-100 px-2 mb-4 rounded-md">
      <p className="flex justify-start text-gray-400 font-bold">
        Today's Forecast
      </p>
      {/* justify-center */}
      <div className="flex  items-center gap-4 ">
        {data.map((item: NewHourlyData, index: number) => (
          <div className="self-center " key={index}>
            <p className="text-gray-400 font-medium">{item.date}</p>

            {/* <p>Weather: {item.weather.main}</p> */}
            <img
              src={`https://openweathermap.org/img/wn/${item.weather.icon}.png`}
              alt="Weather Icon"
            />
            <p className="font-semibold">{item.temp}&deg;C</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
