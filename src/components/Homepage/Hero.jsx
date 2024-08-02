import React from 'react';

import gifimg from '../../Assets/logogif.gif';
import './Hero.css';
import video from '../../Assets/herobanner.mp4';

const Hero = () => {
  // console.log(video);
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '15px',
        boxShadow:
          'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',

        WebkitBackdropFilter: 'blur(5px)',
        border: '2px solid rgba(233,233,232,0.3)',
      }}
      className='py-16 xl:px-4 w-[99%] sm:w-[95%] mx-auto rounded-lg flex items-center justify-between mb-10 flex-col lg:flex-row gap-4 '
    >
      <div className='w-full lg:w-[50%] '>
        <div className='flex flex-col items-start justify-center max-w-[85%] mx-auto'>
          <div className='text-[45px] sm:text-[55px] leading-tight flex flex-wrap'>
            <span className='italic font-medium'>Creator</span>
            <span className='text sm:ml-2 '>Appreciation</span>
            <br />
            <span style={{ fontWeight: '800' }} className=''>
              Made Safe and Easy
            </span>
          </div>
          <p className='text-[#606E80] text-[17px] sm:text-[19px] mt-4 font-medium '>
            Fans support their favorite creators by sending them gifts,
            subscribing to their exclusive content or by tipping them for their
            hard work. All the while keeping both fans and creators safe by
            ensuring their personal information is kept private. We provide
            creators with all the important tools to create, share and then
            monetize their content.
          </p>
          <div className='mt-8 flex items-center justify-center mr-auto '>
            <label
              htmlFor='searchid'
              className='text-[#6B7280] font-medium text-15px sm:text-[18px] bg-[#F8FAFC] border border-r-[0px] h-[50px] flex items-center justify-center rounded-l-lg px-2 sm:px-3'
            >
              creatorshub.online/
            </label>
            <input
              id='searchid'
              type='text'
              className='border h-[50px] border-gray-300 max-w-[5rem] sm:max-w-[8rem] lg:max-w-[9rem] xl:max-w-[11rem]  px-4 py-[8px] outline-none text-gray-600 flex items-center justify-center'
            />
            <button className='bg-[#4B5563] h-[50px] px-1 sm:px-2 min-w-[5rem] text-white border-none outline-none rounded-none rounded-r-lg py-2'>
              Join Us
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full lg:w-[50%] mx-auto relative'>
        <video
          loop
          autoPlay
          muted
          className={`w-[92%] rounded-2xl mx-auto lg:mr-auto h-[400px] object-fill `}
        >
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        {/* <img src={banner} alt='' className='w-[92%] mr-auto' /> */}
        <img
          src={gifimg}
          alt=''
          className='absolute max-w-[7rem] -bottom-6 right-4 rounded-full   '
        />
      </div>
    </div>
  );
};

export default Hero;
