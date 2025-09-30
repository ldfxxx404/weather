import { ReactNode } from 'react';
import { Daily } from '@/types/responseTyping';
import { toLocalTime } from '@/utils/convertTime';
import { Round } from '@/utils/round';

interface TodayForecastCardProps extends Daily {
  children: ReactNode;
  todayWeather: number;
}

export const TodayForecastCard = ({ todayWeather, sunrise, sunset }: TodayForecastCardProps) => {
  return (
    <div className="flex flex-col bg-gray-700 rounded-xl p-6 text-white h-40">
      <h2 className="text-lg font-bold ">Today weather 🌡️</h2>
      <div className="flex justify-between items-center w-full">
        <span className="text-lg font-bold">{Round(todayWeather)}°C</span>
        <div className="text-lg font-bold text-right ml-48">
          <h3>Sunrise 🌇</h3>
          {sunrise ? <span>{toLocalTime(sunrise)}</span> : '--:--'}
        </div>
        <div className="text-lg font-bold text-right pr-9">
          <h3>Sunset 🌆</h3>
          {sunset ? <span>{toLocalTime(sunset)}</span> : '--:--'}
        </div>
      </div>
    </div>
  );
};
