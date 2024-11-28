import axios from "axios";

// Base URL과 API 키
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const AUTH_KEY = "d628236a7152afcb4edad367e87a524a"; // 실제 API 키로 교체

const weatherApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
  },
});

//https://api.openweathermap.org/data/2.5/weather?q=incheon&appid=내API키&units=metric&lang=kr

export const searchWeather = async (query) => {
  const response = await weatherApi.get("/weather", {
    params: {
      q: query,
      appid: AUTH_KEY,
      units: "metric",
      lang: "kr",
    },
  });
  return response;
};

export default weatherApi;
