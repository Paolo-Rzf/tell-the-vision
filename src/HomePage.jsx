import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cover bg-center h-screen w-screen relative" style={{ backgroundImage: `url('images/bg-home.png')` }}>
      <div className='flex justify-center h-full items-center wrapper'><h1 className='text-4xl font-bold text-white z-50'>"{t("on_vision")}"</h1></div>
    </div>
  );
};

export default HomePage;