import { useState, useEffect } from "react";

export default function City(props: any) {
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [rainChance, setRainChance] = useState("");
  const [description, setDescription] = useState("");
  const [main, setMain] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (props.city?.main) {
      setName(props.city.name);
      setTemp(Math.ceil(props.city.main.temp).toString());
      setRainChance(props.city.main.humidity.toString());
      setDescription(props.city.weather[0].description);
      setMain(props.city.weather[0].main);
      setImage(
        `http://openweathermap.org/img/w/${props.city.weather[0].icon}.png`
      );
    }
  }, [props.city]);

  return (
    <div>
      <p>name: {name}</p>
      <p>rain chance: {rainChance}%</p>
      <p>temperature: {temp}&deg;C</p>
      <p>main: {main}</p>
      <img src={image} alt="weather" />
    </div>
  );
}
