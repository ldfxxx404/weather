import { ReactNode } from 'react';
interface AirQualityProps {
  children: ReactNode;
  co: number;
  dust: number;
  aqi: number;
}

export const AirQualityCard = ({ dust, aqi, co }: AirQualityProps) => {
  return (
    <div className="bg-[#40a4eb] rounded-xl p-6 text-white h-40 mt-0.5">
      <h2 className="text-lg font-bold mb-2 max-sm:font-light">Air quality</h2>
      <h3 className="text-lg font-bold max-sm:font-light">
        CO₂: <span className="font-medium text-base max-sm:font-light">{co}</span>
      </h3>
      <h3 className="text-lg font-bold max-sm:font-light">
        AQI: <span className="font-medium text-base max-sm:font-light">{aqi}</span>
      </h3>
      <h3 className="text-lg font-bold max-sm:font-light">
        Dust: <span className="font-medium text-base max-sm:font-light">{dust}</span>
      </h3>
    </div>
  );
};
