import searchIcon from "../../media/search-icon.svg";

function SearchBar(props) {
  return (
    <div className="search-nav">
      <input id="searchField" type="text" placeholder="search here" onInput={props.getSearchValue} />
      <img className="search-icon" src={searchIcon} alt="search icon" />
    </div>
  );
}

export default SearchBar;
