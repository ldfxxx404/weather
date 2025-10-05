import { Round } from '@/utils/round';
import { ReactNode } from 'react';
import { toLocalTime } from '@/utils/convertTime';

interface HourlyForecastCardProps {
  children?: ReactNode;
  hourlyTemperature: number[];
  hourlyRainChance: number;
  time: string[];
}

export const HourlyForecastCard = ({
  // hourlyRainChance,
  hourlyTemperature,
  time,
}: HourlyForecastCardProps) => {
  return (
    <div className="bg-[#40a4eb] rounded-2xl p-6 text-white w-full max-w-xl ml-[50%] max-sm:ml-0 max-h-44 overflow-x-scroll no-scrollbar flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="font-bold text-lg tracking-wide items-center">Hourly Forecast</h2>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="flex flex-1 gap-2">
            {hourlyTemperature.map((t, idx) =>
              idx % 3 === 0 ? (
                <div
                  key={idx}
                  className="flex flex-col items-center px-2 py-0.5 rounded bg-[#3696dbbe] min-w-[48px]">
                  <span className="text-sm font-semibold">{Round(t)}°C</span>
                  <span className="text-xs text-blue-100 mt-0.5">{toLocalTime(time[idx])}</span>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
