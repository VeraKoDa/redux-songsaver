import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../features/songs/songSlice";
import sortReducer from "../features/sort/sortSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    song: songReducer,
    sort: sortReducer,
    filter: filterReducer,
  },
});
