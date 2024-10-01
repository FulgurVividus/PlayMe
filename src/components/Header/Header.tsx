import React from "react";
import Navigation from "./Navigation";
import HeaderContent from "./HeaderContent";

const Header: React.FC = () => {
  return (
    <>
      <section className="bg-headerColor px-[22px] lg:px-[0]">
        <Navigation />
        <HeaderContent />
      </section>
    </>
  );
};

export default Header;
