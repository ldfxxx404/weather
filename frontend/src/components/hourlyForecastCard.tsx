import { ReactNode } from 'react';

interface hourlyForecastCardProps {
  children: ReactNode;
}

export const HourlyForecastCard = ({ children }: hourlyForecastCardProps) => {
  return (
    <div className="bg-gray-700 rounded-xl p-6 text-white h-40 w-full ml-[50%]">
      <h2 className="font-bold text-lg">Hourly forecast</h2>
      {children}
    </div>
  );
};
