import { useSelector, useDispatch } from "react-redux";
import { filterStatusChanged } from "./filterSlice";

// import filterSlice from "./filterSlice";
// import { availableGenres } from "./Filters";

function FilterButtons(props) {
  console.log(`in filterButtons`);
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);
  console.log(filter);

  // genre filter \\

  const GenreFilters = ({ value: genres, onClick }) => {
    const availableGenres = genres.map((value) => (
      <li key={value} value={value} className="genre">
        {value}
      </li>
    ));

    return (
      <ul
        className=""
        id="genre"
        style={{ minWidth: "100px" }}
        onClick={(e) => onClick(e, e.target)}
      >
        Filter by genre
        <li className="genre" value="all">
          All
        </li>
        {availableGenres}
      </ul>
    );
  };

  // rating filter \\

  const RatingFilter = ({ value: rating, onClick }) => {
    const availableRatings = rating.map((value) => (
      <li key={value} value={value} className="rating">
        {value}
      </li>
    ));

    return (
      <ul
        className=""
        id="rating"
        style={{ minWidth: "100px" }}
        onClick={(e) => onClick(e, e.target)}
      >
        Filter by rating
        <li className="rating" value="all">
          All
        </li>
        {availableRatings}
      </ul>
    );
  };

  const onChange = (event, target) => {
    console.log(event);
    const { className, value } = target;
    console.log(className);
    dispatch(
      filterStatusChanged({
        id: className,
        value: value,
      })
    );

    // dispatch(filterRating(value));
  };

  return (
    <>
      <GenreFilters value={filter.genres} onClick={onChange} />
      <br />
      <RatingFilter value={filter.rating} onClick={onChange} />
    </>
  );
}
export default FilterButtons;
