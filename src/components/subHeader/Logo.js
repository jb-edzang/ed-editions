import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";

const Logo = () => {
  return (
    <div className="">
      <Image
        src="/Logo.svg"
        alt="Logo EMPREINTES&DIGITALES | Editions"
        width={250}
        height={250}
        priority
      />
    </div>
  );
};

export default Logo;
