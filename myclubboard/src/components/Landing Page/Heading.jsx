import React from "react";
// This is the Heading component that displays the logo and the name of the website.
const Heading = () => {
  return (
    <div className="p-4 flex items-center gap-4">
      <img src="/mcb_logo.svg" alt="" />
      <p className="font-poppins font-bold text-2xl"> MyBoard </p>
    </div>
  );
};

export default Heading;
