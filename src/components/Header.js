import React, { useState } from "react";
import Logo from "@/components/subHeader/Logo";
import SocialIcons from "@/components/subHeader/SocialIcons";
import SearchInput from "@/components/subHeader/SearchInput";
import NavBar from "@/components/subHeader/NavBar";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-gray-400 p-4 sticky top-0 z-50 h-40">
      <div className="flex items-stretch">
        <Logo className="flex-shrink-0 h-full mr-4" />

        <div className="flex flex-col flex-grow justify-between">
          <div className="flex items-center gap-6">
            <SearchInput search={search} setSearch={setSearch} />
            <SocialIcons />
          </div>

          <div>
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
