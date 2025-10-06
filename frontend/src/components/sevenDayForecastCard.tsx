import { WMO_WEATHER_CODES } from '@/constants';
import { reverseDate } from '@/utils/reverseDate';
import { Round } from '@/utils/round';
import { ReactNode } from 'react';
interface SevenDayForecastProps {
  children: ReactNode;
  weeklyMax: number[];
  weeklyMin: number[];
  code: number[];
  date: string[];
}

export const SevenDayForecast = ({ weeklyMax, weeklyMin, code, date }: SevenDayForecastProps) => {
  return (
    <div className="bg-[#40a4eb] rounded-xl p-6 text-white max-h-[417px] overflow-y-auto no-scrollbar">
      <h2 className="text-lg font-bold mb-6 max-sm:font-light">7 day forecast</h2>
      <ul className="space-y-2">
        {weeklyMax.map((maxTemp: number, idx: number) => (
          <li
            key={idx}
            className="flex justify-between items-center rounded-lg p-3 border-none bg-[#3696dbbe] transition-all shadow-sm">
            <span className="text-lg font-bold max-sm:font-light">{reverseDate(date[idx])}</span>
            <span className="text-lg font-bold max-sm:font-light lg:ml-10 text-red-400">
              {Round(maxTemp)}°C
            </span>
            <span className="text-lg font-bold max-sm:font-light lg:mr-10 text-blue-400">
              {Round(weeklyMin[idx])}°C
            </span>
            <span className="text-lg">{WMO_WEATHER_CODES[code[idx]]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
