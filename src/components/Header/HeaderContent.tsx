import React from "react";

import stick from "../../assets/images/header-images/stick.png";
import arrow from "../../assets/images/header-images/arrow.png";
import imageHeader1 from "../../assets/images/header-images/imageHeader1.png";
import imageHeader2 from "../../assets/images/header-images/imageHeader2.png";
import imageHeader3 from "../../assets/images/header-images/imageHeader3.png";
import headerRightImage from "../../assets/images/header-images/headerRightImage.webm.png";

const HeaderContent: React.FC = () => {
  return (
    <>
      <header className="mt-[70px] pb-[84px] lg:pb-[109px] flex items-center justify-between custom-container relative">
        {/* Main div for text content on the left */}
        <div>
          {/* 1: First three lines */}
          <div>
            <div className="relative">
              <p className="text-white text-[32px] lg:text-[60px] font-black leading-[48px] lg:leading-[72px]">
                Упрощаем управление,
              </p>
              <p className="text-white text-[32px] lg:text-[60px] font-black leading-[48px] lg:leading-[72px]">
                воспитываем лучшее
                <br /> поколение
              </p>
              <img
                loading="lazy"
                src={stick}
                alt="stick"
                title="image"
                className="absolute left-[1.12px] bottom-[1.12px] lg:left-[2.1px] lg:bottom-[2.1px]"
              />
            </div>
          </div>

          {/* 2: Second heading */}
          <h6 className="mt-4 lg:mt-8 mb-[12px] text-white leading-[32px] text-[20px] lg:text-[24px] font-black">
            В первую очередь, раскажите о себе !
          </h6>

          {/* TODO: Make the button functional */}
          {/* 3: Three bars */}
          <div className="flex flex-col gap-3">
            <a href="#" className="headerLinkBars">
              <img
                loading="lazy"
                src={imageHeader3}
                alt="imageHeader3"
                title="image"
                className="hidden lg:block"
              />
              <span className="hidden lg:block">
                Я хочу использовать Playme для своего детскогосадика
              </span>
              <span className="lg:hidden">Я родитель или опекун</span>
              <img loading="lazy" src={arrow} alt="arrow" title="image" />
            </a>
          </div>

          {/* 4: The last one */}
          <p className="mt-3 text-white text-[16px] lg:text-[15.75px] leading-[22.4px] lg:leading-[24px]">
            <span className="font-black lg:font-medium">
              Уже используете Playme?
            </span>{" "}
            <a
              href="#"
              target="_blank"
              className="underline underline-offset-4 lg:underline-offset-2"
            >
              Войдите в свой детский сад
            </a>
          </p>
        </div>

        {/* Div for image on the right */}
        <div>
          <img
            loading="lazy"
            src={headerRightImage}
            alt="headerRightImage"
            title="image"
            className="absolute bottom-0 right-0 select-none hidden lg:block h-full w-fit"
          />
        </div>
      </header>
    </>
  );
};

export default HeaderContent;
