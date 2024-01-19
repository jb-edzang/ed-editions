import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import NavBar from "@/components/subHeader/NavBar";
import Logo from "@/components/subHeader/Logo";

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
    <div className="flex flex-wrap gap-4">
      <Logo />
      <form className="flex" onSubmit={handleSubmit}>
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
      <ul className="bg-red-400 flex gap-2">
        <li>
          <a href="tel:yourPhoneNumber" className="phone">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </li>
        <li className="emailIcon">
          <a href="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/yourProfile" className="linkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/yourProfile" className="facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/yourChannel" className="youtube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
      </ul>
      <NavBar />
    </div>
  );
};

export default SearchInput;
