import React from "react";
import { useState } from "react";
import { store } from "../../app/store";
import { useSelector } from "react-redux";

function SongForm(props) {
  // console.log(`props in songForm: `, props);
  const [song, setSong] = useState({
    id: store.getState().song.songs.length + 1,
    song: "",
    artist: "",
    genre: "",
    rating: "",
  });

  return (
    <form
      onSubmit={(e) => {
        props.addSong(e, song);
      }}
      name="newSongInput"
    >
      <label name="song">
        Song
        <input
          type="text"
          name="song"
          onChange={(i) => setSong({ ...song, song: i.target.value })}
        ></input>
      </label>

      <label name="artist">
        Artist
        <input
          type="text"
          name="artist"
          onChange={(i) => setSong({ ...song, artist: i.target.value })}
        ></input>
      </label>

      <label name="genre">
        Genre
        <input
          type="text"
          name="genre"
          onChange={(i) => setSong({ ...song, genre: i.target.value })}
        ></input>
      </label>

      <label name="rating">
        Rating
        <select
          style={{ minWidth: "50px" }}
          onChange={(i) => setSong({ ...song, rating: i.target.value })}
        >
          <option name="choose">Please choose a rating</option>
          <option name="1">1</option>
          <option name="2">2</option>
          <option name="3">3</option>
          <option name="4">4</option>
          <option name="5">5</option>
        </select>
      </label>

      <button>Toevoegen</button>
    </form>
  );
}

export default SongForm;
