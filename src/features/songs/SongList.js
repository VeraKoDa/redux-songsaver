import React from "react";

function SongList(props) {
  const songDetails = props.songs.map((song) => {
    return (
      <tr className="song-data" key={song.id}>
        <td className="song-data_row">{song.id}</td>
        <td className="song-data_row">{song.song}</td>
        <td className="song-data_row">{song.artist}</td>
        <td className="song-data_row">{song.genre}</td>
        <td className="song-data_row">{song.rating}</td>
        <td className="song-data_row">
          <button
            className="deleteButton"
            id={song.id}
            onClick={() => props.delete(song.id)}
            value="delete"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead onClick={(e) => props.sort(e, e.target.id)}>
          <tr className="song-header">
            <th className="song-header_item" id="id">
              Id
            </th>
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
        <tbody>{songDetails}</tbody>
      </table>
    </>
  );
}

export default SongList;
