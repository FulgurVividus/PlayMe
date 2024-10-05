import React, { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

const Stats: React.FC = () => {
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
      <section ref={ref} className="px-[25px] lg:px-0">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <section className="mt-[62px] lg:mt-[88px] flex flex-col lg:flex-row justify-between items-center gap-y-[50px] lg:gap-x-[50px] custom-container">
            <div className="stats-card">
              <span className="text-[#2AE92A] stats-card-number">#1</span>
              <span className="stats-card-text">
                Рейтинг программное обеспечение для детского сада
              </span>
            </div>

            <div className="stats-card">
              <span className="text-[#FFC122] stats-card-number">20ч</span>
              <span className="stats-card-text">
                Сохраняется каждый месяц на административные задачи
              </span>
            </div>

            <div className="stats-card">
              <span className="text-[#EC4050] stats-card-number">95%</span>
              <span className="stats-card-text">
                Удовлетворенность клиентов
              </span>
            </div>

            <div className="stats-card">
              <span className="text-[#057FE4] stats-card-number">99.9%</span>
              <span className="stats-card-text">
                Время безотказной работы и круглосуточный мониторинг (мы не
                терпим крах)
              </span>
            </div>
          </section>
        </motion.div>
      </section>
    </>
  );
};

export default Stats;
