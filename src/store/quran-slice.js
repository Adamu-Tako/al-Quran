import { createSlice } from "@reduxjs/toolkit";

const quranSlice = createSlice({
  name: "quran",
  initialState: {
    loading: false,
    surah: {},
    error: false,
  },
  reducers: {
    showSurahLoading(state) {
      state.loading = true;
    },
    showSurahSuccess(state, action) {
      state.loading = false;
      state.surah = action.payload;
    },
    showSurahError(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const quranActions = quranSlice.actions;

export default quranSlice;
