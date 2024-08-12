import React from 'react';
import mapVideo from '../../Assets/MinimalVideo.mp4';
import minimalgif from '../../Assets/minimalgif.gif';
import { FaUserPlus } from 'react-icons/fa';
const VideoBanner = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center  text-center'>
      <div className='relative'>
        {' '}
        <img src={minimalgif} alt='circuit' className='w-[100%] ' />
        <div className='absolute top-0 left-0 w-full h-16 sm:h-40 md:h-[15rem] xl:h-[20rem] bg-gradient-to-b from-white to-transparent pointer-events-none' />
        <div className='absolute bottom-0 left-0 w-full h-16 sm:h-40 md:h-[15rem] xl:h-[20rem] bg-gradient-to-t from-white to-transparent pointer-events-none' />
        <div className='absolute top-0 left-0 h-full w-16 sm:w-40 md:w-[15rem] xl:w-[20rem] bg-gradient-to-r from-white to-transparent pointer-events-none' />
        <div className='absolute top-0 right-0 h-full w-16 sm:w-40 md:w-[15rem] xl:w-[20rem] bg-gradient-to-l from-white to-transparent pointer-events-none' />
      </div>

      {/* <video
        autoPlay
        loop
        muted
        className=' w-full h-[900px] overflow-hidden shadow-none'
      >
        <source
          src={mapVideo}
          type='video/mp4'
          className='bg-transparent border-none'
        />
        Your browser does not support the video tag.
      </video> */}
      <div className='relative top-[1rem] sm:-top-[1rem] lg:-top-[4rem] xl:-top-[6rem] text-[30px] leading-tight max-w-[1000px]'>
        <span className=' ml-2 text-[36px] sm:text-[46px] lg:text-[56px]'>
          {' '}
          <span style={{ fontWeight: '800' }} className=''>
            What about
          </span>
          <span className='text'> My Data?</span>
        </span>
        <p className='text-[#606E80] text-[20px] mt-4 font-medium px-8 inter'>
          At CreatorsHub your safety and privacy is our number one goal. It will
          always be protected and fully secured.
        </p>
        <div className='flex items-center justify-center gap-6 my-8'>
          <button
            size='sm'
            className='font-semibold min-w-[8rem] bg-black text-white rounded-xl flex items-center justify-center gap-2 text-[15px] mybutton'
          >
            <FaUserPlus /> Join Now
          </button>
          <p className='text-[20px] inter text-[#606E80]'>
            It's Free<span>🎉</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
