import { AIR_QUALITY_URL } from '@/constants';
import { AirQualityResponse } from '@/types/responseTyping';

export default async function getAirQuality(): Promise<AirQualityResponse> {
  try {
    const { latitude, longitude } = JSON.parse(localStorage.getItem('coordinates') || '{}');
    const res = await fetch(`${AIR_QUALITY_URL}&latitude=${latitude}&longitude=${longitude}`);
    if (!res.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await res.json();
    console.log('Air quality data fetched successfully:', data);
    if (!data || Object.keys(data).length === 0) {
      throw new Error('No air quality data found');
    }
    return data;
  } catch (error) {
    console.error('Error fetching air quality data:', error);
    throw error;
  }
}
