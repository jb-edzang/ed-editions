import React, { useState } from "react";
import Logo from "@/components/subHeader/Logo";
import SocialIcons from "@/pages/socialmediaIcon";
import SearchInput from "@/components/subHeader/SearchInput";
import NavBar from "@/components/subHeader/NavBar";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex items-stretch  sticky top-0 z-50 h-40 bg-gray-100">
      <div className="">
        <Logo className="flex-shrink-0 h-full" />
      </div>

      <div className="flex flex-col flex-grow justify-between">
        <div className="flex items-center pt-4">
          <SearchInput className="" search={search} setSearch={setSearch} />
          <SocialIcons className="" />
        </div>

        <div>
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
