import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPhone,
  faEnvelope,
  faFacebook,
  faLinkedin,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-100 text-gray-800 p-2 h-auto flex items-center ">
      <div className="flex-none">
        <Image src="/Logo.svg" alt="Logo" height={250} width={250} />
      </div>
      <div className="flex-grow ml-4 ">
        <div className="mb-4 flex space-x-2">
          <div className="relative w-1/5 ">
            <input
              type="search"
              placeholder="Search"
              className="border p-1 pl-6 w-40"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            />
          </div>
          <div className="flex w-5/6">
            <div className="telIcon w-5">
              <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
            </div>
            <div className="emailIcon w-5">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-500" />
            </div>
            <div className="facebookIcon w-5">
              <FontAwesomeIcon icon={faFacebook} className="text-green-500" />
            </div>
            <div className="linkedinIcon w-5">
              <FontAwesomeIcon icon={faLinkedin} className="text-green-500" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon
            icon={faHome}
            className="hover:text-gray-600 cursor-pointer"
          />
          <div className="publications flex-grow">Publications</div>
          <div className="catalogue flex-grow">Catalogue</div>
          <div className="collaboration flex-grow">Collaborations</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
