import axios from 'axios';

const API_KEY = 'f4bd4e6beaf776868efca74bf3421e50';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    let request = axios(url).catch(e => {
        console.log(e.message);
        return {
            type: FETCH_WEATHER,
            payload: null
        }
    });

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}