import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./components/CercleAnimation.css"; // Fichier CSS pour notre animation

const HomePage = () => {
  const { t } = useTranslation();
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationComplete(true);
  };

  return (
    <div className="bg-cover bg-center h-screen w-screen relative" style={{ backgroundImage: `url('images/bg-home-web.jpg')` }}>
      <div className={`circle-container ${animationComplete && "hidden"}`}>
        <div className="circle z-[52]" onAnimationEnd={handleAnimationEnd}></div>
        <div className='bg-white h-screen w-screen z-[51] circle-wall'></div>
      </div>
      <div className='flex justify-center h-full items-center wrapper flex-col'>
        <h1 className='font-Regular tracking-[0.8rem] text-5xl text-white z-50'>"{t("on_vision")}"</h1>
        <div className='font-Regular tracking-[0.5rem] text-3xl text-white z-50 w-full flex justify-around mt-20 textShadow'>
          <span>{t("strategy_identity").toUpperCase()}</span>
          <span>{t("comm_support").toUpperCase()}</span>
          <span>{t("digit_comm").toUpperCase()}</span>
        </div>
        <button className='absolute bottom-32 bg-gray-300 w-48 h-16 border border-y-8 border-x-[20px] border-black'></button>
      </div>
    </div>
  );
};

export default HomePage;