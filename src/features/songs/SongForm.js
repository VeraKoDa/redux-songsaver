import React from "react";
import { useState } from "react";
import { store } from "../../app/store";
import { useSelector } from "react-redux";

function SongForm(props) {
  console.log(`props in songForm: `, props);
  const [song, setSong] = useState();
  const [artist, setArtist] = useState();
  const [genre, setGenre] = useState();
  const [rating, setRating] = useState();

  const genreFilter = useSelector((state) => state.filter.genre);

  const genreCheck = (newGenre) => {
    console.log("in genreCheck", newGenre);
    newGenre.toLowerCase();
    console.log(newGenre);

    console.log(genreFilter);
    genreFilter.includes(newGenre)
      ? console.log("genre staat er in")
      : console.log("genre staat er NIET in");
  };

  console.log(typeof genre);

  const newSong = {
    id: store.getState().song.songs.length + 1,
    song: song,
    artist: artist,
    genre: genre,
    rating: parseInt(rating),
  };

  return (
    <form
      onSubmit={(e) => {
        props.addSong(e, newSong);
        genreCheck(genre);
      }}
      name="newSongInput"
    >
      <label name="song">
        Song
        <input
          type="text"
          name="song"
          onChange={(i) => setSong(i.target.value)}
        ></input>
      </label>

      <label name="artist">
        Artist
        <input
          type="text"
          name="artist"
          onChange={(i) => setArtist(i.target.value)}
        ></input>
      </label>

      <label name="genre">
        Genre
        <input
          type="text"
          name="genre"
          onChange={(i) => setGenre(i.target.value.toLowerCase())}
        ></input>
      </label>

      <label name="rating">
        Rating
        <select
          style={{ minWidth: "50px" }}
          onChange={(i) => setRating(i.target.value)}
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
