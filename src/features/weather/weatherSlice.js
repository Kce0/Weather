import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchWeather } from "../../api/weatherApi";

// 날씨 검색을 위한 비동기 액션
export const fetchSearchResults = createAsyncThunk(
  "weather/fetchSearchResults",
  async (query, { rejectWithValue }) => {
    try {
      const response = await searchWeather(query); // weatherApi에서 반환된 데이터를 바로 반환
      return response; // 성공시 data를 반환
    } catch (error) {
      // 에러 발생 시 메시지 반환
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  searchResults: {}, // 날씨 결과는 객체 형태로 저장
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload; // action.payload에 있는 날씨 데이터를 저장
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // 에러 메시지 처리
      });
  },
});

export default weatherSlice.reducer;
