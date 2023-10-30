import Link from "next/link";
import React from "react";
// This is the Heading component that displays the logo and the name of the website.
export const Logo = () => {
  return (
    <Link className="self-start" href={"/"}>
      <img src="/mcb_logo.svg" alt="" />
    </Link>
  );
};

const Heading = () => {
  return (
    <div className="self-start flex items-center gap-4">
      <Logo />
      <p className="font-poppins font-bold text-2xl"> MyBoard </p>
    </div>
  );
};

export default Heading;
