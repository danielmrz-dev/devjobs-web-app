import "./Filter.scss";
import filter from "../../assets/mobile/icon-filter.svg";
import search from "../../assets/desktop/icon-search-white.svg";

export const Filter = () => {
  return (
    <form className="filter">
      <input
        type="text"
        className="filter__input"
        placeholder="Filter by title"
      />
      <button className="filter__filter-btn">
        <img src={filter} alt="" />
      </button>
      <button className="filter__search-btn">
        <img src={search} alt="" />
      </button>
    </form>
  );
};
