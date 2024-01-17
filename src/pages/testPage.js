// components/Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPhone,
  faEnvelope,
  faFacebook,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"; // Import de l'Image de Next.js

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Utilisation de l'élément Image pour le logo */}
        <Image src="/Logo.svg" alt="Logo" width={100} height={40} />
        <h1 className="text-lg font-bold">Your Header Text</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="searchInput">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="telIcon">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div className="emailIcon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="facebookIcon">
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-gray-300">
          <FontAwesomeIcon icon={faHome} /> Home
        </a>
        <div className="dropdownMenu1">DropdownMenu1</div>
        <div className="dropdownMenu2">DropdownMenu2</div>
      </div>
    </header>
  );
};

export default Header;
