import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="">
      <Image
        src="/Logo.svg"
        className=""
        alt="Logo EMPREINTES&DIGITALES | Editions"
        width={500}
        height={500}
        priority
      />
    </div>
  );
};

export default Logo;
