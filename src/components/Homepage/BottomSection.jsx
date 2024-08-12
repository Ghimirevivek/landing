import React from 'react';

const BottomSection = () => {
  return (
    <div className='mt-6 mb-10'>
      <div className='text-center text-[30px] sm:text-[42px] lg:text-[50px]'>
        <span style={{ fontWeight: '700' }} className='text  mr-2'>
          Join Now
        </span>
        <span style={{ fontWeight: '800' }} className=' text-[#000] mr-2'>
          And Start Receiving <br />
          The Fan
        </span>
        <span
          style={{ fontWeight: '400' }}
          className=' italic text-[#000] mr-2'
        >
          Support You Deserve!
        </span>
      </div>
      <div className='flex  flex-col-reverse w-full'>
        <div className='mt-8 flex items-center justify-center  '>
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
        </div>{' '}
        <p className='text-[#606E80] text-[20px] font-medium text-center inter mt-6'>
          Create your wishlist and start receiving gifts from your fans right
          away!
        </p>
      </div>
    </div>
  );
};

export default BottomSection;
