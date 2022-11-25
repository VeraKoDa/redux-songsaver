import FilterButtons from "./filter/FilterButton";
import { useDispatch } from "react-redux";
import { filterRating, filterGenre } from "./filter/filterSlice";

function Footer() {
  console.log("in footer");
  return (
    <footer>
      <div className="filter">
        <FilterButtons />
      </div>
    </footer>
  );
}

export default Footer;
