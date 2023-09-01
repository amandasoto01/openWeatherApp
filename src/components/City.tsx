import { NewCity } from "./interfaces/CityInterface";

export default function City(props: any) {
  let newCity = {} as NewCity;

  if (props.city?.main) {
    newCity.name = props.city.name;
    newCity.temp = Math.ceil(props.city.main.temp);
    newCity.rainChance = props.city.main.humidity;
    newCity.description = props.city.weather[0].description;
    newCity.main = props.city.weather[0].main;
    newCity.image = `http://openweathermap.org/img/w/${props.city.weather[0].icon}.png`;
  }

  return (
    <div>
      <p>name: {newCity.name}</p>
      <p>rain chance: {newCity.rainChance}%</p>
      <p>temperature: {newCity.temp}&deg;C</p>
      <p>main: {newCity.main}</p>
      <img src={newCity.image} alt="weather" />
    </div>
  );
}
