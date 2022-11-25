import { createSlice, current } from "@reduxjs/toolkit";
import { allSongs } from "../songs/songSlice";

const initialState = {
  sortBy: "",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    Sort: (state, action) => {
      console.log(current(state), action);
      state.sortBy = action.payload.sortBy;
      console.log(state.sortBy);
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
  },
});

export const { Sort } = sortSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSort = (state) => state.sort.value;
// console.log(selectSort());

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default sortSlice.reducer;
