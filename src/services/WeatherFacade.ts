export async function findByName(name: string) {
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

export async function getForecast(lat: number, lon: number) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
  const json = await response.json();
  return json;
}

export function getImagePath(main: string): string {
  const weather = new Map([
    ["Clear", "sun"],
    ["Clouds", "clouds"],
    ["Thunderstorm", "thunder"],
    ["Rain", "rain"],
    ["Drizzle", "drizzle"],
    ["Haze", "wind"],
    ["Snow", "snow"],
  ]);

  return weather.get(main) || "";
}
