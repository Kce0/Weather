import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const AUTH_KEY = "d628236a7152afcb4edad367e87a524a";

const weatherApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
  },
});

// 날씨 검색 함수
export const searchWeather = async (query) => {
  const params = {
    q: query,
    appid: AUTH_KEY,
    units: "metric",
    lang: "kr",
  };

  // API 요청 보내기
  const response = await weatherApi.get("/weather", { params });
  return response.data;
};

export default weatherApi;
