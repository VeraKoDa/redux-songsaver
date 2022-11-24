import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { song, artist, genre, rating } from "../sort/sortSlice";
import SongForm from "./SongForm";
import SongList from "./SongList";
import FilterButtons from "../filter/FilterButton";

import {
  songAdded,
  songDeleted,
  songSort,
  songFilter,
} from "../songs/songSlice";

import { filterGenre, filterRating } from "../filter/filterSlice";

// *** global variables ***  \\

// *** Function ***  \\

export function Songs() {
  const dispatch = useDispatch();
  const song = useSelector((state) => state.song);
  const genreFilter = useSelector((state) => state.filter.genres);
  console.log(genreFilter);

  //
  const addSong = (e, newSong) => {
    e.preventDefault();

    const checkInputfields = Object.values(newSong).includes(undefined);
    console.log(newSong, checkInputfields);

    const checkGenreInput = genreFilter.includes(newSong.genre.toLowerCase());
    console.log(checkGenreInput);

    if (checkInputfields === true) {
      alert("Please fill in all the fields");
      return;
    } else {
      dispatch(songAdded(newSong));
    }
    e.target.reset();
  };

  //
  const handleSort = (e, sortBy) => {
    console.log("sortBy: ", sortBy);
    dispatch(songSort(sortBy));
    console.log("in handleSort voorbij dispatch");
  };

  //
  const handleDeleteButton = (id) => {
    console.log("in handleDeleteButton");
    dispatch(songDeleted(id));
  };

  //
  const handleFilter = (e, newFilter) => {
    console.log("in handleFilter: ", newFilter);
    e.target.id === "rating"
      ? dispatch(filterRating(newFilter))
      : dispatch(filterGenre(newFilter));
  };

  return (
    <main>
      <div className="songForm">
        <SongForm addSong={addSong} />
      </div>

      <div className="filter">
        <FilterButtons filter={handleFilter} />
      </div>

      <div className="songList">
        <SongList
          songs={song.songs}
          sort={handleSort}
          delete={handleDeleteButton}
        />
      </div>
    </main>
  );
}
