import React from "react";

const CallToAction: React.FC = () => {
  return (
    <>
      <section className="bg-callToActionColor">
        <section className="custom-container mt-[70px] lg:mt-[80px] pt-[70px] lg:pt-[86px]">
          <h3 className="text-[#18181D] hidden lg:block text-center text-[40px] font-black leading-[56px]">
            Обзор самого простого устройства «все в одном» приложение для ухода
            за детьми и дошкольного возраста
          </h3>
          <h3 className="text-[#18181D] lg:hidden text-center text-[25px] font-black leading-[40px]">
            Всё для вашего удобства !
          </h3>

          {/* Main div for quiz */}
          <div className="mt-8 lg:mt-12"></div>
        </section>
      </section>
    </>
  );
};

export default CallToAction;
