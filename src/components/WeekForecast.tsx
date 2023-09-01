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
  if (props.city && props.city.length != 0) {
    console.log("length ", props.city);
    for (let i = 0; i < 7; i++) {
      if (props.city[i]) {
        const date = new Date(props.city[i].dt * 1000);
        const formattedDayOfWeek = daysOfWeek[date.getDay()];
        weekForecast.push({
          day: formattedDayOfWeek,
          image: `https://openweathermap.org/img/wn/${props.city[i].weather[0].icon}.png`,
          main: props.city[i].weather[0].main,
          max: Math.ceil(props.city[i].temp.max),
          min: Math.ceil(props.city[i].temp.min),
        });
      }
    }
  }
  console.log("days: ", weekForecast);

  return (
    <div>
      <h1>7-DAY FORECAST</h1>
      <div>
        {/* dia, imagen, sunny, 36/22 */}
        <div>
          {weekForecast.map((item: any, index: number) => (
            <div key={index}>
              <p>{item.day}</p>
              <img src={item.image} alt="Weather Icon" />
              <p>{item.main}</p>
              <p>
                {item.max}/{item.min}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
