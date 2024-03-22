import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import "css/CercleAnimation.css";
import "css/Home.css";

const HomePage = () => {
  const { t } = useTranslation();
  const circleContainerRef = useRef(null);

  const handleAnimationEnd = () => {
    if (circleContainerRef.current) {
      circleContainerRef.current.style.zIndex = 11;
    }
  };

  return (
    <div className="container min-w-max">
      <section className="one">
        <div
          className="bg-cover bg-center h-screen w-screen relative"
          style={{ backgroundImage: `url('images/bg-home-web.jpg')` }}
        >
          <div
            ref={circleContainerRef}
            className="relative w-full h-screen flex justify-center items-center"
          >
            <div
              className="circle z-[52] absolute w-40 h-40 rounded-[50%] bg-black"
              onAnimationEnd={handleAnimationEnd}
            ></div>
            <div className="bg-white h-screen w-screen z-[51] circle-wall"></div>
            <div className="flex justify-center h-full items-center wrapper flex-col absolute inset-0 text-center">
              <h1 className="font-Regular tracking-[0.8rem] text-5xl text-white z-50">
                "{t("on_vision")}"
              </h1>
              <div className="font-Regular tracking-[0.5rem] text-3xl text-white z-50 w-full flex justify-around mt-20 textShadow">
                <span>{t("strategy_identity").toUpperCase()}</span>
                <span>{t("comm_support").toUpperCase()}</span>
                <span>{t("digit_comm").toUpperCase()}</span>
              </div>
              <button className="bg-gray-300 w-48 h-16 border border-y-8 border-x-[20px] border-black absolute bottom-20"></button>
            </div>
          </div>
        </div>
      </section>
      <section className="two">
        <span>Second Page</span>
      </section>
      <section className="three">
        <span>Third Page</span>
      </section>
      <section className="four">
        <span>Web Dev</span>
      </section>
    </div>
  );
};

export default HomePage;
