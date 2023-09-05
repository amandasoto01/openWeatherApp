export interface NewHourlyData {
  date: string;
  temp: number;
  image: string;
  weather: { main: any; icon: any };
}
