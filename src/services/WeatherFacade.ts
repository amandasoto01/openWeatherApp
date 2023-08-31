import { WeatherData } from "../WeatherData";

export default class WeatherFacade {
  static async findByName(name: string) {
    let response = await fetch(
      `${process.env.REACT_APP_API_URL}weather?q=${name}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    );
    let json = await response.json();
    return json;
  }

  static async getForecast(lat: number, lon: number) {
    let response = await fetch(
      `${process.env.REACT_APP_API_URL}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );
    let json = await response.json();
    return json;
  }

  static getImage(image: string) {
    return `http://openweathermap.org/img/w/${image}.png`;
  }
}
