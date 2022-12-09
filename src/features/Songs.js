import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SongForm from "./songs/SongForm";
import SongList from "./songs/SongList";
import { songAdded, songDeleted, songSort } from "./songs/songSlice";

// *** Function ***  \\

export default function Songs() {
  // *** variables *** \\
  const songs = useSelector((state) => state.song.songs);
  const dispatch = useDispatch();

  // *** methods *** \\

  const addSong = (e, songInput) => {
    e.preventDefault();

    const checkSongInputfields = Object.values(songInput).includes(
      undefined || ""
    );

    const newSongWithId = {
      id: songs.length + 1,
      ...songInput,
    };

    checkSongInputfields
      ? alert("Please fill in all the fields")
      : dispatch(songAdded(newSongWithId));

    e.target.reset();
  };

  const handleSort = (e, sortBy) => {
    dispatch(songSort(sortBy));
  };

  //
  const handleDeleteButton = (id) => {
    dispatch(songDeleted(id));
  };

  return (
    <>
      <div className="songForm">
        <SongForm addSong={addSong} />
      </div>

      <hr />
      <div className="songList">
        <SongList songs={songs} sort={handleSort} delete={handleDeleteButton} />
      </div>
    </>
  );
}
