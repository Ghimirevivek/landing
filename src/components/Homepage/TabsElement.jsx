import React, { useEffect, useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  IconButton,
} from '@material-tailwind/react';
import gradient from '../../Assets/gradient/gradient1.png';
import { Carousel } from '@material-tailwind/react';
import gifimg from '../../Assets/creator1img1.gif';
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
        className='relative w-full  '
      >
        <img
          src={carousel1}
          alt='logo'
          className='cursor-pointer  bg-no-repeat object-contain w-full '
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
        className='cursor-pointer  bg-no-repeat object-contain w-full '
      />
      <img
        src={carousel3}
        alt='logo'
        className='cursor-pointer  bg-no-repeat object-contain w-full '
      />
      <img
        src={carousel4}
        alt='logo'
        className='cursor-pointer  bg-no-repeat object-contain w-full '
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
        className='relative w-full '
      >
        <img
          src={carousel1}
          alt='logo'
          className='cursor-pointer  bg-no-repeat object-cover w-full'
        />
      </div>
      <img
        src={carousel6}
        alt='logo'
        className='cursor-pointer  bg-no-repeat object-cover w-full'
      />
      <img
        src={carousel7}
        alt='logo'
        className='cursor-pointer  bg-no-repeat object-cover w-full'
      />
    </Carousel>
  );
}
const CreatorContent = () => (
  <div className='flex flex-col items-center justify-center'>
    <p className='mb-10 mt-4 lg:my-10  max-w-[65rem]'>
      Empower your creative journey on CreatorsHub with intuitive tools designed
      for creators. Why Join CreatorsHub? As a creator, showcase your talents
      through live streaming, upload features, and wishlists. Engage with your
      fans effortlessly, with streamlined payment processing and real-time
      alerts for gifts and contributions. Our platform ensures that your
      personal information is protected.
    </p>
    <CarouselTransition1 />
    <div className='grid grid-cols-1 md:grid-cols-2 w-full my-10 gap-y-4'>
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          boxShadow:
            'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          border: '2px solid rgba(233,233,232,0.3)',
        }}
        className='max-w-[730px] max-h-[420px] flex flex-col items-center justify-center group relative'
      >
        <img
          src={gradient}
          alt='gradient'
          className='absolute bottom-0 object-cover overflow-hidden rounded-2xl'
        />
        <div className='text-[32px] leading-relaxed text-black ubuntu'>
          <span className='italic font-normal'>Live</span>
          <span className='font-bold mx-2  '>Streaming</span>
        </div>
        <p className=' max-w-[40rem] text-[20px] inter'>
          Dive into dynamic live streaming on CreatorsHub with seamless Twitch
          integration. Engage fans in real-time, receive gift alerts, and
          enhance your streaming profile.
        </p>
        <div className='min-h-[226px]'>
          {' '}
          <img
            src={gifimg}
            alt='cardimage'
            className='w-full h-[15rem] rounded-2xl object-fill'
          />
        </div>
      </div>
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          boxShadow:
            'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          border: '2px solid rgba(233,233,232,0.3)',
        }}
        className='relative max-w-[730px] max-h-[420px] flex flex-col items-center justify-center group'
      >
        <img
          src={gradient}
          alt='gradient'
          className='absolute bottom-0 object-cover overflow-hidden rounded-2xl'
        />
        <div className='text-[32px] leading-relaxed text-black ubuntu'>
          {/* <span className='italic font-normal'>Live</span> */}
          <span className='font-bold mx-2'>Wishlists</span>
        </div>
        <p className=' max-w-[40rem] text-[20px] inter'>
          Upload wishlists with products, cash tips, crowdfunding goals, or
          small gifts. Receive support directly from your fans.
        </p>
        <div className='min-h-[226px]'>
          {' '}
          <img
            src={gifimg}
            alt='cardimage'
            className='w-full h-[15rem] rounded-2xl object-fill'
          />
        </div>
      </div>
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          boxShadow:
            'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          border: '2px solid rgba(233,233,232,0.3)',
        }}
        className='relative max-w-[730px] max-h-[420px] flex flex-col items-center justify-center group'
      >
        <img
          src={gradient}
          alt='gradient'
          className='absolute bottom-0 object-cover overflow-hidden rounded-2xl'
        />
        <div className='text-[32px] leading-relaxed text-black ubuntu'>
          <span className='italic font-normal'>Access to real-time</span>
          <span className='font-bold mx-2  '>notifications</span>
        </div>
        <p className=' max-w-[40rem] text-[20px] inter'>
          Get real-time gift alerts from your fans—crowdfunding, cash gifts,
          tips, and wishlist items included. Stay connected and appreciated with
          instant notifications.
        </p>
        <div className='min-h-[226px]'>
          {' '}
          <img
            src={gifimg}
            alt='cardimage'
            className='w-full h-[15rem] rounded-2xl object-fill'
          />
        </div>
      </div>
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          boxShadow:
            'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          border: '2px solid rgba(233,233,232,0.3)',
        }}
        className='relative max-w-[730px] max-h-[420px] flex flex-col items-center justify-center group'
      >
        <img
          src={gradient}
          alt='gradient'
          className='absolute bottom-0 object-cover overflow-hidden rounded-2xl'
        />
        <div className='text-[32px] leading-relaxed text-black ubuntu'>
          <span className='font-bold mx-2  '>Pay</span>
          <span className='italic font-normal'>Per View</span>
        </div>
        <p className='lg:max-w-[40rem] text-[20px] inter'>
          Monetize your best work with exclusive pay-per-video and premium
          content options. Engage your audience with unique features and
          insights, enhancing viewer satisfaction.
        </p>
        <div className='min-h-[226px]'>
          {' '}
          <img
            src={gifimg}
            alt='cardimage'
            className='w-full h-[15rem] rounded-2xl object-fill'
          />
        </div>
      </div>
    </div>
  </div>
);

const UserContent = () => (
  <div className='flex flex-col items-center justify-center'>
    <p className='mb-10 mt-4 lg:my-10   lg:max-w-[65rem]'>
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
  const getResponsiveStyles = () => {
    const width = window.innerWidth;
    let minWidth = '25rem'; // Default minWidth
    let minHeight = '3.3rem';
    if (width <= 640) {
      minWidth = '16rem';
      minHeight = '2.3rem';
    } else if (width >= 640 && width < 1024) {
      minWidth = '20rem';
      minHeight = '2.8rem';
    } else if (width >= 1024 && width < 1280) {
      minWidth = '24rem';
      minHeight = '3rem';
    } else if (width >= 1280) {
      minWidth = '25rem';
      minHeight = '3.3rem';
    }

    return {
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
      padding: '0 1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      minWidth,
      minHeight,
    };
  };
  const [styles, setStyles] = useState(getResponsiveStyles());

  useEffect(() => {
    const handleResize = () => {
      setStyles(getResponsiveStyles());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='mt-20 lg:mt-0 flex flex-col items-center justify-center max-w-full'>
      <div className='text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-medium my-2 md:my-4 xl:my-6'>
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
          style={styles}
          indicatorProps={{
            className: 'bg-transparent shadow-none rounded-full ',
          }}
          className='min-h-[0.3rem] min-w-[20rem]'
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
              className='text-center text-[#606E80] text-[17px] sm:text-[18px] lg:text-[20px] font-medium inter xl:min-w-[60rem] mb-10 tracking-normal leading-relaxed'
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
