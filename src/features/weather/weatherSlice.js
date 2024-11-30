import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { searchWeather, getTodayWeather } from '../../api/weatherApi'

// 날씨 검색을 위한 비동기 액션
export const fetchSearchResults = createAsyncThunk('weather/fetchSearchResults', async ({ query }) => {
   const response = await searchWeather(query)
   return response.data
})

export const fetchTodayWeathers = createAsyncThunk('weather/fetchTodayWeathers', async ({ category }) => {
   const reponse = await getTodayWeather(category)
   return reponse.data
})

const weatherSlice = createSlice({
   name: 'weather',
   initialState: {
      loading: false,
      error: null,
      searchResults: {},
      todayWeathers: {},
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
   },
})

export default weatherSlice.reducer
