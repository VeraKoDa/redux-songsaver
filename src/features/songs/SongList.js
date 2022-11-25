import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SongListItem from "./SongListItem";
import { filterGenre, filterRating } from "../filter/filterSlice";

function SongList(props) {
  console.log("SongList props: ", props);
  const dispatch = useDispatch();

  let songOverview = props.songs;
  console.log(songOverview);

  //
  //
  //
  //

  const genres = props.songs.map((song) => song.genre.toLowerCase());
  const ratings = props.songs.map((song) => song.rating);
  console.log(genres, ratings);

  // // console.log("newSongItem props", props);

  // const dispatch = useDispatch();
  // // const genreInState = useSelector((state) => state.filter.genres);
  // // const ratingInState = useSelector((state) => state.filter.rating);

  // // // check and dispatch genre

  // // const checkGenre = !genreInState.includes(newGenre);
  // dispatch(filterGenre(genres));

  // // // check and dispatch rating
  // // const checkRating = !ratingInState.includes(newRating);
  // dispatch(filterRating(ratings));

  //
  //
  //
  //
  //
  const components = props.songs.map((song) => (
    <SongListItem
      key={song.id}
      id={song.id}
      song={song.song}
      artist={song.artist}
      genre={song.genre}
      rating={song.rating}
      delete={props.delete}
    />
  ));

  return (
    <>
      <table style={{ width: "100%", textAlign: "center" }}>
        <thead onClick={(e) => props.sort(e, e.target.id)}>
          <tr className="song-header">
            <th className="song-header_item" id="song">
              Song
            </th>
            <th className="song-header_item" id="artist">
              Artist
            </th>
            <th className="song-header_item" id="genre">
              Genre
            </th>
            <th className="song-header_item" id="rating">
              Rating
            </th>
            <th className="song-header_item" id="delete">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>{components}</tbody>
      </table>
    </>
  );
}

export default SongList;
