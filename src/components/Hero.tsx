import Image from 'next/image';
import React from 'react';
import NavBar from './NavBar';

const Hero = () => {
  return (
    <div className='relative min-h-screen'>
      <Image className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10 rounded-full" src="/hero-01.jpg" alt='hero' width={1000} height={600} />
      <NavBar />
      <div className='container h-[calc(100vh-120px)] flex items-center'>
        <div className='space-y-4 bg-[#ffffff98] w-fit p-4 text-left'> {/* Changed text-center to text-left */}
          <p className='uppercase font-medium'>Wide option of choice</p>
          <h2 className='text-4xl sm:text-6xl font-bold'>
            Delicious <span className='text-accent'>Food</span>
          </h2>
          <p className='text-gray-700 text-[14px] sm:text-[16px]'>
            Delicious Food Color, Aroma And Taste. <br />
            What Are You Waiting For?
          </p>
          <button className='bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm-text-[16px]'>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
