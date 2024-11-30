import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { searchWeather, searchFivedayWeather, getTodayWeather, get5dayWeather } from '../../api/weatherApi'

// 날씨 검색을 위한 비동기 액션
export const fetchSearchResults = createAsyncThunk('weather/fetchSearchResults', async ({ query }) => {
   const response = await searchWeather(query)
   return response.data
})

// 5일간 날씨 검색을 위한 비동기 액션
export const fetchFiveDaySearchResults = createAsyncThunk('weather/fetchFiveDaySearchResults', async ({ query }) => {
   const response = await searchFivedayWeather(query)
   return response.data
})

// 오늘날씨
export const fetchTodayWeathers = createAsyncThunk('weather/fetchTodayWeathers', async ({ category }) => {
   if (category === 'today') {
      const reponse = await getTodayWeather(category)
      return reponse.data
   }
   return null
})

// 5일간
export const fetch5dayWeathers = createAsyncThunk('weather/fetch5dayWeathers', async ({ category }) => {
   if (category === 'fiveday') {
      const reponse = await get5dayWeather(category)
      return reponse.data
   }
   return null
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      loading: false,
      error: null,
      searchResults: {},
      fivedaysearchResults: {},
      todayWeathers: {},
      // 날짜별 그룹화를 하기 위해서는 초기값이 null값이여야함
      fivedayWeathers: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         // fetchSearchResults
         .addCase(fetchSearchResults.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchSearchResults.fulfilled, (state, action) => {
            state.loading = false
            state.searchResults = action.payload
         })
         .addCase(fetchSearchResults.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         // fetchFiveDaySearchResults
         .addCase(fetchFiveDaySearchResults.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchFiveDaySearchResults.fulfilled, (state, action) => {
            state.loading = false
            state.fivedaysearchResults = action.payload
         })
         .addCase(fetchFiveDaySearchResults.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         // fetchTodayWeathers
         .addCase(fetchTodayWeathers.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchTodayWeathers.fulfilled, (state, action) => {
            state.loading = false
            state.todayWeathers = action.payload
         })
         .addCase(fetchTodayWeathers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         //fetch5dayWeathers
         .addCase(fetch5dayWeathers.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetch5dayWeathers.fulfilled, (state, action) => {
            state.loading = false
            state.fivedayWeathers = action.payload
         })
         .addCase(fetch5dayWeathers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default weatherSlice.reducer
