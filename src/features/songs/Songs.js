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

// *** Function ***  \\

export function Songs() {
  const dispatch = useDispatch();
  const song = useSelector((state) => state.song);
  const filter = useSelector((state) => state.filter);
  const sorting = useSelector((state) => state.sort);

  // console.log(filter);

  let songItems = song.songs;

  if (filter.status.genre != "all") {
    const filterby = filter.status.genre;
    console.log("filterby: ", filterby, typeof filterby);
    songItems = song.songs.filter(
      (song) => song.genre.toLowerCase() === filterby
    );
  } else if (filter.status.rating != "all") {
    const filterby = filter.status.rating;
    console.log("filterby rating", filterby);
    songItems = song.songs.filter((song) => song.rating === filterby);
  }

  //

  const addSong = (e, newSong) => {
    e.preventDefault();
    console.log(newSong);

    const checkInputfields = Object.values(newSong).includes(undefined || "");
    console.log(newSong, checkInputfields);

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

  return (
    <main>
      <div className="songForm">
        <SongForm addSong={addSong} />
      </div>
      <hr />
      <div className="songList">
        <SongList
          songs={songItems}
          sort={handleSort}
          delete={handleDeleteButton}
        />
      </div>
    </main>
  );
}
