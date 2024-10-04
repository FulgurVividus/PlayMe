import React from "react";

import headerLogo from "../../assets/images/header-images/headerLogo.jpg";

const Navigation: React.FC = () => {
  return (
    <>
      <nav className="py-2.5 flex justify-between items-center custom-container">
        <img
          loading="lazy"
          src={headerLogo}
          alt="logo"
          title="image"
          className="w-[200px] h-[60px] select-none"
        />

        {/* TODO: Make the button functional */}
        <button
          title="button"
          className="py-[8px] px-[18px] rounded-md bg-white hidden md:block"
        >
          <span className="leading-[28px] text-black font-black font-inter">
            Демо версия
          </span>
        </button>
      </nav>
    </>
  );
};

export default Navigation;
