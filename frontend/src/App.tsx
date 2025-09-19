import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState<any>(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  useEffect(() => {
    if (!city) return;

    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes&alerts=no`
    )
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, [city]);

  return (
    <main className="min-h-screen bg-[#0B0A17] flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="flex flex-col gap-6">
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type="text"
            placeholder="Search cities..."
            className="p-3 w-full text-white bg-gray-600 rounded-lg focus:outline-none"
          />

          <div className="bg-gray-700 rounded-xl p-6 text-white h-40">
            <h2 className="text-lg font-bold mb-2">Today weather</h2>
            {data ? (
              <>
                <p>
                  {data.location.name}, {data.location.country}
                </p>
                <p>{Math.round(data.current.temp_c)}°C</p>
                <p>{data.current.condition.text}</p>
                <p className="absolute ml-96 ">
                  <img
                    src={data.current.condition.icon}
                    alt={data.current.condition.text}
                  />
                </p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          <div className="bg-gray-700 rounded-xl p-6 text-white h-40">
            <h2 className="text-lg font-bold mb-2">Air condition</h2>
            {data ? (
              <>
                <p>PM2.5: {data.current.air_quality.pm2_5.toFixed(1)}</p>
                <p>PM10: {data.current.air_quality.pm10.toFixed(1)}</p>
                <p>CO: {data.current.air_quality.co.toFixed(1)}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

        <div className="bg-gray-700 rounded-xl p-6 text-white min-h-[400px]">
          <h2 className="text-lg font-bold mb-4">7 day forecast</h2>
          {data ? (
            <ul className="space-y-2">
              {data.forecast.forecastday.map((day: any, i: number) => (
                <li key={i} className="flex justify-between">
                  <span>
                    {new Date(day.date).toLocaleDateString("ru-RU", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                  <span>{Math.round(day.day.avgtemp_c)}°C</span>
                  <span>{day.day.condition.text}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
