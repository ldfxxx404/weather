import { useState } from 'react';
import { SearchBar } from '@/components/searchBar';
import { WMO_WEATHER_CODES } from '@/constants';
import { SevenDayForecast } from '@/components/sevenDayForecastCard';
import { reverseDate } from '@/utils/reverseDate';
import { toLocalTime } from '@/utils/convertTime';
import { TodayForecastCard } from '@/components/todayForecastCard';
import getCoordinates from '@/utils/getCoordinates';
import getWeather from '@/utils/getWeather';
import getAirQuality from '@/utils/getAirQuality';
import { AirQualityCard } from '@/components/airQualityCard';
import { HourlyForecastCard } from '@/components/hourlyForecastCard';
import { Round } from '@/utils/round';

function App() {
  const [city, setCity] = useState<string>('');
  const [weekly, setWeekly] = useState<number[]>([]);
  const [todayWeather, setTodayWeather] = useState<number | null>(null);
  const [date, setDate] = useState<string[]>([]);
  const [code, setCode] = useState<number[]>([]);
  const [sunrise, setSunrise] = useState<string | null>(null);
  const [sunset, setSunset] = useState<string | null>(null);
  const [co, setCo] = useState<number | null>(null);
  const [aqi, setAqi] = useState<number | null>(null);
  const [dust, setDust] = useState<number | null>(null);
  const [hourlyTemp, setHorlyTemp] = useState<number | null>(null);
  const [hourlyRainChance, setHourlyRainChance] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#0B0A17] flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="flex flex-col gap-6">
          {' '}
          {/* Weather Information sector*/}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const setCoordinates = await getCoordinates(city);
              if (setCoordinates) {
                const weatherData = await getWeather();
                setWeekly(weatherData.daily.temperature_2m_max);
                setTodayWeather(weatherData.daily.temperature_2m_max[0]);
                setDate(weatherData.daily.time);
                setCode(weatherData.daily.weather_code);
                setSunrise(weatherData.daily.sunrise[0]);
                setSunset(weatherData.daily.sunset[0]);
                setHorlyTemp(weatherData.hourly.temperature_2m[0]);
                setHourlyRainChance(weatherData.hourly.rain[0])

                const airQualityData = await getAirQuality();
                setCo(airQualityData.current.carbon_monoxide);
                setAqi(airQualityData.current.european_aqi);
                setDust(airQualityData.current.dust);
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
            <span className="text-lg font-bold">{Round(todayWeather)}°C</span>
            <div className="text-lg font-bold text-right ml-48">
              <h3>Sunrise 🌇</h3>
              {sunrise ? <span>{toLocalTime(sunrise)}</span> : '--:--'}
            </div>
            <div className="text-lg font-bold text-right pr-9">
              <h3>Sunset 🌆</h3>
              {sunset ? <span>{toLocalTime(sunset)}</span> : '--:--'}
            </div>
          </TodayForecastCard>
          <AirQualityCard>
            <h3 className="text-lg font-bold">
              CO₂: <span className="font-medium text-base">{co}</span>
            </h3>
            <h3 className="text-lg font-bold">
              AQI: <span className="font-medium text-base">{aqi}</span>
            </h3>
            <h3 className="text-lg font-bold">
              Dust: <span className="font-medium text-base">{dust}</span>
            </h3>
          </AirQualityCard>
        </div>

        <SevenDayForecast>
          {weekly.map((temp: number, idx: number) => (
            <li
              key={idx}
              className="flex justify-between items-center border-2 border-gray-600 rounded-lg p-3 bg-gray-800 hover:bg-gray-700 transition-all shadow-sm"
            >
              <span className="text-lg font-medium">{reverseDate(date[idx])}</span>
              <span className="text-lg font-bold">{Round(temp)}°C</span>
              <span className="text-lg">{WMO_WEATHER_CODES[code[idx]]}</span>
            </li>
          ))}
        </SevenDayForecast>

        <HourlyForecastCard>
          <div>
            <h3 className="text-lg font-bold">
              Current temperature:{' '}
              <span className="font-medium text-base">{Round(hourlyTemp)} °C</span>
            </h3>
            <h3 className="text-lg font-bold">
              Chance of rain: {' '}
              <span className='font-medium text-base'>{hourlyRainChance}</span>
              </h3>
          </div>
        </HourlyForecastCard>
      </div>
    </main>
  );
}

export default App;
