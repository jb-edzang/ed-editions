import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="">
      <Image
        src="/Logo.svg"
        className=""
        alt="Logo EMPREINTES&DIGITALES | Editions"
        width={250}
        height={150}
        priority
      />
    </div>
  );
};

export default Logo;
