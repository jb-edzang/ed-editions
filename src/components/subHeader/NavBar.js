import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavBar = () => {
  const [showPublishingDropdown, setShowPublishingDropdown] = useState(false);
  const [showCatalogDropdown, setShowCatalogDropdown] = useState(false);
  const [showCoworkerDropdown, setShowCoworkerDropdown] = useState(false);

  const handlePublishingDropdown = () => {
    setShowPublishingDropdown(!showPublishingDropdown);
    setShowCatalogDropdown(false);
    setShowCoworkerDropdown(false);
  };

  const handleCoworkerDropdown = () => {
    setShowCoworkerDropdown(!showCoworkerDropdown);
    setShowCatalogDropdown(false);
    setShowPublishingDropdown(false);
  };

  const handleCatalogDropdown = () => {
    setShowCatalogDropdown(!showCatalogDropdown);
    setShowPublishingDropdown(false);
    setShowCoworkerDropdown(false);
  };

  const handleMenuClick = () => {
    setShowPublishingDropdown(false);
    setShowCatalogDropdown(false);
    setShowCoworkerDropdown(false);
  };

  return (
    <nav className="w-full">
      <ul className="flex space-x-4 justify-center">
        <li className="rounded px-4 py-4 m-2 hover:bg-white hover:font-bold">
          <Link href="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        <li className="relative rounded px-4 py-4 m-2">
          <div
            className="relative hover:bg-white hover:font-bold"
            onMouseEnter={handlePublishingDropdown}
            onMouseLeave={handlePublishingDropdown}
          >
            Publications
            {showPublishingDropdown && (
              <ul className="dropdown-menu absolute z-10 transition-all duration-300 ease-in-out transform opacity-100 scale-100 origin-top bg-gray-100 text-black">
                <li>
                  <Link href="uploadBook" className="block px-4 py-2 w-full">
                    Nouveaux Livres
                  </Link>
                </li>
                <li>
                  <Link href="uploadPhoto" className="block px-4 py-2 w-full">
                    Nouvelles galeries
                  </Link>
                </li>
                <li>
                  <Link href="uploadComment" className="block px-4 py-2 w-full">
                    Actualité
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li className="relative rounded px-4 py-4 m-2">
          <div
            className="relative hover:bg-white hover:font-bold"
            onMouseEnter={handleCatalogDropdown}
            onMouseLeave={handleCatalogDropdown}
          >
            Catalogue
            {showCatalogDropdown && (
              <ul className="dropdown-menu absolute z-10 transition-all duration-300 ease-in-out transform opacity-100 scale-100 origin-top bg-gray-100 text-black">
                <li>
                  <Link href="photo" className="block px-4 py-2 w-full">
                    Toutes nos photos
                  </Link>
                </li>
                <li>
                  <Link href="book" className="block px-4 py-2 w-full">
                    Livres
                  </Link>
                </li>
                <li>
                  <Link href="comment" className="block px-4 py-2 w-full">
                    Commentaires
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        <li className="relative rounded px-4 py-4 m-2">
          <div
            className="relative hover:bg-white hover:font-bold"
            onMouseEnter={handleCoworkerDropdown}
            onMouseLeave={handleCoworkerDropdown}
          >
            Collaborateurs
            {showCoworkerDropdown && (
              <ul className="dropdown-menu absolute z-10 transition-all duration-300 ease-in-out transform opacity-100 scale-100 origin-top bg-gray-100 text-black">
                <li>
                  <Link href="" className="block px-4 py-2 w-full">
                    Auteurs
                  </Link>
                </li>
                <li>
                  <Link href="" className="block px-4 py-2 w-full">
                    Ouvrages
                  </Link>
                </li>
                <li>
                  <Link href="" className="block px-4 py-2 w-full">
                    Activités
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </li>
        {/* ... Autres menus */}
      </ul>
    </nav>
  );
};

export default NavBar;
