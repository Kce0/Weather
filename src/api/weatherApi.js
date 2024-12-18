import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const AUTH_KEY = 'd628236a7152afcb4edad367e87a524a'

const weatherApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
   },
})

// 오늘 날씨 검색 함수
export const searchWeather = async (query) => {
   const params = {
      q: query,
      appid: AUTH_KEY,
      units: 'metric',
      lang: 'kr',
   }
   const response = await weatherApi.get('/weather', { params })
   return response
}

// 5일간 날씨 검색 함수
export const searchFivedayWeather = async (query) => {
   const params = {
      q: query,
      appid: AUTH_KEY,
      units: 'metric',
      lang: 'kr',
   }
   const response = await weatherApi.get('/forecast', { params })
   return response
}

// 오늘 날씨
// https://api.openweathermap.org/data/2.5/weather?q=incheon&appid=내API키&units=metric&lang=kr
export const getTodayWeather = async () => {
   const response = await weatherApi.get('/weather', {
      params: {
         q: 'incheon',
         appid: AUTH_KEY,
         units: 'metric',
         lang: 'kr',
      },
   })
   return response
}
// 5일간 날씨
// https://api.openweathermap.org/data/2.5/forecast?q=incheon&appid=내API키&units=metric&lang=kr
export const get5dayWeather = async () => {
   const response = await weatherApi.get('/forecast', {
      params: {
         q: 'incheon',
         appid: AUTH_KEY,
         units: 'metric',
         lang: 'kr',
      },
   })
   return response
}

export default weatherApi
