import { ReactNode } from 'react';

interface AirQualityProps {
  children: ReactNode;
}

export const AirQualityCard = ({ children }: AirQualityProps) => {
  return (
    <div className="bg-gray-700 rounded-xl p-6 text-white h-40 mt-0.5">
      <h2 className="text-lg font-bold mb-2">Air quality</h2>
      {children}
    </div>
  );
};
