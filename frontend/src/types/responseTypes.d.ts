interface HourlyUnits {
  time: "iso8601";
  temperature_2m: "°C";
  relative_humidity_2m: "%";
  showers: "mm";
  snowfall: "cm";
  weather_code: "wmo code";
  apparent_temperature: "°C";
  rain: "mm";
  precipitation: "mm";
}

interface DailyUnits {
  time: "iso8601";
  weather_code: "wmo code";
  sunrise: "iso8601";
  sunset: "iso8601";
  temperature_2m_max: "°C";
  temperature_2m_min: "°C";
}

interface Hourly {
  time: string[]; // массив ISO дат
  temperature_2m: number[];
  relative_humidity_2m: number[];
  showers: number[];
  snowfall: number[];
  weather_code: number[];
  apparent_temperature: number[];
  rain: number[];
  precipitation: number[];
}

interface Daily {
  time: string[];
  weather_code: number[];
  sunrise: string[];
  sunset: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export interface WeatherResponse {
  timezone: string;
  hourly_units: HourlyUnits;
  hourly: Hourly;
  daily_units: DailyUnits;
  daily: Daily;
}

export interface CoordinatesResponse {
  latitude: number;
  longitude: number;
}
