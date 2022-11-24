import { useSelector, useDispatch } from "react-redux";
import {
  filterStatus,
  filterStatusChanged,
  filterGenre,
  filterRating,
} from "./filterSlice";
// import filterSlice from "./filterSlice";
// import { availableGenres } from "./Filters";

function FilterButtons(props) {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);

  // genre filter \\

  const GenreFilters = ({ value: genres, onChange }) => {
    const availableGenres = genres.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ));

    return (
      <select
        className="select-hidden"
        id="genre"
        style={{ minWidth: "100px" }}
        onChange={(e) => onChange(e, e.target.value)}
      >
        <option value="">filter by genre</option>
        <option value="all">All genres</option>
        {availableGenres}
      </select>
    );
  };

  const onGenreChange = (event, value) => {
    console.log("genre value: ", value);
    // dispatch(filterGenre(value));
  };

  //
  // rating filter \\
  //

  const RatingFilter = ({ value: rating, onChange }) => {
    const availableRatings = rating.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ));

    return (
      <select
        className="select-hidden"
        id="rating"
        style={{ minWidth: "100px" }}
        onChange={(e) => onChange(e, e.target.value)}
      >
        <option value="">filter by rating</option>
        <option value="clear"></option>
        {availableRatings}
      </select>
    );
  };

  const onRatingChange = (event, value) => {
    console.log("rating value: ", value);

    // dispatch(filterRating(value));
  };

  return (
    <>
      <GenreFilters value={filter.genres} onChange={onGenreChange} />
      <br />
      <RatingFilter value={filter.rating} onChange={onRatingChange} />
    </>
  );
}
export default FilterButtons;
