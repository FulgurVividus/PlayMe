import React, { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

const CallToAction: React.FC = () => {
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
      <section ref={ref} className="bg-callToActionColor">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <section className="custom-container mt-[70px] lg:mt-[80px] pt-[70px] lg:pt-[86px]">
            <h3 className="text-[#18181D] hidden lg:block text-center text-[40px] font-black leading-[56px]">
              Обзор самого простого устройства «все в одном» приложение для
              ухода за детьми и дошкольного возраста
            </h3>
            <h3 className="text-[#18181D] lg:hidden text-center text-[25px] font-black leading-[40px]">
              Всё для вашего удобства !
            </h3>

            {/* Main div for quiz */}
            <div className="mt-8 lg:mt-12"></div>
          </section>
        </motion.div>
      </section>
    </>
  );
};

export default CallToAction;
