import { createSlice, current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  genres: [],
  rating: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    filterSongs(state, action) {
      console.log("in filterSongs");
    },

    filterStatusChanged(state, action) {
      console.log("filterStatusChanged", state, action);
      state.status = action.payload;
    },

    filterRating: (state, action) => {
      console.log(action.payload);
      state.rating.push(parseInt(action.payload));

      // };
    },
    filterGenre: (state, action) => {
      state.genres.push(action.payload);
    },
  },
});

export const {
  filterStatusChanged,
  filterSongs,
  filterArtist,
  filterGenre,
  filterRating,
} = filterSlice.actions;

export default filterSlice.reducer;
