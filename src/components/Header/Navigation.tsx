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

        <div className="flex items-center gap-x-2">
          <a
            href="https://forms.gle/rNGdhhHA1Re5ya4C9"
            target="_blank"
            className="py-[8px] px-[18px] rounded-md bg-white hover:opacity-90 duration-75"
          >
            <span className="leading-[28px] text-black font-black font-inter">
              Пройти опрос
            </span>
          </a>

          {/* TODO: Make the button functional */}
          <button
            title="button"
            className="py-[8px] px-[18px] rounded-md bg-white hidden lg:block hover:opacity-90 duration-75"
          >
            <span className="leading-[28px] text-black font-black font-inter">
              Демо версия
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
