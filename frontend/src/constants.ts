export const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?daily=weather_code,sunrise,sunset,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,relative_humidity_2m,showers,snowfall,weather_code,apparent_temperature,rain,precipitation&timezone=Europe%2FMoscow";
export const COORDINATES_URL =
  "https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=ru&format=json";
export const AIR_QUALITY =
  "https://air-quality-api.open-meteo.com/v1/air-quality?current=european_aqi,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,dust,pm10,pm2_5";

export const WMO_WEATHER_CODES = {
  0: "☀️",
  1: "☀️",
  2: "🌤️",
  3: "🌥️",
  45: "🌫️",
  51: "💧🌦️",
  53: "🌧️",
  61: "🌦️",
  63: "🌧️",
  65: "⛈️",
  71: "🌨️",
  73: "❄️🌨️",
  75: "❄️❄️",
  80: "🌦️💦",
  81: "🌧️💦",
  82: "⛈️💦",
  95: "⛈️⚡",
  99: "⛈️❄️⚡",
};
