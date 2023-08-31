import { WeatherData } from "../WeatherData";

export default class WeatherFacade {
  static async findByName(name: string) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}weather?q=${name}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`The request has failed for city ${name}`);
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.warn("Error in city...");
    }
  }

  static async getForecast(lat: number, lon: number) {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );
    const json = await response.json();
    return json;
  }

  static getImage(image: string) {
    return `http://openweathermap.org/img/w/${image}.png`;
  }
}
