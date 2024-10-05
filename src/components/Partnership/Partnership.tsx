import React, { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

import partnershipImage from "../../assets/images/partnership-images/partnershipImage.png";
import partnershipImageSmall from "../../assets/images/partnership-images/partnershipImageSmall.png";

const texts: string[] = [
  "Удобство использования",
  "Автоматизация процессов",
  "Коммуникация с родителями",
  "Безопасность данных",
];

const Partnership: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(
    function () {
      if (isInView) {
        mainControls.start("visible");
      } else {
        mainControls.start("hidden");
      }
    },
    [isInView]
  );

  return (
    <>
      <section ref={ref} className="px-2">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <section className="shadow-sm shadow-gray-500 custom-container mt-[60px] lg:mt-[67px] rounded-xl flex justify-between items-center lg:items-start flex-col lg:flex-row relative">
            {/* Right content */}
            <div className="flex flex-col py-[23px] px-5 lg:py-8 lg:px-[30px]">
              {/* Heading */}
              <div>
                <p className="text-lg lg:text-xl font-black leading-[22px] lg:leading-[25px] text-[#18181D]">
                  PLAYME
                </p>
                <div className="bg-[#057FE4] rounded h-[4px] w-[295px] lg:w-[550px] mt-2.5"></div>
              </div>

              {/* Text */}
              <div className="mt-5 lg:mt-[68px]">
                <h4 className="text-[#18181D] font-black text-[35px] lg:text-[50px] leading-[58px]">
                  Партнерство
                  <br /> для вашего успеха
                </h4>

                <ol className="list-disc marker:text-[#057FE4] marker:text-[30px] mt-4 lg:mt-[18px] pl-6 lg:pl-5 flex flex-col gap-y-3">
                  {texts.map((text, index) => (
                    <li
                      key={index}
                      className="text-[#18181D] text-[19.22px] font-inter font-medium leading-[28px]"
                    >
                      {text}
                    </li>
                  ))}
                </ol>
              </div>

              {/* TODO: Make the link functional */}
              <div className="mt-7 lg:mt-[108px] mb-8 lg:mb-0">
                <a
                  href="#"
                  className="text-[#057FE4] text-[16px] lg:text-[20px] font-black leading-[24px]"
                >
                  Оставить заявку
                </a>
              </div>
            </div>

            {/* Right left (image) */}
            <div>
              <img
                loading="lazy"
                src={partnershipImage}
                alt="partnershipImage"
                title="image"
                className="lg:absolute lg:bottom-0 lg:right-0 select-none h-full hidden lg:block"
              />
              <img
                loading="lazy"
                src={partnershipImageSmall}
                alt="partnershipImageSmall"
                title="image"
                className="lg:absolute lg:bottom-0 lg:right-0 select-none h-full lg:hidden"
              />
            </div>
          </section>
        </motion.div>
      </section>
    </>
  );
};

export default Partnership;
