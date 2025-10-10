import { ReactNode } from 'react';
import { toLocalTime } from '@/utils/convertTime';

interface SnowForecastCardProps {
  hourlySnow: number[];
  time: string[];
  children?: ReactNode;
}

export const SnowForecastCard = ({ hourlySnow, time }: SnowForecastCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 text-gtext w-full max-w-xl ml-[50%] max-sm:ml-0 max-h-44 overflow-x-scroll no-scrollbar flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="font-bold text-lg tracking-wide items-center">Hourly Snow</h2>
      </div>
      <div className="flex flex-1 gap-2">
        {hourlySnow.map((snow, idx) =>
          idx % 3 === 0 ? (
            <div
              key={idx}
              className="flex flex-col items-center px-2 py-0.5 rounded bg-inside min-w-[60px]">
              <span className="text-sm font-semibold">{snow}mm</span>
              <span className="text-xs text-blue-100 mt-0.5">{toLocalTime(time[idx])}</span>
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};
