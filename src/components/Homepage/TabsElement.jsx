import React, { useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  IconButton,
} from '@material-tailwind/react';
import { Carousel } from '@material-tailwind/react';

import carousel1 from '../../Assets/carousel1.png';
import carousel2 from '../../Assets/carousel2.png';
import carousel3 from '../../Assets/carousel3.png';
import carousel4 from '../../Assets/carousel4.png';
import carousel6 from '../../Assets/carousel5.png';
import carousel7 from '../../Assets/carousel6.png';
export function CarouselTransition1() {
  return (
    <Carousel
      transition={{ duration: 1 }}
      autoplay={true}
      loop={true}
      className='rounded-xl bg-no-repeat scrollbar-hide'
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant='text'
          color='gray'
          size='lg'
          onClick={handlePrev}
          className='!absolute top-2/4 left-4 -translate-y-2/4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant='text'
          color='gray'
          size='lg'
          onClick={handleNext}
          className='!absolute top-2/4 !right-4 -translate-y-2/4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
            />
          </svg>
        </IconButton>
      )}
    >
      <div
        style={{
          borderRadius: '15px',
          // boxShadow:
          //   'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          // border: '2px solid rgba(233,233,232,0.1)',
        }}
        className='relative w-full h-[40rem] '
      >
        <img
          src={carousel1}
          alt='logo'
          className='cursor-pointer  bg-no-repeat object-cover w-full h-[40rem]'
        />
        {/* <div className='flex items-center justify-between h-full px-20'>
          <div className='text-[40px] leading-tight flex flex-col items-start justify-start'>
            <div>
              {' '}
              <span
                style={{ fontWeight: '700' }}
                className='text important-text text text-[40px] '
              >
                Sign Up{' '}
              </span>
              <span
                style={{ fontWeight: '700' }}
                className='text-[40px] text-[#000]'
              >
                & Verify Your Profile
              </span>
            </div>
            <p className='text-[#606E80] text-[20px] mt-6 font-medium max-w-[36rem] text-left inter leading-relaxed'>
              Begin your journey on CreatorsHub by signing up and verifying you
              own your linked social accounts. Simply add your CreatorsHub link
              to your platform’s bio, ensuring a secure and authentic experience
              while also allowing your fans to discover your CreatorsHub.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div>
              {' '}
              <span
                style={{ fontWeight: '400' }}
                className='text-[40px] italic text-[#000] mr-2'
              >
                Welcome to
              </span>
              <span
                style={{ fontWeight: '700' }}
                className='text important-text text text-[40px]'
              >
                CreatorsHub!
              </span>
              <p className='text-[#606E80] text-[16px] font-medium text-center inter leading-relaxed'>
                Let’s complete creating your profile.
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <img
        src={carousel2}
        alt='logo'
        className='cursor-pointer  bg-no-repeat object-cover w-full h-[40rem]'
      />
      <img
        src={carousel3}
        alt='logo'
        className='cursor-pointer  bg-no-repeat object-cover w-full h-[40rem]'
      />
      <img
        src={carousel4}
        alt='logo'
        className='cursor-pointer  bg-no-repeat object-cover w-full h-[40rem]'
      />
    </Carousel>
  );
}
export function CarouselTransition2() {
  return (
    <Carousel
      transition={{ duration: 1 }}
      autoplay={true}
      loop={true}
      className='rounded-xl bg-no-repeat scrollbar-hide'
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant='text'
          color='gray'
          size='lg'
          onClick={handlePrev}
          className='!absolute top-2/4 left-4 -translate-y-2/4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant='text'
          color='gray'
          size='lg'
          onClick={handleNext}
          className='!absolute top-2/4 !right-4 -translate-y-2/4'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
            />
          </svg>
        </IconButton>
      )}
    >
      <div
        style={{
          borderRadius: '15px',
          // boxShadow:
          //   'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          // border: '2px solid rgba(233,233,232,0.1)',
        }}
        className='relative w-full h-[40rem] '
      >
        <img
          src={carousel1}
          alt='logo'
          className='cursor-pointer  bg-no-repeat object-cover w-full h-[40rem]'
        />
      </div>
      <img
        src={carousel6}
        alt='logo'
        className='cursor-pointer  bg-no-repeat object-cover w-full h-[40rem]'
      />
      <img
        src={carousel7}
        alt='logo'
        className='cursor-pointer  bg-no-repeat object-cover w-full h-[40rem]'
      />
    </Carousel>
  );
}
const CreatorContent = () => (
  <div className='flex flex-col items-center justify-center'>
    <p className='my-10  max-w-[65rem]'>
      Empower your creative journey on CreatorsHub with intuitive tools designed
      for creators. Why Join CreatorsHub? As a creator, showcase your talents
      through live streaming, upload features, and wishlists. Engage with your
      fans effortlessly, with streamlined payment processing and real-time
      alerts for gifts and contributions. Our platform ensures that your
      personal information is protected.
    </p>
    <CarouselTransition1 />
  </div>
);

const UserContent = () => (
  <div className='flex flex-col items-center justify-center'>
    <p className='my-10 max-w-[65rem]'>
      Explore the user-centric functionalities of CreatorsHub, where members can
      easily browse, discover, and support their favorite creators. CreatorsHub
      offers a secure platform where you can send gifts and contributions
      without worrying about your personal information being compromised. From
      interactive profiles to secure one-click payments, our platform ensures a
      personalized experience tailored to user preferences.
    </p>
    <CarouselTransition2 />
  </div>
);

const TabsElement = () => {
  const [activeTab, setActiveTab] = useState('react');

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  const data = [
    {
      label: 'Creator',
      value: 'react',
      desc: <CreatorContent />,
    },
    {
      label: 'User',
      value: 'angular',
      desc: <UserContent />,
    },
  ];
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='text-[55px] font-medium my-6'>
        Are You A <span className='text'>Creator</span>/ User?
      </div>
      <Tabs
        // id='custom-animation'
        value='react'
        onChange={(e, value) => handleTabChange(value)}
        style={{
          all: 'unset',
          display: 'flex',
          flexDirection: 'column',
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        <TabsHeader
          style={{
            all: 'unset',
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50px',
            boxShadow:
              'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '2px solid rgba(233,233,232,0.3)',
            minWidth: '25rem',
            minHeight: '3.3rem',
            padding: '0 1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          indicatorProps={{
            className: 'bg-transparent shadow-none rounded-full',
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              style={{
                minHeight: '2.6rem',
                // all: 'unset',
                background: activeTab === value ? '' : 'bg-[#FBFBFF]',
                color: activeTab === value ? 'black' : '#616161',
                padding: '0.5rem 1rem',
              }}
              key={value}
              value={value}
              // className={activeTab === value ? 'text-gray-900' : ''}
              className={`font-semibold text-[#000000] text-[18px] text-center flex items-center justify-center rounded-full px-6 py-2 transition-all ease-in delay-100 duration-300 cursor-pointer ${
                activeTab === value ? 'my-shadow' : ''
              } `}
              onClick={() => handleTabChange(value)}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel
              key={value}
              value={value}
              className='text-center text-[#606E80] text-[20px] font-medium inter min-w-[60rem] mb-10 tracking-normal leading-relaxed'
            >
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabsElement;
