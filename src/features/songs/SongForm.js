import React from "react";
import { useState } from "react";

function SongForm(props) {
  const initialState = {
    song: "",
    artist: "",
    genre: "",
    rating: "",
  };

  const [newSong, setnewSong] = useState(initialState);

  const handleSubmit = (e) => {
    props.addSong(e, newSong);
    setnewSong(initialState);
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      id="newSongInput"
    >
      <label name="song">
        Song
        <input
          type="text"
          name="song"
          value={newSong.song}
          onChange={(i) =>
            setnewSong({ ...newSong, [i.target.name]: i.target.value })
          }
        ></input>
      </label>

      <label name="artist">
        Artist
        <input
          type="text"
          name="artist"
          value={newSong.artist}
          onChange={(i) =>
            setnewSong({ ...newSong, [i.target.name]: i.target.value })
          }
        ></input>
      </label>

      <label name="genre">
        Genre
        <input
          type="text"
          name="genre"
          value={newSong.genre}
          onChange={(i) =>
            setnewSong({ ...newSong, [i.target.name]: i.target.value })
          }
        ></input>
      </label>

      <label name="rating">
        Rating
        <select
          style={{ minWidth: "50px" }}
          name="rating"
          value={newSong.rating}
          onChange={(i) =>
            setnewSong({ ...newSong, [i.target.name]: i.target.value })
          }
        >
          <option name="choose">Please choose a rating</option>
          <option name="1">1</option>
          <option name="2">2</option>
          <option name="3">3</option>
          <option name="4">4</option>
          <option name="5">5</option>
        </select>
      </label>

      <button className="songFormButton">Toevoegen</button>
    </form>
  );
}

export default SongForm;
