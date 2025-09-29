import { ReactNode } from 'react';

interface TodayForecastCardProps {
  children: ReactNode;
}

export const TodayForecastCard = ({ children }: TodayForecastCardProps) => {
  return (
    <div className="flex flex-col bg-gray-700 rounded-xl p-6 text-white h-40">
      <h2 className="text-lg font-bold ">Today weather 🌡️</h2>
      <div className="flex justify-between items-center w-full">{children}</div>
    </div>
  );
};
