import { useSelector, useDispatch } from "react-redux";
import { filterGenre, filterRating } from "../filter/filterSlice";

// variables

// functions

function NewSongItem(props) {
  console.log(props);

  return (
    <tr className="song-data" id={props.id}>
      <td className="song-data_row">{props.song}</td>
      <td className="song-data_row">{props.artist}</td>
      <td className="song-data_row">{props.genre}</td>
      <td className="song-data_row">{props.rating}</td>
      <td>
        <button
          className="deleteButton"
          id={props.id}
          onClick={() => props.delete(props.id)}
          value="delete"
        >
          delete
        </button>
      </td>
    </tr>
  );
}

export default NewSongItem;
