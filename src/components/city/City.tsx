import "./City.css";
import { NewCity } from "../interfaces/CityInterface";

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
    <div className="bg-gray-100 inline-grid gap-12 grid-cols-3 grid-rows-2 place-items-center mb-4">
      <div className="">
        <h4 className="font-bold place-self-start">{newCity.name}</h4>
        <p className="text-gray-400">Chance of rain : {newCity.rainChance}%</p>
        {/* <p>main: {newCity.main}</p> */}
      </div>
      <div className="row-start-2 ">
        <p className="text-4xl font-semibold">{newCity.temp}&deg;C</p>
      </div>
      <div className="col-start-3 row-span-2">
        <img className="cityImg" src={newCity.image} alt="weather" />
      </div>
    </div>
  );
}
