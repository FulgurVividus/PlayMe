import React, { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

import mainProductDescrImage from "../../assets/images/mainProductDescription-images/mainProductDescrImage.png";
import arrow from "../../assets/images/mainProductDescription-images/arrow.png";

const leftSideTexts: string[] = [
  "Автоматизируйте выставление счетов и оплату",
  "Отправляйте сообщения в режиме реального времени сотрудникам и семьям",
  "Эффективно запускайте свою программу с помощью регистрации,прием, отчеты и управление несколькими площадками",
  "Поддержка преподавателей в классе и за его пределамис учебной программой, планами уроков и наблюдениями",
  "Автоматически синхронизировать учет рабочего времени с расчетом заработной платы дляпростая и точная обработка заработной платы",
];

const MainProductDescription: React.FC = () => {
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
      <section ref={ref} className="px-[28px] mt-[128px] lg:mt-[160px]">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <h3 className="text-center font-bold text-2xl leading-[40px] hidden lg:block">
            Ваша полная система программного обеспечения для дошкольного
            образования и ухода за детьми
          </h3>
          <h3 className="text-center font-bold text-2xl leading-[40px] lg:hidden">
            Система программного обеспечения для детских садов
          </h3>

          <div className="mt-[53px] lg:mt-[32px] text-center mb-11 lg:mb-6">
            <span className="p-[19px] border-solid border-4 border-[#6476ff] rounded-full text-[#6476ff] font-black shadow-md shadow-[#6476ff]">
              Что умеет PLAYME ?
            </span>
          </div>

          {/* Main div for left & right content */}
          <div className="custom-container bg-white rounded-[28px] shadow-sm shadow-gray-500 flex items-center justify-between mt-11 lg:mt-[42px] relative">
            {/* div for left content */}
            <div className="py-7 px-6 lg:py-32 lg:px-[53px] w-fit">
              <h5 className="font-black text-[24px] leading-[32px] lg:leading-[40px]">
                Все самое необходимое
                <br /> в одном интегрированном приложение
              </h5>

              <ol className="mt-[25px] lg:mt-10 list-disc marker:text-[#057FE4] marker:text-[30px] flex flex-col gap-y-16 px-[18px] lg:w-[577px] max-w-full break-words">
                {leftSideTexts.map((text, index) => (
                  <li
                    key={index}
                    className="font-inter font-medium text-[20px] text-[#5C5E6A] text-balance"
                  >
                    {text}
                  </li>
                ))}
              </ol>

              <a
                href="#form"
                className="mt-[30px] px-[18px] text-white bg-[#057FE4] max-w-fit p-[15px] rounded-[4px] hidden lg:block"
              >
                <span className="font-inter text-[17px] leading-[25px] font-medium">
                  Протестировать демо версию
                </span>
              </a>
              <a
                href="#form"
                className="flex items-center gap-x-3 mt-[30px] px-[18px] lg:hidden"
              >
                <span className="font-inter text-[17px] leading-[25px] font-medium text-[#057FE4]">
                  Протестировать демо версию
                </span>
                <img src={arrow} alt="arrow" title="image" />
              </a>
            </div>

            {/* div for right content (image) */}
            <div>
              <img
                loading="lazy"
                src={mainProductDescrImage}
                alt="mainProductDescrImage"
                title="image"
                className="hidden xl:block absolute bottom-0 right-0 select-none h-fit"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default MainProductDescription;
