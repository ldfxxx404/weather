import { WEATHER_URL } from '@/constants';
import { WeatherResponse } from '@/types/responseTyping';

export async function getWeather(): Promise<WeatherResponse> {
  try {
    const { latitude, longitude } = JSON.parse(localStorage.getItem('coordinates') || '{}');
    const res = await fetch(`${WEATHER_URL}&latitude=${latitude}&longitude=${longitude}`);
    if (!res.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await res.json();
    console.log('Weather data fetched successfully:', data);
    if (!data || Object.keys(data).length === 0) {
      throw new Error('No weather data found');
    }
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}
