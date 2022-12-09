import { createSlice, current } from "@reduxjs/toolkit";
import { songData } from "../../songData";

const initialState = {
  songs: songData,
};

const songSlice = createSlice({
  name: `songs`,
  initialState,

  reducers: {
    songAdded(state, action) {
      state.songs.find((song) => song.id === action.payload.id)
        ? alert(
            "er is iets mis gegaan, er staat al een liedje in de lijst met het zelfde ID nummer."
          )
        : state.songs.push(action.payload);
    },

    songDeleted(state, action) {
      const songIndex = state.songs.findIndex(
        (song) => song.id === parseInt(action.payload)
      );

      state.songs.splice(songIndex, 1);
    },

    songSort(state, action) {
      state.songs.sort((a, b) => {
        switch (action.payload) {
          case "id":
            return a.id < b.id ? -1 : 1;

          case "song":
            return a.song.toLowerCase() < b.song.toLowerCase() ? -1 : 1;

          case "artist":
            return a.artist.toLowerCase() < b.artist.toLowerCase() ? -1 : 1;

          case "genre":
            return a.genre.toLowerCase() < b.genre.toLowerCase() ? -1 : 1;

          case "rating":
            return a.rating < b.rating ? -1 : 1;

          default:
            return state;
        }
      });
    },
  },
});

export const { songAdded, songDeleted, songSort } = songSlice.actions;

export default songSlice.reducer;
