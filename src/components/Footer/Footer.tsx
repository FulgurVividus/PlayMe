import React from "react";

import footerLogo from "../../assets/images/footer-images/footerLogo.png";
import appStore from "../../assets/images/footer-images/AppStore.png";
import playMarket from "../../assets/images/footer-images/PlayMarket.png";
import telegram from "../../assets/images/footer-images/telegramBg.png";
import instagram from "../../assets/images/footer-images/Instagram.png";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-footerColor mt-[50px] lg:mt-[100px]">
        <section className="text-[#B9B9BD] custom-container px-5 py-20">
          {/* Line div */}
          <div className="bg-[#d0d0d0] h-[4px] mt-10 lg:mt-20 w-full rounded-sm hidden lg:block"></div>

          {/* Footer content div */}
          <div className="mt-[31px] flex flex-col gap-y-[25px] lg:gap-y-0 lg:flex-row justify-between items-center">
            <img
              loading="lazy"
              src={footerLogo}
              alt="footerLogo"
              title="image"
              className="w-[200px] h-[60px] select-none"
            />
            <div className="bg-[#d0d0d0] h-[1px] my-1 w-full rounded-sm block lg:hidden"></div>

            <div className="flex items-center gap-x-[17px]">
              <a
                href="https://apps.apple.com/uz/app/playme-edu/id6651840341"
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={appStore}
                  alt="AppStore"
                  title="image"
                  className="w-[113px] h-[32px] lg:w-[123px] lg:h-[35px] select-none"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=alpha.soft.playme"
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={playMarket}
                  alt="PlayMarket"
                  title="image"
                  className="w-[113px] h-[32px] lg:w-[123px] lg:h-[35px] select-none"
                />
              </a>
            </div>

            <div className="flex items-center gap-x-2.5">
              <a href="https://t.me/playmeedu" target="_blank">
                {/* TODO: Change image */}
                <img
                  loading="lazy"
                  src={telegram}
                  alt="telegram"
                  title="image"
                  className="select-none"
                />
              </a>
              <a
                href="https://www.instagram.com/playmeeducation_com/?utm_source=ig_web_button_share_sheet "
                target="_blank"
              >
                <img
                  loading="lazy"
                  src={instagram}
                  alt="instagram"
                  title="image"
                  className="select-none"
                />
              </a>
            </div>
          </div>

          {/* Rights div */}
          <div className="text-center mt-[38px]">
            <p className="font-black text-[14px] leading-[19px]">
              © {new Date().getFullYear()} PLAYME - Все права защищены
            </p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
