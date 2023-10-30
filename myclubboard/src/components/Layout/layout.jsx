import React from "react";

export const MainLayout = ({ children, custom }) => {
  return (
    <section
      className={`min-h-screen flex-col font-poppins flex ${custom} items-center pb-8 p-4`}
    >
      {children}
    </section>
  );
};
