import { createSlice, current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  status: {
    genre: "all",
    rating: "all",
  },
  genres: [],
  rating: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    filterStatusChanged(state, action) {
      console.log(action);

      const { id } = action.payload;
      console.log(id);
      switch (id) {
        case "genre":
          state.status.genre = action.payload.value;
          break;
        case "rating":
          state.status.rating = action.payload.value;
          break;
      }
    },
    filterRating: (state, action) => {
      console.log(action.payload);
      state.rating.push(action.payload);

      // };
    },
    filterGenre: (state, action) => {
      console.log(action.payload);
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
