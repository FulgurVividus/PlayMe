import React from "react";

import upper1 from "../../assets/images/featureList-images/upper1.png";
import upper2 from "../../assets/images/featureList-images/upper2.png";
import upper3 from "../../assets/images/featureList-images/upper3.png";
import upper4 from "../../assets/images/featureList-images/upper4.png";

import lower1 from "../../assets/images/featureList-images/lower1.png";
import lower2 from "../../assets/images/featureList-images/lower2.png";
import lower3 from "../../assets/images/featureList-images/lower3.png";

import tick from "../../assets/images/featureList-images/tick.png";

const upperCards: {
  id: string;
  img: string;
  title: string;
  tick: string;
  bulletPoints: string[];
}[] = [
  {
    id: "01",
    img: upper1,
    title: "Счета и платежи",
    tick: tick,
    bulletPoints: [
      "Выставление счетов",
      "Безопасная онлайн-оплата счетов",
      "Автоплатеж",
      "Планы обучения",
      "Управление субсидиями",
      "Налоговая отчетность",
    ],
  },
  {
    id: "02",
    img: upper2,
    title: "Коммуникация",
    tick: tick,
    bulletPoints: [
      "Сообщения родителям",
      "Обмен сообщениями с персоналом",
      "Обмен действиями",
      "Обмен фото и видео",
      "Новости",
      "Школьные календари",
    ],
  },
  {
    id: "03",
    img: upper3,
    title: "Посещаемость",
    tick: tick,
    bulletPoints: [
      "Списки и профили детей",
      "Заезд и выезд детей",
      "Расписание занятий детей",
      "Цифровые подписи",
      "Отслеживание соотношения",
      "Отчеты о посещаемости",
    ],
  },
  {
    id: "04",
    img: upper4,
    title: "Операции и отчетность",
    tick: tick,
    bulletPoints: [
      "Пользовательские формы и управление",
      "Загрузка документов",
      "Меню и отслеживание CACFP",
      "Настраиваемая отчетность",
      "Лицензирование",
    ],
  },
];

const lowerCards: {
  id: string;
  img: string;
  title: string;
  tick: string;
  bulletPoints: string[];
}[] = [
  {
    id: "05",
    img: lower1,
    title: "Обучение",
    tick: tick,
    bulletPoints: [
      "Планы уроков",
      "Наблюдения",
      "Оценки",
      "Семейный доступ",
      "Государственные стандарты",
    ],
  },
  {
    id: "06",
    img: lower2,
    title: "Прием",
    tick: tick,
    bulletPoints: [
      "Управление процессами",
      "Списки ожидания",
      "Регистрация",
      "Цифровые формы",
    ],
  },
  {
    id: "07",
    img: lower3,
    title: "Управление персоналом",
    tick: tick,
    bulletPoints: [
      "Управление командой",
      "График работы персонала",
      "Учет времени",
      "Заработная плата",
      "Часы разработки",
    ],
  },
];

const FeatureList: React.FC = () => {
  return (
    <>
      <section className="mt-12 lg:mt-[104px] custom-container flex flex-col gap-y-2 lg:gap-y-8 px-[28px] lg:px-0 lg:w-[1160px]">
        <h3 className="text-center text-[35px] lg:text-[40px] leading-[60px] font-black">
          Все что вам нужно для работы вашего детского сада
        </h3>

        {/* Main div for cards */}
        <div className="shadow-md shadow-gray-500 rounded-[20px] flex flex-col justify-center">
          {/* Upper cards */}
          <div className="mx-[27px] lg:mx-[30px] pt-[42px] lg:pt-[34px]">
            <ul className="flex flex-col lg:flex-row justify-between">
              {upperCards.map((upperCard) => (
                <li
                  key={upperCard.id}
                  className="mt-[31px] lg:mt-[0] min-w-[200px] lg:min-w-[250px] h-auto"
                >
                  <div className="mb-2 lg:mb-[7px]">
                    <img
                      loading="lazy"
                      src={upperCard.img}
                      alt={upperCard.img}
                      className="select-none"
                    />
                    <p className="text-[#333333] text-2xl font-black leading-[32px] mt-[14px]">
                      {upperCard.title}
                    </p>
                  </div>

                  {upperCard.bulletPoints.map((text, index) => (
                    <div key={index} className="flex items-center gap-[5px]">
                      <img loading="lazy" src={tick} alt="tick" />
                      <p className="text-base text-[#000000] font-black leading-[28px]">
                        {text}
                      </p>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>

          {/* Lower cards */}
          <div className="mx-auto px-[27px] lg:px-0 mt-[0px] lg:mt-[94px] pb-[23px] lg:pb-[113px]">
            <ul className="flex flex-col lg:flex-row justify-evenly">
              {lowerCards.map((lowerCard) => (
                <li
                  key={lowerCard.id}
                  className="mt-[31px] lg:mt-[0] min-w-[200px] lg:min-w-[250px] h-auto"
                >
                  <div className="mb-2 lg:mb-[7px]">
                    <img
                      loading="lazy"
                      src={lowerCard.img}
                      alt={lowerCard.img}
                      className="select-none"
                    />
                    <p className="text-[#333333] text-2xl font-black leading-[32px] mt-[14px]">
                      {lowerCard.title}
                    </p>
                  </div>

                  {lowerCard.bulletPoints.map((text, index) => (
                    <div key={index} className="flex items-center gap-[5px]">
                      <img loading="lazy" src={tick} alt="tick" />
                      <p className="text-base text-[#000000] font-black leading-[28px]">
                        {text}
                      </p>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureList;
