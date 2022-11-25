import { createSlice, current } from "@reduxjs/toolkit";
import { songData } from "../../songData";
import {useSelector} from "react-redux"

const initialState = {
  songs: songData,
};

const songSlice = createSlice({
  name: `songs`,
  initialState,

  reducers: {
    songAdded(state, action) {
      console.log("action:", action);
      state.songs.push(action.payload);
    },
    songDeleted(state, action) {
      console.log("songDeleted", action);
      const song = state.songs.findIndex(
        (song) => song.id === parseInt(action.payload)
      );
      console.log("song indexnr.: ", song);
      state.songs.splice(song, 1);
    },
    songSort(state, action) {
      console.log("in songSort", action);
      state.songs.sort((a, b) => {
        switch (action.payload) {
          case "song":
            return a.song < b.song ? -1 : 1;

          case "artist":
            return a.artist < b.artist ? -1 : 1;

          case "genre":
            return a.genre < b.genre ? -1 : 1;

          case "rating":
            return a.rating < b.rating ? -1 : 1;

          default:
            return state;
        }
      });
    },
    songFilter(state, action) {
      console.log("in songFilter met: ", action);
      const genre = action.payload;
      console.log(typeof state.songs);

      const filter = state.songs.filter((song) => song.genre === genre);

      state.songs = filter;
    },
  },
});

export const { songAdded, songDeleted, songSort, songFilter } =
  songSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// export const allSongs = (state) => state.songs.value;

export default songSlice.reducer;
