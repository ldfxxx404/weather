export const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?daily=weather_code,sunrise,sunset,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,relative_humidity_2m,showers,snowfall,weather_code,apparent_temperature,rain,precipitation&timezone=Europe%2FMoscow";
export const COORDINATES_URL =
  "https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=ru&format=json";
