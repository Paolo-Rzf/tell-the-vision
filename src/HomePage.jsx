import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap'; // Assuming GSAP is installed

const HomePage = () => {
  const { t } = useTranslation();
  const bgImageRef = useRef(null); // Create a ref for the background image

  useEffect(() => {
    const bgImage = bgImageRef.current;

    if (bgImage) {
      // Get the background image width
      const imageWidth = bgImage.clientWidth;

      // Create a GSAP timeline for the animation
      const tl = gsap.timeline({ paused: true });

      // Set the initial scale to 0 to prevent overflow
      tl.set(bgImage, { scale: 0 });

      // Animate the scale and position simultaneously
      tl.to(bgImage, {
        scale: 1,
        x: 0,
        duration: 2,
        ease: 'power3.out'
      });

      // Play the animation on component mount
      tl.play();
    }
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="bg-cover bg-center h-screen w-screen relative" ref={bgImageRef} style={{ backgroundImage: `url('images/bg-home.png')` }}>
      <div className='flex justify-center h-full items-center wrapper flex-col'>
        <h1 className='text-4xl text-white z-50'>"{t("on_vision")}"</h1>
        <div className='text-2xl text-white z-50 w-full flex justify-around mt-20'>
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