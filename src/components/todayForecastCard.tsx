import { ReactNode } from 'react';
import { DailyWeatherForecast } from '@/types/responseTyping';
import { toLocalTime } from '@/utils/convertTime';
import { Round } from '@/utils/round';

interface TodayForecastCardProps extends DailyWeatherForecast {
  children: ReactNode;
  todayWeather: number;
}

export const TodayForecastCard = ({ todayWeather, sunrise, sunset }: TodayForecastCardProps) => {
  return (
    <div className="flex flex-col bg-card max-sm:bg-[#1C9CF6] rounded-xl p-6 text-gtext h-40">
      <h2 className="text-lg font-bold max-sm:font-light">Today weather 🌡️</h2>
      <div className="flex justify-between items-center w-full">
        <span className="text-lg font-bold max-sm:font-light">{Round(todayWeather)}°C</span>
        <div className="text-lg max-sm:ml-4 max-sm:font-light font-bold text-right ml-48">
          <h3 className="max-sm:ml-10">Sunrise 🌇</h3>
          {sunrise ? <span>{toLocalTime(sunrise)}</span> : '--:--'}
        </div>
        <div className="text-lg max-sm:ml-4 max-sm:font-light font-bold text-right pr-9">
          <h3 className="max-sm:ml-10">Sunset 🌆</h3>
          {sunset ? <span>{toLocalTime(sunset)}</span> : '--:--'}
        </div>
      </div>
    </div>
  );
};
