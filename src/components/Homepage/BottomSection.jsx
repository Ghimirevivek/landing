import React from 'react';

const BottomSection = () => {
  return (
    <div className=' my-10'>
      <div className='text-center'>
        <span style={{ fontWeight: '700' }} className='text text-[50px] mr-2'>
          Join Now
        </span>
        <span
          style={{ fontWeight: '800' }}
          className='text-[50px]  text-[#000] mr-2'
        >
          And Start Receiving <br />
          The Fan
        </span>
        <span
          style={{ fontWeight: '400' }}
          className='text-[50px] italic text-[#000] mr-2'
        >
          Support You Deserve!
        </span>
      </div>
      <div className='flex flex-col-reverse'>
        <div className='mt-10 flex items-center justify-center my-20 '>
          <label
            htmlFor='searchinput'
            className='text-[#6B7280] font-medium text-[18px] bg-[#F8FAFC] border border-r-[0px] h-[50px] flex items-center justify-center rounded-l-lg px-3'
          >
            creatorshub.online/
          </label>
          <input
            id='searchinput'
            type='text'
            className='border h-[50px] border-gray-300 max-w-[11rem]  px-4 py-[8px] outline-none text-gray-600 flex items-center justify-center'
          />
          <button className='bg-[#4B5563] h-[50px] text-white border-none outline-none rounded-none rounded-r-lg p-2'>
            Join Us
          </button>
        </div>
        <p className='text-[#606E80] text-[20px] font-medium text-center inter mt-6'>
          Create your wishlist and start receiving gifts from your fans right
          away!
        </p>
      </div>
    </div>
  );
};

export default BottomSection;
