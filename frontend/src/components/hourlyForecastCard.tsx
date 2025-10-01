import { Round } from '@/utils/round';
import { ReactNode } from 'react';

interface hourlyForecastCardProps {
  children: ReactNode;
  hourlyTemp: number;
  hourlyRainChance: number;
}

export const HourlyForecastCard = ({ hourlyRainChance, hourlyTemp }: hourlyForecastCardProps) => {
  return (

    <div className="bg-gray-700 rounded-xl p-6 text-white max-h-40 w-full ml-[50%] overflow-y-hidden no-scrollbar max-sm:ml-0">
      <h2 className="font-bold text-lg">Hourly forecast</h2>
      <div>
        <h3 className="text-lg font-bold">
          Current temperature: <span className="font-medium text-base">{Round(hourlyTemp)} °C</span>
        </h3>
        <h3 className="text-lg font-bold">
          Chance of rain: <span className="font-medium text-base">{hourlyRainChance}</span>
        </h3>
      </div>
    </div>

  );
};
