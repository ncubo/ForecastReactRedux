import axios from 'axios';

const API_KEY = '58a5c117dff586e91d38d773c434bf20';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  // const url = `${ROOT_URL}&q=${city},ca`; //solo para Canadá
  const url = `${ROOT_URL}&q=${city}`; //para cualquier ciudad
  const request = axios.get(url);

  console.log('Request: ',request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
