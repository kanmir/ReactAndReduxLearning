const API_KEY = 'f4bd4e6beaf776868efca74bf3421e50';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = fetch(url)
        .then(response => response.json())
        .catch((e) => {return {type: FETCH_WEATHER, payload: e} });
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}