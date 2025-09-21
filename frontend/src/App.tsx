import { useState } from "react";
import { SearchBar } from "@/components/searchBar";
import getCoordinates from "@/utils/getCoordinates";
import getWeather from "@/utils/getWeather";
import { WMO_WEATHER_CODES } from "./utils/wmoWeatherCodes";


function App() {
  const [city, setCity] = useState(""); // City name
  const [weekly, setWeekly] = useState<Number[]>([]);
  const [time, setTime] = useState<String[]>([]);
  const [code, setCode] = useState([]);

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
                setTime(data.daily.time)
                setCode(data.daily.weather_code) 
              }
            }}
            >
            <SearchBar
              placeholder="Search cities..."
              city={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </form>

          <div className="bg-gray-700 rounded-xl p-6 text-white h-40">
            <h2 className="text-lg font-bold mb-2">Today weather</h2>
          </div>

          <div className="bg-gray-700 rounded-xl p-6 text-white h-40">
            <h2 className="text-lg font-bold mb-2">Air condition</h2>
          </div>
            
        </div>

        <div className="bg-gray-700 rounded-xl p-6 text-white min-h-[400px]">
          <h2 className="text-lg font-bold mb-4">7 day forecast</h2>
          <ul>
            {weekly.map((temp: number, idx: number) => (
              <li key={idx} className="flex justify-between">
                <span className="text-2xl">{time[idx]}</span>
                <span className="text-2xl">{temp}°C</span>
                <span className="text-2xl">{WMO_WEATHER_CODES[code[idx]]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
