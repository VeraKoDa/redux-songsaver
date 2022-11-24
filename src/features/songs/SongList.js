import React from "react";
import SongListItem from "./SongListItem";
import filterSongs from "../filter/filterSlice";
import sortSongs from "../sort/sortSlice";

function SongList(props) {
  console.log("SongList props: ", props);
  // const dispatch = useDispatch();

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
