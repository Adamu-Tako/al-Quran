import { configureStore } from "@reduxjs/toolkit";
import quranSlice from "./quran-slice";

const store = configureStore({
  reducer: {
    quran: quranSlice.reducer,
  },
});

export default store;
