import { createSlice, current } from "@reduxjs/toolkit";
import { allSongs } from "../songs/songSlice";

const initialState = {
  sortType: "",
  songs: {},
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    Sort: (state, action) => {
      console.log(current(state), action);
      state.sortType = action.payload.sortBy;
      state.songs = action.payload.sortArray;

      console.log(state.songs);
      state.songs = state.songs.sort((a, b) => {
        return a.song < b.song ? -1 : 1;
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
