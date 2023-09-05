import "./City.css";
import { NewCity } from "../interfaces/CityInterface";
import { getImagePath } from "../../services/WeatherFacade";

export default function City(props: any) {
  let newCity = {} as NewCity;

  if (props.city?.main) {
    newCity.name = props.city.name;
    newCity.temp = Math.ceil(props.city.main.temp);
    newCity.rainChance = props.city.main.humidity;
    newCity.description = props.city.weather[0].description;
    newCity.main = props.city.weather[0].main;
    // newCity.image = `http://openweathermap.org/img/w/${props.city.weather[0].icon}.png`;
    const value = getImagePath(newCity.main);
    newCity.image = require(`../../images/weather/${value}.png`);

    console.log("new image path city: ", newCity.image);
  }

  return (
    //bg-gray-100
    <div className="col-start-2 row-start-2  inline-grid gap-12 grid-cols-4 grid-rows-2 place-items-center m-4 p-1">
      <div className="justify-self-start">
        <h4 className="font-bold place-self-start">{newCity.name}</h4>
        <p className="text-gray-400">Chance of rain : {newCity.rainChance}%</p>
      </div>
      <div className="row-start-2 ">
        <p className="text-4xl font-semibold">{newCity.temp}&deg;C</p>
      </div>
      <div className="col-start-3 row-span-2 col-span-3">
        <img
          className="cityImg"
          src={newCity.image}
          alt="weather of the city searched"
        />
      </div>
    </div>
  );
}
