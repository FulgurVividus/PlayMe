import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CallToAction: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const formRef = useRef<HTMLFormElement>(null);

  const [numberOfKids, setNumberOfKids] = useState<string | null>(null);
  const [problem, setProblem] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  // Submit function
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const currentForm = formRef.current;
    if (currentForm === null) return;

    try {
      const res = fetch(
        "https://script.google.com/macros/s/AKfycbxKgX2Kk6kGzNWqTcFGm7jcfXaorKtumGaSBylDqSN7fYE4qOGzh5OiP2D4U_drexpH/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body: new FormData(currentForm),
          mode: "no-cors",
          body: JSON.stringify({
            NumberOfKids: numberOfKids,
            Problem: problem,
            Name: name,
            PhoneNumber: phoneNumber,
          }),
        }
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  // Small logic of framer motion
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
      <section ref={ref} className="bg-callToActionColor" id="form">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <section className="custom-container mt-[70px] lg:mt-[80px] pt-[70px] lg:pt-[86px] pb-[100px]">
            <h3 className="text-[#18181D] hidden lg:block text-center text-[40px] font-black leading-[56px]">
              Обзор самого простого устройства «все в одном» приложение для
              ухода за детьми и дошкольного возраста
            </h3>
            <h3 className="text-[#18181D] lg:hidden text-center text-[25px] font-black leading-[40px]">
              Всё для вашего удобства !
            </h3>

            {/* Main div for quiz */}
            {isSubmitted === false ? (
              <div className="mt-8 lg:mt-12 bg-[#FFFFFF] py-[33px] px-[43px]">
                <div className="flex flex-col items-center justify-center gap-3 mb-[20px]">
                  <div className="flex items-center gap-1">
                    <div
                      className={`${
                        activeTab === 0 && "active-tabs-active"
                      } tabs`}
                    ></div>
                    <div
                      className={`${
                        activeTab === 1 && "active-tabs-active"
                      } tabs`}
                    ></div>
                    <div
                      className={`${
                        activeTab === 2 && "active-tabs-active"
                      } tabs`}
                    ></div>
                  </div>
                  <p className="font-inter font-medium text-[#5C5E6A]">
                    {(activeTab + 1).toString()} / 3
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="content-tabs">
                    {/* 1st Tab-content */}
                    {activeTab === 0 && (
                      <div className="content active-content">
                        <h2 className="text-center mb-3 lg:mb-6 text-[20px] lg:text-[24px] font-bold leading-[16px] lg:leading-[32px] text-[#18181D]">
                          Сколько детей посещает ваш детский сад?
                        </h2>

                        <div className="flex flex-col justify-between items-center lg:flex-row gap-3 lg:gap-6">
                          <div className="tab-box-1">
                            <input
                              type="radio"
                              id="Number1"
                              name="NumberOfKids"
                              value="0-50"
                              onChange={(e) => setNumberOfKids(e.target.value)}
                            />
                            <label htmlFor="Number1" className="tab-box-1-text">
                              0-50
                            </label>
                          </div>
                          <div className="tab-box-1">
                            <input
                              type="radio"
                              id="Number2"
                              name="NumberOfKids"
                              value="50-100"
                              onChange={(e) => setNumberOfKids(e.target.value)}
                            />
                            <label htmlFor="Number2" className="tab-box-1-text">
                              50-100
                            </label>
                          </div>
                          <div className="tab-box-1">
                            <input
                              type="radio"
                              id="Number3"
                              name="NumberOfKids"
                              value="100+"
                              onChange={(e) => setNumberOfKids(e.target.value)}
                            />
                            <label htmlFor="Number3" className="tab-box-1-text">
                              100+
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 2nd Tab-content */}
                    {activeTab === 1 && (
                      <div className="lg:px-[90px]">
                        <h2 className="text-center mb-3 lg:mb-6 text-[20px] lg:text-[24px] font-bold leading-[16px] lg:leading-[32px] text-[#18181D] text-balance">
                          С какими сложностями вы чаще всего сталкиваетесь в
                          управлении детским садом?
                        </h2>

                        <textarea
                          name="Problem"
                          id="Problem"
                          cols={30}
                          rows={10}
                          placeholder="Опишите..."
                          className="font-inter text-[#A7A7A7] border-[2px] rounded-2xl p-5 resize-none w-full outline-none"
                          value={problem}
                          onChange={(e) => setProblem(e.target.value)}
                          onInvalid={(e) =>
                            e.currentTarget.setCustomValidity(
                              "Это поле обязельно!"
                            )
                          }
                          onInput={(e) => e.currentTarget.setCustomValidity("")}
                          required
                        ></textarea>
                      </div>
                    )}

                    {/* 3rd Tab-content */}
                    {activeTab === 2 && (
                      <div>
                        <h2 className="text-center mb-3 lg:mb-6 text-[20px] lg:text-[24px] font-bold leading-[16px] lg:leading-[32px] text-[#18181D] text-balance">
                          Оставьте заявку
                        </h2>

                        <div className="flex flex-col gap-y-2">
                          <label
                            htmlFor="Name"
                            className="text-[#666666] font-semibold"
                          >
                            Имя
                          </label>
                          <input
                            type="text"
                            id="Name"
                            name="Name"
                            placeholder="Ваше имя"
                            className="outline-none font-normal text-[16px] p-[16px] border-[1px] rounded-[8px] text-[#666666]"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onInvalid={(e) =>
                              e.currentTarget.setCustomValidity(
                                "Это поле обязельно!"
                              )
                            }
                            onInput={(e) =>
                              e.currentTarget.setCustomValidity("")
                            }
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-y-2 mt-8">
                          <label
                            htmlFor="PhoneNumber"
                            className="text-[#666666] font-semibold"
                          >
                            Номер телефона
                          </label>
                          <input
                            type="tel"
                            id="PhoneNumber"
                            name="PhoneNumber"
                            placeholder="+998"
                            className="outline-none font-normal text-[16px] p-[16px] border-[1px] rounded-[8px] text-[#666666]"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            onInvalid={(e) =>
                              e.currentTarget.setCustomValidity(
                                "Это поле обязельно!"
                              )
                            }
                            onInput={(e) =>
                              e.currentTarget.setCustomValidity("")
                            }
                            required
                          />
                        </div>
                      </div>
                    )}

                    {activeTab < 2 ? (
                      <div className="flex justify-center mt-[32px] lg:mt-[39px]">
                        <button
                          title="button"
                          onClick={() => setActiveTab((currTab) => currTab + 1)}
                          className="continue-button-form"
                        >
                          <span className="font-bold text-[#FFFFFF]">
                            Продолжить
                          </span>
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center mt-[32px] lg:mt-[39px]">
                        <button
                          title="button"
                          className="send-button-form"
                          type="submit"
                        >
                          <span className="font-bold text-[#FFFFFF]">
                            Отправить
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            ) : (
              <div className="mt-8 lg:mt-12 bg-[#FFFFFF] py-[33px] px-[43px] flex justify-center items-center">
                <h2 className="text-center text-[#18181D] text-[30px] font-medium leading-[56px]">
                  Спасибо за заявку!
                  <br />
                  Мы свяжемся с вами в ближайшее время
                </h2>
              </div>
            )}
          </section>
        </motion.div>
      </section>
    </>
  );
};

export default CallToAction;
