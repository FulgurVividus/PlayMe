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
      <header className="mt-[70px] pb-[84px] md:pb-[109px] flex items-center justify-between max-w-[1200px] mx-auto relative">
        {/* Main div for text content on the left */}
        <div>
          {/* 1: First three lines */}
          <div>
            <p className="text-white text-[20px] font-black leading-[28px] text-left mb-[8px]">
              #1 софт для детскихсадов
            </p>

            <div className="relative">
              <p className="text-white text-[32px] md:text-[60px] font-black leading-[48px] md:leading-[72px]">
                Всё для вашего
              </p>
              <p className="text-white text-[32px] md:text-[60px] font-black leading-[48px] md:leading-[72px]">
                Детскогосадика
              </p>
              <img
                loading="lazy"
                src={stick}
                alt="stick"
                className="absolute left-[1.12px] bottom-[1.12px] md:left-[2.1px] md:bottom-[2.1px]"
              />
            </div>
          </div>

          {/* 2: Second heading */}
          <h6 className="mt-4 md:mt-8 mb-[12px] text-white leading-[32px] text-[20px] md:text-[24px] font-black">
            В первую очередь, раскажите о себе !
          </h6>

          {/* TODO: Make the button functional */}
          {/* 3: Three bars */}
          <div className="flex flex-col gap-3">
            <a href="#" className="headerLinkBars">
              <img
                loading="lazy"
                src={imageHeader1}
                alt="imageHeader1"
                className="hidden md:block"
              />
              <span className="hidden md:block">
                Я хочу использовать Playme для своего детскогосадика
              </span>
              <span className="md:hidden">Я хочу использовать PLAYME</span>
              <img loading="lazy" src={arrow} alt="arrow" />
            </a>
            <a href="#" className="headerLinkBars">
              <img
                loading="lazy"
                src={imageHeader2}
                alt="imageHeader2"
                className="hidden md:block"
              />
              <span className="hidden md:block">
                Я уже использую Playme для своего детскогосадика
              </span>
              <span className="md:hidden">Я уже использую PALYME</span>
              <img loading="lazy" src={arrow} alt="arrow" />
            </a>
            <a href="#" className="headerLinkBars">
              <img
                loading="lazy"
                src={imageHeader3}
                alt="imageHeader3"
                className="hidden md:block"
              />
              <span className="hidden md:block">
                Я родитель и хочу использовать Playme
              </span>
              <span className="md:hidden">Я родитель или опекун</span>
              <img loading="lazy" src={arrow} alt="arrow" />
            </a>
          </div>

          {/* 4: The last one */}
          <p className="mt-3 text-white text-[16px] md:text-[15.75px] leading-[22.4px] md:leading-[24px]">
            <span className="font-black md:font-medium">
              Уже используете Playme?
            </span>{" "}
            <a href="#" className="underline">
              Присоединяйтесь к вашей школе
            </a>
          </p>
        </div>

        {/* Div for image on the right */}
        <div>
          <img
            loading="lazy"
            src={headerRightImage}
            alt="headerRightImage"
            className="absolute bottom-0 right-0 select-none hidden md:block"
          />
        </div>
      </header>
    </>
  );
};

export default HeaderContent;
