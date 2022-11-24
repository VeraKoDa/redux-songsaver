import { useSelector, useDispatch } from "react-redux";
import { filterGenre, filterRating } from "../filter/filterSlice";

function NewSongItem(props) {
  // console.log("newSongItem props", props);
  const dispatch = useDispatch();
  const genreInState = useSelector((state) => state.filter.genres);
  const ratingInState = useSelector((state) => state.filter.rating);

  // check and dispatch genre

  const checkGenre = !genreInState.includes(props.genre.toLowerCase());
  checkGenre ? dispatch(filterGenre(props.genre.toLowerCase())) : console.log();

  // check and dispatch rating
  const checkRating = !ratingInState.includes(parseInt(props.rating));
  checkRating ? dispatch(filterRating(parseInt(props.rating))) : console.log();

  return (
    <tr className="song-data" id={props.id}>
      <td className="song-data_row">{props.song}</td>
      <td className="song-data_row">{props.artist}</td>
      <td className="song-data_row">{props.genre}</td>
      <td className="song-data_row">{props.rating}</td>
      <td>
        <button
          className="delete"
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
