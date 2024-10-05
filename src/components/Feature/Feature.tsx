import React, { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

import arrow from "../../assets/images/feature-images/arrow.png";
import featureImage1 from "../../assets/images/feature-images/featureImage1.png";
import featureImage2 from "../../assets/images/feature-images/featureImage2.png";
import featureImage3 from "../../assets/images/feature-images/featureImage3.png";

const cards: {
  id: number;
  img: string;
  title: string;
  text: string;
  link: string;
}[] = [
  {
    id: 1,
    img: featureImage1,
    title: "Администраторы и директоры",
    text: "Управление регистрацией, выставлением счетов, оплата труда, связь и бизнес из приложение Playme.",
    link: "Оставить заявку",
  },
  {
    id: 2,
    img: featureImage2,
    title: "Преподаватели и персонал",
    text: "Легко управляйте повседневными задачами, от регистрация детей и мероприятия, до общение с родителями.",
    link: "Оставить заявку",
  },
  {
    id: 3,
    img: featureImage3,
    title: "Родители или опекуны",
    text: "Оставайтесь на связи с вашим ребенком и легко настроивать онлайн-платежи.",
    link: "Оставить заявку",
  },
];

const Feature: React.FC = () => {
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
      <section ref={ref} className="px-7">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <section className="bg-featureColor mt-[80px] rounded-[40px] custom-container">
            <p className="text-white text-[28px] leading-[40px] font-bold text-center pt-8 lg:pt-[46px]">
              Разработано с учетом ваших потребностей
            </p>

            {/* Cards */}
            <ul className="flex flex-col lg:flex-row mt-8 lg:mt-[17px] gap-[15px] px-[15px] lg:px-[120px] pb-12">
              {cards.map((card) => (
                <li
                  key={card.id}
                  className="bg-white rounded-[12px] p-[25px] lg:p-[24px] flex flex-col gap-4 items-center w-full h-auto"
                >
                  <img
                    loading="lazy"
                    src={card.img}
                    alt="image"
                    title="image"
                    className="select-none"
                  />
                  <p className="font-black text-lg text-center">{card.title}</p>
                  <p className="text-center font-inter text-[#5c5e6a] flex-grow text-balance">
                    {card.text}
                  </p>

                  {/* TODO: Make links functional */}
                  <a href="#" className="flex items-center gap-3 text-blue-500">
                    <span>{card.link}</span>
                    <img
                      loading="lazy"
                      src={arrow}
                      alt="arrow"
                      title="image"
                      className="select-none"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </motion.div>
      </section>
    </>
  );
};

export default Feature;
