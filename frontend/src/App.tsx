import { useState } from "react";
import { SearchBar } from "@/components/searchBar";
import { WMO_WEATHER_CODES } from "@/constants";
import { SevenDayForecast } from "@/components/sevenDayForecastCard";
import { reverseDate } from "./utils/reverseDate";
import { toLocalTime } from "./utils/convertTime";
import { TodayForecastCard } from "./components/todayForecastCard";
import getCoordinates from "@/utils/getCoordinates";
import getWeather from "@/utils/getWeather";

function App() {
  const [city, setCity] = useState<string>("");
  const [weekly, setWeekly] = useState<number[]>([]);
  const [todayWeather, setTodayWeather] = useState<number | null>(null);
  const [date, setDate] = useState<string[]>([]);
  const [code, setCode] = useState<number[]>([]);
  const [sunrise, setSunrise] = useState<string | null>(null);
  const [sunset, setSunset] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0B0A17] flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="flex flex-col gap-6">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const coordinates = await getCoordinates(city);
              if (coordinates) {
                const data = await getWeather();
                setWeekly(data.daily.temperature_2m_max);
                setTodayWeather(data.daily.temperature_2m_max[0]);
                setDate(data.daily.time);
                setCode(data.daily.weather_code);
                setSunrise(data.daily.sunrise[0]);
                setSunset(data.daily.sunset[0]);
              }
            }}
          >
            <SearchBar
              placeholder="Search cities..."
              city={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </form>
          <TodayForecastCard>
            <span className="text-lg font-bold">{todayWeather}°C</span>
            <div className="text-lg font-bold text-right ml-48">
              <h3>Sunrise 🌇</h3>
              {sunrise ? <span>{toLocalTime(sunrise)}</span> : "--:--"}
            </div>
            <div className="text-lg font-bold text-right pr-9">
              <h3>Sunset 🌆</h3>
              {sunset ? <span>{toLocalTime(sunset)}</span> : "--:--"}
            </div>
          </TodayForecastCard>

          <div className="bg-gray-700 rounded-xl p-6 text-white h-40 mt-0.5">
            <h2 className="text-lg font-bold mb-2">Air condition</h2>
          </div>
        </div>
        <SevenDayForecast>
          {weekly.map((temp: number, idx: number) => (
            <li
              key={idx}
              className="flex justify-between items-center border-2 border-gray-600 rounded-lg p-3 bg-gray-800 hover:bg-gray-700 transition-all shadow-sm"
            >
              <span className="text-lg font-medium">
                {reverseDate(date[idx])}
              </span>
              <span className="text-lg font-bold">{temp}°C</span>
              <span className="text-lg">{WMO_WEATHER_CODES[code[idx]]}</span>
            </li>
          ))}
        </SevenDayForecast>
      </div>
    </main>
  );
}

export default App;
