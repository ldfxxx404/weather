import { useState } from 'react';
import { SearchBar } from '@/components/searchBar';
import { SevenDayForecast } from '@/components/sevenDayForecastCard';
import { TodayForecastCard } from '@/components/todayForecastCard';
import { getCoordinates } from '@/api/getCoordinates';
import { getWeather } from '@/api/getWeather';
import { getAirQuality } from '@/api/getAirQuality';
import { AirQualityCard } from '@/components/airQualityCard';
import { HourlyForecastCard } from '@/components/hourlyForecastCard';
import { RainForecastCard } from '@/components/rainForecastCard';
import { SnowForecastCard } from '@/components/snowForecastCard';

export default function App() {
  const [city, setCity] = useState<string>('');
  const [weeklyMax, setWeeklyMax] = useState<number[]>([]);
  const [weeklyMin, setWeeklyMin] = useState<number[]>([]);
  const [todayWeather, setTodayWeather] = useState<number | null>(null);
  const [date, setDate] = useState<string[]>([]);
  const [code, setCode] = useState<number[]>([]);
  const [sunrise, setSunrise] = useState<string | null>(null);
  const [sunset, setSunset] = useState<string | null>(null);
  const [co, setCo] = useState<number | null>(null);
  const [aqi, setAqi] = useState<number | null>(null);
  const [dust, setDust] = useState<number | null>(null);
  const [hourlyTemperature, setHorlyTemperature] = useState<number[]>([]);
  const [hourlyRainChance, setHourlyRainChance] = useState<number | null>(null);
  const [hourlyWeatherTime, setHourlyWeatherTime] = useState<string[]>([]);
  const [hourlyRain, setHourlyRain] = useState<number[]>([]);
  const [hourlySnow, setHourlySnow] = useState<number[]>([]);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="flex flex-col gap-6">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const setCoordinates = await getCoordinates(city);
              if (setCoordinates) {
                const weatherData = await getWeather();
                setWeeklyMax(weatherData.daily.temperature_2m_max);
                setWeeklyMin(weatherData.daily.temperature_2m_min);
                setTodayWeather(weatherData.daily.temperature_2m_max[0]);
                setDate(weatherData.daily.time);
                setCode(weatherData.daily.weather_code);
                setSunrise(weatherData.daily.sunrise[0]);
                setSunset(weatherData.daily.sunset[0]);
                setHorlyTemperature(weatherData.hourly.temperature_2m);
                setHourlyRainChance(weatherData.hourly.rain[0]);
                setHourlyWeatherTime(weatherData.hourly.time);
                setHourlyRain(weatherData.hourly.rain);
                setHourlySnow(weatherData.hourly.snowfall);

                const airQualityData = await getAirQuality();
                setCo(airQualityData.current.carbon_monoxide);
                setAqi(airQualityData.current.european_aqi);
                setDust(airQualityData.current.dust);
              }
            }}>
            <SearchBar
              placeholder="Search cities..."
              city={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </form>
          <TodayForecastCard
            todayWeather={todayWeather}
            sunset={sunset}
            sunrise={sunrise}
            time={[]}>
            {todayWeather}
            {sunrise}
            {sunset}
          </TodayForecastCard>
          <AirQualityCard co={co} dust={dust} aqi={aqi}>
            {co}
            {dust}
            {aqi}
          </AirQualityCard>
        </div>
        <SevenDayForecast weeklyMax={weeklyMax} weeklyMin={weeklyMin} code={code} date={date}>
          {code}
          {date}
          {code}
        </SevenDayForecast>
        <HourlyForecastCard
          hourlyTemperature={hourlyTemperature}
          hourlyRainChance={hourlyRainChance}
          time={hourlyWeatherTime}>
          {hourlyTemperature}
          {hourlyRainChance}
          {hourlyWeatherTime}
        </HourlyForecastCard>
        <RainForecastCard hourlyRain={hourlyRain} time={hourlyWeatherTime}>
          {hourlyRain}
          {hourlyWeatherTime}
        </RainForecastCard>
        <SnowForecastCard hourlySnow={hourlySnow} time={hourlyWeatherTime}>
          {hourlySnow}
          {hourlyWeatherTime}
        </SnowForecastCard>
      </div>
    </main>
  );
}
