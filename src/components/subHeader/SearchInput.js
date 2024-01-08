import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ search, setSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("valeur de recheche soumise :", search);
    setSearch("");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    //console.log("nouvelle valeur de recherche", e.target.value);
  };

  return (
    <form className="flex items-center ml-auto" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          id="searchInput"
          type="text"
          autoComplete="off"
          placeholder="Search input"
          value={search}
          onChange={handleChange}
          className="rounded p-3 border border-gray-400"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute right-2 top-3 h-[25px]"
        />
      </div>
    </form>
  );
};

export default SearchInput;
