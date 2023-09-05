import "./WeekForecast.css";
import { getImagePath } from "../../services/WeatherFacade";

export default function WeekForecast(props: any) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let weekForecast = [];
  let col = 1;
  let row = 1;

  if (props.city && props.city.length !== 0) {
    for (let i = 0; i < 7; i++) {
      if (props.city[i]) {
        const date = new Date(props.city[i].dt * 1000);
        let formattedDayOfWeek = daysOfWeek[date.getDay()];
        const todayDate = new Date();

        if (date.getDay() === todayDate.getDate()) {
          formattedDayOfWeek = "Today";
        }

        const value = getImagePath(props.city[i].weather[0].main);
        const imagePath = require(`../../images/weather/${value}.png`);

        weekForecast.push({
          day: formattedDayOfWeek,
          image: imagePath,
          main: props.city[i].weather[0].main,
          max: Math.ceil(props.city[i].temp.max),
          min: Math.ceil(props.city[i].temp.min),
        });
      }
    }
  }

  return (
    <div className="col-start-4 row-start-1 row-span-3  bg-gray-100 mb-4 rounded-md p-4 ml-5 w-3/4">
      <p className="flex justify-start text-gray-400 font-bold">
        7-DAY FORECAST
      </p>

      {/* dia, imagen, sunny, 36/22 */}
      {/* flex flex-col justify-center items-center  */}
      <div className="grid grid-cols-1 grid-rows-7 justify-items-center gap-4 m-5">
        {weekForecast.map((item: any, index: number) => (
          // flex space-between
          <div
            className={
              index === weekForecast.length - 1
                ? "flex  items-center gap-5"
                : "flex  items-center gap-5 dividerWeek"
            }
            key={index}
          >
            <p className="text-gray-400">
              {item.day === "Today" ? "Today" : item.day.substring(0, 3)}
            </p>
            <img src={item.image} alt="Weather Icon" />
            <p>{item.main}</p>
            <p className="">
              {item.max}
              <span className="text-gray-400">/{item.min}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
