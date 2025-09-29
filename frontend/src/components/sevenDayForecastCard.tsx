import { ReactNode } from 'react';

interface SevenDayForecastProps {
  children: ReactNode;
}
export const SevenDayForecast = ({ children }: SevenDayForecastProps) => {
  return (
    <div className="bg-gray-700 rounded-xl p-6 text-white max-h-[417px] overflow-y-auto">
      <h2 className="text-lg font-bold mb-6">7 day forecast</h2>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
};
