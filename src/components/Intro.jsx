import React from 'react'

const Intro = ({ onStart }) => {
  return (
    <div className='h-screen w-screen flex justify-center items-center cursor-pointer'>
      <img src='icons/intro.svg' onClick={onStart} className='h-[90vh]' />
    </div>
  )
}

export default Intro
