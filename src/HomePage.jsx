import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-cover bg-center h-screen w-screen relative" style={{ backgroundImage: `url('src/assets/images/bg-home.png')` }}>
      <div className='flex justify-center h-full items-center wrapper'><h1 className='text-4xl font-bold text-white z-50'>"NE FAIRE QU'UN AVEC VOTRE VISION"</h1></div>
    </div>
  );
};

export default HomePage;