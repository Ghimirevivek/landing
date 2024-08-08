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
import video1 from '../../Assets/Slider Animations/Creator/Creator Slide 1.mp4';
import video2 from '../../Assets/Slider Animations/Creator/Creator Slide 2.mp4';
import video3 from '../../Assets/Slider Animations/Creator/Creator Slide 3.mp4';
import video4 from '../../Assets/Slider Animations/Creator/Creator Slide 4.mp4';
import video5 from '../../Assets/Slider Animations/User/User Slider 2.mp4';
import video6 from '../../Assets/Slider Animations/User/User Slider 3.mp4';
import { Carousel } from '@material-tailwind/react';
import gifimg from '../../Assets/creator1img1.gif';
import righticon from '../../Assets/righticon.svg';
import lefticon from '../../Assets/lefticon.svg';
import gify from '../../Assets/gifybox.gif';
import message from '../../Assets/Message.svg';
import wishlist from '../../Assets/Wishlist 1.png';
import butimg from '../../Assets/_button-small.svg';
import img1 from '../../Assets/Component 121.png';
import gift from '../../Assets/gift.png';
import coin from '../../Assets/coin.png';
import money from '../../Assets/money.png';
import game from '../../Assets/gameimg.png';
import video from '../../Assets/videoimg.png';
import buttonicon from '../../Assets/_button-icon-small.png';
import buttonicon1 from '../../Assets/Button Icons (1).png';
import comment1 from '../../Assets/List.png';
import comment2 from '../../Assets/List (1).png';
import buttoniconwrap from '../../Assets/Badge Wrapper.png';
import comment3 from '../../Assets/1.png';
import livestream from '../../Assets/livestream.png';
import favourite from '../../Assets/favorite.png';
import ava from '../../Assets/ava.png';
import amanda from '../../Assets/amanda.png';
import jessica from '../../Assets/jessica.png';
import onetap from '../../Assets/onetap.svg';
import Sendtips from '../../Assets/Send tips 1.png';
import livestrea from '../../Assets/livestreamhover.png';

export function CarouselTransition1() {
  return (
    <div className='flex items-center justify-center max-w-[90vw] lg:max-w-[100vw]'>
      <Carousel
        transition={{ duration: 1 }}
        autoplay={true}
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className='absolute  -bottom-8 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-4 w-4 cursor-pointer border-[2px] border-gray-300 rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? 'bg-gray-100' : 'bg-white'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        className='rounded-xl max-w-[99%] scrollbar-hide relative overflow-visible'
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant='text'
            color='gray'
            size='lg'
            onClick={handlePrev}
            className='!absolute top-2/4 left-4'
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
            className='!absolute top-2/4 right-4 '
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
            boxShadow:
              'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '2px solid rgba(233,233,232,0.1)',
          }}
          className='relative max-w-full h-[40rem] flex items-center justify-start'
        >
          <img
            src={gradient}
            alt='logo'
            className='cursor-pointer absolute bottom-0 bg-no-repeat object-cover w-full  '
          />
          <div className='flex flex-col w-full h-full md:flex-row items-center justify-center md:justify-between px-12 py-6  2xl:px-20'>
            <div className='text-[24px] md:text-[32px] 2xl:text-[40px] leading-tight flex flex-col items-start'>
              <div className='text-left '>
                {' '}
                <span style={{ fontWeight: '700' }} className=' text '>
                  Sign Up{' '}
                </span>
                <span style={{ fontWeight: '700' }} className='text-[#000]'>
                  & Verify Your Profile
                </span>
              </div>
              <p className='text-[#606E80] text-[14px] md:text-[16px] 2xl:text-[20px] mt-6 font-medium max-w-[32rem] text-left inter leading-relaxed'>
                Begin your journey on CreatorsHub by signing up and verifying
                you own your linked social accounts. Simply add your CreatorsHub
                link to your platform’s bio, ensuring a secure and authentic
                experience while also allowing your fans to discover your
                CreatorsHub.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className=''>
                <video
                  autoPlay
                  loop
                  muted
                  className='w-full sm:w-[90%] lg:w-full overflow-hidden shadow-none'
                >
                  <source
                    src={video1}
                    type='video/mp4'
                    className='bg-transparent border-none'
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: '15px',
            boxShadow:
              'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '2px solid rgba(233,233,232,0.1)',
          }}
          className='relative max-w-full h-[40rem] flex items-center justify-start'
        >
          <img
            src={gradient}
            alt='logo'
            className='cursor-pointer absolute bottom-0 bg-no-repeat object-cover w-full  '
          />
          <div className='flex flex-col w-full h-full md:flex-row items-center justify-center md:justify-between px-12 py-6  2xl:px-20'>
            <div className='text-[24px] md:text-[32px] 2xl:text-[40px] leading-tight flex flex-col items-start'>
              <div className='text-left '>
                {' '}
                <span style={{ fontWeight: '700' }} className='text-[#000]'>
                  Customize Your <br /> Profile and
                </span>
                <span style={{ fontWeight: '700' }} className=' text ml-2'>
                  Stream Live{' '}
                </span>
              </div>
              <p className='text-[#606E80] text-[14px] md:text-[16px] 2xl:text-[20px] mt-6 font-medium max-w-[32rem] text-left inter leading-relaxed'>
                Engage you audience like never before! Personalize your profile
                with a gift registry from any online store. Interact in
                real-time by integrating live streams from Twitch, YouTube and
                more—broadcast your creativity far and wide.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className=''>
                <video
                  autoPlay
                  loop
                  muted
                  className='w-full sm:w-[90%] lg:w-full overflow-hidden shadow-none'
                >
                  <source
                    src={video2}
                    type='video/mp4'
                    className='bg-transparent border-none'
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: '15px',
            boxShadow:
              'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '2px solid rgba(233,233,232,0.1)',
          }}
          className='relative max-w-full h-[40rem] flex items-center justify-start'
        >
          <img
            src={gradient}
            alt='logo'
            className='cursor-pointer absolute bottom-0 bg-no-repeat object-cover w-full  '
          />
          <div className='flex flex-col w-full h-full md:flex-row items-center justify-center md:justify-between px-12 py-6  2xl:px-20'>
            <div className='text-[24px] md:text-[32px] 2xl:text-[40px] leading-tight flex flex-col items-start'>
              <div className='text-left '>
                {' '}
                <span style={{ fontWeight: '700' }} className='text-[#000]'>
                  Set Up Your
                </span>
                <span style={{ fontWeight: '700' }} className=' text ml-2'>
                  Wish List
                </span>
              </div>
              <p className='text-[#606E80] text-[14px] md:text-[16px] 2xl:text-[20px] mt-6 font-medium max-w-[32rem] text-left inter leading-relaxed'>
                Unlock endless possibilities with our diverse wishlist options:
                <br />
                <span className='text-black'>Small Cash Tips:</span> Receive
                instant tips from fans during your live streams.
                <br />
                <span className='text-black'>Crowdfunding:</span> Dream big! Get
                funded for high-cost items, with a progress bar to track your
                progress. <br />
                <span className='text-black'>Product Links:</span> Add links to
                products from various stores. Fans contribute, you receive the
                funds, order the product, and upload the invoice. <br />
                <span className='text-black'> Small Gift Items:</span>
                Allow fans to express their appreciation with thoughtful gifts
                directly from your profile, up to a value of $100.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className=''>
                <video
                  autoPlay
                  loop
                  muted
                  className='w-full sm:w-[90%] lg:w-full overflow-hidden shadow-none'
                >
                  <source
                    src={video3}
                    type='video/mp4'
                    className='bg-transparent border-none'
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          style={{
            borderRadius: '15px',
            boxShadow:
              'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            boxSizing: 'border-box',
            border: '2px solid rgba(233,233,232,0.1)',
          }}
          className='relative max-w-full h-[40rem] flex items-center justify-between'
        >
          <img
            src={gradient}
            alt='logo'
            className='cursor-pointer absolute bottom-0 bg-no-repeat object-contain w-full  '
          />
          <div className='w-full flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between md:gap:6 pl-10 2xl:px-20'>
            <div className='relative'>
              <div className=' top-0 left-0 text-[20px] md:text-[25px] 2xl:text-[40px] w-[30rem]'>
                <div className='text-left '>
                  {' '}
                  <span style={{ fontWeight: '700' }} className='text-[#000]'>
                    Receive Gifts and <br />
                  </span>
                  <span style={{ fontWeight: '700' }} className=' text mr-2'>
                    Notifications
                    <br />
                  </span>
                  <span style={{ fontWeight: '700' }} className='text-[#000]'>
                    in Real-Time
                  </span>
                </div>
                <p className='text-[#606E80] text-[14px] md:text-[16px] 2xl:text-[20px] mt-6 font-medium  text-left inter leading-relaxed'>
                  Begin your journey on CreatorsHub by signing up and verifying
                  you own your linked social accounts. Simply add your
                  CreatorsHub link to your platform’s bio, ensuring a secure and
                  authentic experience while also allowing your fans to discover
                  your CreatorsHub.
                </p>
              </div>
            </div>

            <div className='max-w-[35rem]'>
              <video
                autoPlay
                loop
                muted
                className='w-full sm:w-[90%] 2xl:w-full overflow-hidden shadow-none bg-transparent'
              >
                <source
                  src={video4}
                  type='video/mp4'
                  className='bg-transparent border-none'
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
}
export function CarouselTransition2() {
  return (
    <div className='flex items-center justify-center max-w-[90vw] lg:max-w-[100vw] overflow-hidden'>
      <Carousel
        transition={{ duration: 1 }}
        // autoplay={true}
        loop={true}
        className='rounded-xl max-w-[99%] scrollbar-hide'
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant='text'
            color='gray'
            size='lg'
            onClick={handlePrev}
            className='!absolute top-2/4 left-4'
          >
            <img src={lefticon} alt='icon' className='w-20 text-gray-400' />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant='text'
            color='gray'
            size='lg'
            onClick={handleNext}
            className='!absolute top-2/4 right-4 '
          >
            <img src={righticon} alt='icon' className='w-20 text-gray-400' />
          </IconButton>
        )}
      >
        <div
          style={{
            borderRadius: '15px',
            boxShadow:
              'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '2px solid rgba(233,233,232,0.1)',
          }}
          className='relative max-w-full h-[40rem] flex items-center justify-start'
        >
          <img
            src={gradient}
            alt='logo'
            className='cursor-pointer absolute bottom-0 bg-no-repeat object-cover w-full  '
          />
          <div className='flex flex-col w-full h-full md:flex-row items-center justify-center md:justify-between px-12 py-6  2xl:px-20'>
            <div className='text-[24px] md:text-[32px] 2xl:text-[40px] leading-tight flex flex-col items-start'>
              <div className='text-left '>
                {' '}
                <span style={{ fontWeight: '700' }} className=' text '>
                  Sign Up{' '}
                </span>
              </div>
              <p className='text-[#606E80] text-[14px] md:text-[16px] 2xl:text-[20px] mt-6 font-medium max-w-[32rem] text-left inter leading-relaxed'>
                Begin your journey by creating an account on CreatorsHub. Join
                our community effortlessly and start exploring a world of
                creativity and support.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className=''>
                <video
                  autoPlay
                  loop
                  muted
                  className='w-full sm:w-[90%] lg:w-full overflow-hidden shadow-none'
                >
                  <source
                    src={video1}
                    type='video/mp4'
                    className='bg-transparent border-none'
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: '15px',
            boxShadow:
              'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '2px solid rgba(233,233,232,0.1)',
          }}
          className='relative max-w-full h-[40rem] flex items-center justify-start'
        >
          <img
            src={gradient}
            alt='logo'
            className='cursor-pointer absolute bottom-0 bg-no-repeat object-cover w-full  '
          />
          <div className='flex flex-col w-full h-full md:flex-row items-center justify-center md:justify-between px-12 py-6  2xl:px-20'>
            <div className='text-[24px] md:text-[32px] 2xl:text-[40px] leading-tight flex flex-col items-start'>
              <div className='text-left '>
                {' '}
                <span style={{ fontWeight: '700' }} className='text-[#000]'>
                  Browse Your
                </span>
                <span style={{ fontWeight: '700' }} className=' text ml-2'>
                  Favorite Creators
                </span>
              </div>
              <p className='text-[#606E80] text-[14px] md:text-[16px] 2xl:text-[20px] mt-6 font-medium max-w-[32rem] text-left inter leading-relaxed'>
                Discover a diverse range of creators—from gamers to chefs,
                vloggers to influencers. Explore their profiles, content, and
                updates to find those who resonate with you.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className=''>
                <video
                  autoPlay
                  loop
                  muted
                  className='w-full sm:w-[90%] lg:w-full overflow-hidden shadow-none'
                >
                  <source
                    src={video5}
                    type='video/mp4'
                    className='bg-transparent border-none'
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: '15px',
            boxShadow:
              'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '2px solid rgba(233,233,232,0.1)',
          }}
          className='relative max-w-full h-[40rem] flex items-center justify-start'
        >
          <img
            src={gradient}
            alt='logo'
            className='cursor-pointer absolute bottom-0 bg-no-repeat object-cover w-full  '
          />
          <div className='flex flex-col w-full h-full md:flex-row items-center justify-center md:justify-between px-12 py-6  2xl:px-20'>
            <div className='text-[24px] md:text-[32px] 2xl:text-[40px] leading-tight flex flex-col items-start'>
              <div className='text-left '>
                {' '}
                <span style={{ fontWeight: '700' }} className='text-[#000]'>
                  Send
                </span>
                <span style={{ fontWeight: '700' }} className=' text ml-2'>
                  Gifts & Contributions
                </span>
              </div>
              <p className='text-[#606E80] text-[14px] md:text-[16px] 2xl:text-[20px] mt-6 font-medium max-w-[32rem] text-left inter leading-relaxed'>
                Support your favorite creators by sending gifts and
                contributions directly. Whether it's a cash tip, a product from
                their wishlist, or backing their crowdfunding goals, you can
                engage and show appreciation easily.
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className=''>
                <video
                  autoPlay
                  loop
                  muted
                  className='w-full sm:w-[90%] lg:w-full overflow-hidden shadow-none'
                >
                  <source
                    src={video6}
                    type='video/mp4'
                    className='bg-transparent border-none'
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
const CreatorContent = () => (
  <div className='flex flex-col items-center justify-center'>
    <p className='mb-10 mt-4 lg:my-10 lg:max-w-[65rem]'>
      Empower your creative journey on CreatorsHub with intuitive tools designed
      for creators. Why Join CreatorsHub? As a creator, showcase your talents
      through live streaming, upload features, and wishlists. Engage with your
      fans effortlessly, with streamlined payment processing and real-time
      alerts for gifts and contributions. Our platform ensures that your
      personal information is protected.
    </p>
    <CarouselTransition1 />
    <div className='flex flex-col gap-8 w-full mt-10 '>
      <div className='flex items-center justify-center gap-4 xl:gap-0 xl:justify-between 3xl:justify-around w-full flex-wrap xl:flex-nowrap'>
        {' '}
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
          className='min-w-[340px] min-h-[350px] sm:min-w-[400px] sm:min-h-[400px]  md:w-[730px] md:h-[420px] xl:w-[530px] 2xl:w-[580px] xl:h-[360px] 3xl:w-[670px] 3xl:h-[380px] 4xl:w-[730px] 4xl:h-[420px] flex flex-col items-center justify-center group relative px-2 py-4 pb-0 xl:p-4 xl:pb-0'
        >
          <img
            src={gradient}
            alt='gradient'
            className='absolute bottom-0 object-cover overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition ease-in delay-50 duration-300'
          />
          <div className='text-[22px] xl:text-[26px] 3xl:text-[32px] leading-relaxed text-black ubuntu'>
            <span className='italic font-normal'>Live</span>
            <span className='font-bold mx-2  '>Streaming</span>
          </div>
          <p className=' max-w-[40rem] xl:text-[18px] 3xl:text-[20px] inter'>
            Dive into dynamic live streaming on CreatorsHub with seamless Twitch
            integration. Engage fans in real-time, receive gift alerts, and
            enhance your streaming profile.
          </p>
          <div className='xl:min-h-[226px] mt-2 relative group'>
            <img
              src={gifimg}
              alt='cardimage'
              className='w-full h-[11.5rem] xl:h-[12.5rem] 3xl:h-[13rem] 4xl:h-[15rem] rounded-2xl object-fill'
            />
            <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition ease-in delay-50 duration-500 rounded-2xl'></div>
            <div className='flex items-center justify-center gap-1 sm:gap-2 left-7 sm:left-10 xl:left-0 md:gap-4 lg:gap-6 w-[70%] xl:w-[90%] absolute opacity-0 bottom-0 group-hover:-translate-y-20 group-hover:opacity-100 transition ease-in delay-50 duration-500'>
              <img src={gify} alt='' className='w-10 sm:w-16 xl:w-20' />
              <img src={message} alt='' className='xl:w-[80%] 3xl:w-full' />
            </div>
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
          className='min-w-[340px] min-h-[350px] sm:min-w-[400px] sm:min-h-[400px] md:w-[730px] md:h-[420px] xl:w-[530px] 2xl:w-[580px] xl:h-[360px] 3xl:w-[670px] 3xl:h-[380px] 4xl:w-[730px] 4xl:h-[420px] flex flex-col items-center justify-center group relative px-2 py-4 pb-0 xl:p-4 xl:pb-0'
        >
          <img
            src={gradient}
            alt='gradient'
            className='absolute bottom-0 object-cover overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition ease-in delay-50 duration-300'
          />
          <div className='text-[22px] xl:text-[26px] 3xl:text-[32px] leading-relaxed text-black ubuntu'>
            <span className='font-bold mx-2'>Wishlists</span>
          </div>
          <p className=' max-w-[40rem] xl:text-[18px] 3xl:text-[20px] inter'>
            Upload wishlists with products, cash tips, crowdfunding goals, or
            small gifts. Receive support directly from your fans.
          </p>
          <div className='xl:min-h-[200px] xl:w-[60%] 3xl:w-[50%] mt-2 relative group top-2'>
            <img
              src={wishlist}
              alt='cardimage'
              className='max-w-[13rem] sm:max-w-[18rem] w-full md:max-w-[24rem] md:min-h-[15rem] xl:min-h-[12rem] 2xl:min-h-[13rem] xl:max-w-[23rem] h-[11rem] xl:h-[10.5rem] 3xl:h-[15rem] 4xl:h-[15rem] rounded-2xl object-fill group-hover:scale-105 origin-bottom transition ease-in delay-100 duration-500'
            />
            <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition group-hover:scale-105 origin-bottom ease-in delay-50 duration-500 rounded-2xl'></div>
            <div className='flex items-center justify-center gap-1 sm:gap-2 left-7 sm:left-10 xl:left-0 md:gap-4 lg:gap-6 w-[70%] xl:w-full absolute bottom-[6rem] transition ease-in delay-50 duration-500'>
              <img
                src={butimg}
                alt=''
                className='w-14 sm:w-20 md:w-[6rem] absolute -left-[2.2rem] sm:-left-[3.5rem] md:-left-[5rem] xl:-left-[3rem] group-hover:-translate-x-4 group-hover:scale-110  transition ease-in delay-100 duration-500'
              />
              <img
                src={gift}
                alt=''
                className='opacity-0 group-hover:opacity-100 w-[1.6rem] sm:w-[1.8rem] absolute -left-4 sm:-left-10 group-hover:-translate-y-[2rem] group-hover:-translate-x-[4rem] group-hover:scale-150  transition ease-in delay-100 duration-500'
              />
              <img
                src={coin}
                alt=''
                className='opacity-0 group-hover:opacity-100 w-[1.6rem] sm:w-[1.8rem] absolute -left-4 sm:-left-10 group-hover:-translate-y-[3rem] group-hover:-translate-x-1 group-hover:scale-150  transition ease-in delay-100 duration-500'
              />
              <img
                src={money}
                alt=''
                className='opacity-0 group-hover:opacity-100 w-[1.4rem] sm:w-[1.6rem] absolute -left-4 sm:-left-10 group-hover:translate-y-[3rem] group-hover:-translate-x-[2rem] group-hover:scale-150 transition ease-in delay-100 duration-500'
              />
              <img
                src={img1}
                alt=''
                className='xl:w-[80%] 3xl:w-full max-w-[6rem] sm:max-w-[7rem] md:max-w-[9rem] xl:max-w-[8rem] absolute opacity-0 -top-[5rem] sm:-top-[6rem] md:-top-[8rem] -right-10 sm:-right-20 xl:-right-10 group-hover:translate-x-8 sm:group-hover:translate-x-10 md:group-hover:translate-x-14 group-hover:-translate-y-2 group-hover:scale-x-105 group-hover:scale-y-110 group-hover:opacity-100 transition ease-in delay-100 duration-500'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center gap-4 xl:gap-0 xl:justify-between 3xl:justify-around w-full flex-wrap xl:flex-nowrap'>
        {' '}
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
          className='min-w-[340px] min-h-[350px] sm:min-w-[400px] sm:min-h-[400px] md:w-[730px] md:h-[420px] xl:w-[530px] 2xl:w-[580px] xl:h-[360px] 3xl:w-[670px] 3xl:h-[380px] 4xl:w-[730px] 4xl:h-[420px] flex flex-col items-center justify-center group relative px-2 py-4 pb-0 xl:p-4 xl:pb-0'
        >
          <img
            src={gradient}
            alt='gradient'
            className='absolute bottom-0 object-cover overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition ease-in delay-50 duration-300'
          />
          <div className='text-[22px] xl:text-[26px] 3xl:text-[32px] leading-relaxed text-black ubuntu'>
            <span className='italic font-normal'>Access to real-time</span>
            <span className='font-bold mx-2  '>notifications</span>
          </div>
          <p className=' max-w-[40rem] xl:text-[18px] 3xl:text-[20px] inter'>
            Get real-time gift alerts from your fans—crowdfunding, cash gifts,
            tips, and wishlist items included. Stay connected and appreciated
            with instant notifications.
          </p>
          <div className='xl:min-h-[200px]  mt-2 relative group '>
            <div className='overflow-hidden w-full h-full relative group-hover:scale-105 origin-bottom transition ease-in delay-50 duration-500'>
              {' '}
              <img
                src={game}
                alt='cardimage'
                className='max-w-[22rem]  w-full xl:max-w-[23rem]  3xl:max-w-[25rem]  overflow-hidden  rounded-2xl object-cover '
              />
            </div>
            <div className=' absolute top-0 -right-[0rem] sm:-right-[4rem]  xl:-right-[2.5rem] 3xl:-right-[4.5rem]'>
              <img
                src={buttonicon}
                alt=''
                className='w-12 hidden group-hover:block'
              />
              <img
                src={buttonicon1}
                alt=''
                className='w-12 block group-hover:hidden'
              />
              <img
                src={buttoniconwrap}
                alt=''
                className='absolute opacity-0 group-hover:opacity-100 transition ease-in delay-50 duration-500 -top-1 -right-1 w-5'
              />
            </div>
            <div className='absolute xl:max-w-[23rem] 3xl:w-full object-contain inset-0 bg-white opacity-0 group-hover:opacity-40 transition ease-in delay-50 duration-500 rounded-2xl'></div>

            <div className='flex flex-col items-end w-[70%] md:w-[80%] xl:w-full absolute opacity-0 top-14 left-[8.3rem] sm:left-[10.3rem] xl:left-[4.3rem]  group-hover:opacity-100 transition ease-in delay-50 duration-500'>
              <img
                src={comment1}
                alt=''
                className='group-hover:-translate-x-10 transition ease-in delay-50 duration-500'
              />
              <img
                src={comment2}
                alt=''
                className='group-hover:-translate-x-10 transition ease-in delay-50 duration-500'
              />
              {/* <img src={buttoniconwrap} alt='' className='' /> */}
            </div>
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
          className='min-w-[340px] min-h-[350px] sm:min-w-[400px] sm:min-h-[400px] md:w-[730px] md:h-[420px] xl:w-[530px] 2xl:w-[580px] xl:h-[360px] 3xl:w-[670px] 3xl:h-[380px] 4xl:w-[730px] 4xl:h-[420px] flex flex-col items-center justify-center group relative px-2 py-4 pb-0 xl:p-4 xl:pb-0'
        >
          <img
            src={gradient}
            alt='gradient'
            className='absolute bottom-0 object-cover overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition ease-in delay-50 duration-300'
          />
          <div className='text-[22px] xl:text-[26px] 3xl:text-[32px] leading-relaxed text-black ubuntu'>
            <span className='font-bold mx-2  '>Pay</span>
            <span className='italic font-normal'>Per View</span>
          </div>
          <p className=' max-w-[40rem] xl:text-[18px] 3xl:text-[20px] inter'>
            Monetize your best work with exclusive pay-per-video and premium
            content options. Engage your audience with unique features and
            insights, enhancing viewer satisfaction.
          </p>
          <div className='xl:min-h-[140px] relative group bottom-0'>
            <div className='overflow-hidden w-full h-full relative origin-bottom transition ease-in delay-50 duration-500 flex items-center justify-center'>
              {' '}
              <div className='w-[80%] flex items-start justify-center'>
                <img
                  src={video}
                  alt='cardimage'
                  className='w-full max-w-[10rem] md:max-w-[12rem] xl:max-w-[14rem] group-hover:opacity-30 group-hover:translate-x-[7rem] relative top-10  left-10 3xl:left-0 rounded-2xl object-fill transition ease-in delay-50 duration-500'
                />
                <img
                  src={video}
                  alt='cardimage'
                  className='w-full max-w-[12rem] md:max-w-[14rem] xl:max-w-[16rem] group-hover:scale-[1.02] group-hover:scale-y-[1.03] relative top-6 rounded-2xl object-fill transition ease-in delay-50 duration-500'
                />
                <img
                  src={video}
                  alt='cardimage'
                  className='w-full max-w-[10rem] md:max-w-[12rem] xl:max-w-[14rem] group-hover:opacity-30 group-hover:-translate-x-[7rem] relative  right-10  top-10 3xl:right-0 -z-10 rounded-2xl object-fill transition ease-in delay-50 duration-500'
                />
              </div>
            </div>

            <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition ease-in delay-50 duration-500 rounded-2xl'></div>

            <div className='flex flex-col items-center w-full absolute opacity-0  bottom-0 left-0  group-hover:opacity-100 group-hover:-translate-y-4 transition ease-in delay-50 duration-500'>
              <img
                src={comment3}
                alt=''
                className='w-full max-w-[30rem] z-10'
              />

              {/* <img src={buttoniconwrap} alt='' className='' /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const UserContent = () => (
  <div className='flex flex-col items-center justify-center'>
    <p className='mb-10 mt-4 lg:my-10 lg:max-w-[65rem]'>
      Explore the user-centric functionalities of CreatorsHub, where members can
      easily browse, discover, and support their favorite creators. CreatorsHub
      offers a secure platform where you can send gifts and contributions
      without worrying about your personal information being compromised. From
      interactive profiles to secure one-click payments, our platform ensures a
      personalized experience tailored to user preferences.
    </p>
    <CarouselTransition2 />
    <div className='flex flex-col gap-8 w-full mt-10 '>
      <div className='flex items-center justify-center gap-4 xl:gap-0 xl:justify-between w-full flex-wrap xl:flex-nowrap'>
        {' '}
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
          className='min-w-[340px] min-h-[350px] sm:min-w-[400px] sm:min-h-[400px] md:w-[730px] md:h-[420px] xl:w-[530px] 2xl:w-[580px] xl:h-[360px] 3xl:w-[670px] 3xl:h-[380px] 4xl:w-[730px] 4xl:h-[420px] flex flex-col items-center justify-center group relative px-2 py-4 pb-0 xl:p-4 xl:pb-0'
        >
          <img
            src={gradient}
            alt='gradient'
            className='absolute bottom-0 object-cover overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition ease-in delay-50 duration-300'
          />
          <div className='text-[22px] xl:text-[26px] 3xl:text-[32px] leading-relaxed text-black ubuntu'>
            <span className='italic font-normal'>Live</span>
            <span className='font-bold mx-2  '>Streaming</span>
          </div>
          <p className=' max-w-[40rem] xl:text-[18px] 3xl:text-[20px] inter'>
            Connect with creators in real-time with live chat and interactive
            features on CreatorsHub. Send tips, crowdfund, and share wishlist
            items directly.
          </p>
          <div className='xl:min-h-[226px] mt-2 relative group'>
            <img
              src={livestream}
              alt='cardimage'
              className='w-full h-[11.5rem] xl:h-[12.5rem] 3xl:h-[13rem] 4xl:h-[15rem] rounded-2xl object-fill'
            />
            <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition ease-in delay-50 duration-500 rounded-2xl'></div>
            <div className=' flex items-center justify-center w-[100%] xl:w-[100%] absolute opacity-0 bottom-0 md:-bottom-10 lg:-bottom-8 xl:bottom-4 4xl:bottom-0  group-hover:opacity-100 transition ease-in delay-50 duration-500'>
              <img
                src={livestrea}
                alt=''
                className='w-[40%] sm:w-[48%] md:w-[55%] lg:w-[60%] xl:w-[40%]  2xl:w-[45%] 3xl:w-[50%] rounded-lg group-hover:scale-[2] origin-bottom transition ease-in delay-50 duration-500'
              />
            </div>
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
          className='min-w-[340px] min-h-[350px] sm:min-w-[400px] sm:min-h-[400px] md:w-[730px] md:h-[420px] xl:w-[530px] 2xl:w-[580px] xl:h-[360px] 3xl:w-[670px] 3xl:h-[380px] 4xl:w-[730px] 4xl:h-[420px] flex flex-col items-center justify-center group relative px-2 py-4 pb-0 xl:p-4 xl:pb-0'
        >
          <img
            src={gradient}
            alt='gradient'
            className='absolute bottom-0 object-cover overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition ease-in delay-50 duration-300'
          />
          <div className='text-[22px] xl:text-[26px] 3xl:text-[32px] leading-relaxed text-black ubuntu'>
            <span className='italic font-normal'>Effortless</span>
            <span className='font-bold mx-2 text '> One-Tap</span>
            <span className='font-bold mx-2  '>Payment Magic</span>
          </div>
          <p className=' max-w-[40rem] xl:text-[18px] 3xl:text-[20px] inter'>
            Enjoy seamless one-tap payments on CreatorsHub. Support creators
            instantly with tips and crowdfunding contributions, hassle-free.
          </p>
          <div className='max-w-[14rem] sm:max-w-[20rem] md:sm:max-w-full xl:max-w-[60%] 2xl:max-w-[100%] xl:min-h-[150px] 3xl:min-h-[190px] mt-2 relative group'>
            <img
              src={Sendtips}
              alt='cardimage'
              className='w-full h-[11.5rem]  3xl:h-[12.2rem] 4xl:h-[15rem] rounded-2xl object-fill group-hover:scale-90 group-hover:-translate-x-[4rem] sm:group-hover:-translate-x-[7rem] transition ease-in delay-50 duration-500'
            />
            <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-40 group-hover:scale-90 group-hover:-translate-x-[4rem] sm:group-hover:-translate-x-[7rem] transition ease-in delay-50 duration-500 rounded-2xl'></div>
            <div className=' flex items-center justify-center w-[100%] xl:w-[100%] absolute opacity-0 top-14 left-40 group-hover:opacity-100 transition ease-in delay-50 duration-500'>
              <img
                src={onetap}
                alt=''
                className='absolute left-8 sm:left-20 4xl:left-[7rem] 4xl:sm:top-1 top-0 sm:-top-2  w-[40%] sm:w-[48%] md:w-[55%] lg:w-[60%] xl:w-[40%]  2xl:w-[45%] 3xl:w-[50%] rounded-lg group-hover:scale-[2.1] origin-right transition ease-in delay-50 duration-500'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center gap-4 xl:gap-0 xl:justify-between w-full flex-wrap xl:flex-nowrap'>
        {' '}
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
          className='min-w-[340px] min-h-[350px] sm:min-w-[400px] sm:min-h-[400px] md:w-[730px] md:h-[420px] xl:w-[530px] 2xl:w-[580px] xl:h-[360px] 3xl:w-[670px] 3xl:h-[380px] 4xl:w-[730px] 4xl:h-[420px] flex flex-col items-center justify-between group relative px-2 py-4 pb-0 xl:p-4 xl:pb-0'
        >
          <img
            src={gradient}
            alt='gradient'
            className='absolute bottom-0 object-cover overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition ease-in delay-50 duration-300'
          />
          <div className='text-[22px] xl:text-[26px] 3xl:text-[32px] leading-relaxed text-black ubuntu'>
            <span className='italic font-normal'>Explore your</span>
            <span className='font-bold mx-2'>favorite</span>
            <span className='font-bold mx-2 text'>creators</span>
          </div>
          <p className=' max-w-[40rem] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] inter'>
            Discover and follow your favorite creators for the content you love.
            Stay updated with their posts, streams, and engage directly to
            support them. Join their community with a simple click.
          </p>
          <div className='relative bottom-0 2xl:bottom-5 3xl:bottom-2.5 4xl:bottom-0'>
            <div className='md:min-h-[200px]  xl:max-w-[330px] 2xl:max-w-[300px] 3xl:max-w-full relative bottom-0 xl:bottom-2 2xl:bottom-0 group '>
              <img
                src={favourite}
                alt='cardimage'
                className='relative 2xl:-bottom-4 3xl:bottom-0 w-[100%] max-w-[100%] rounded-2xl object-cover group-hover:opacity-0 opacity-100 transition ease-in delay-50 duration-500'
              />

              <div className=' flex items-center justify-center w-[100%] xl:w-[100%] absolute opacity-0 bottom-0  group-hover:opacity-100 transition ease-in delay-50 duration-500'>
                <img
                  src={amanda}
                  alt=''
                  className='w-[30%] absolute bottom-0 right-4 sm:-right-10 sm:w-[48%] md:w-[55%] lg:w-[60%] xl:w-[40%]  2xl:w-[45%] 3xl:w-[50%] rounded-lg group-hover:scale-[1.3] origin-bottom transition ease-in delay-50 duration-500'
                />
                <img
                  src={jessica}
                  alt=''
                  className='w-[30%] z-10 sm:w-[48%] md:w-[55%] lg:w-[60%] xl:w-[40%]  2xl:w-[45%] 3xl:w-[50%] rounded-lg group-hover:scale-[1.3] origin-bottom transition ease-in delay-50 duration-500'
                />
                <img
                  src={ava}
                  alt=''
                  className='w-[30%] absolute bottom-0 left-4 sm:-left-10  z-0 sm:w-[48%] md:w-[55%] lg:w-[60%] xl:w-[40%]  2xl:w-[45%] 3xl:w-[50%] rounded-lg group-hover:scale-[1.3] origin-bottom transition ease-in delay-50 duration-500'
                />
              </div>
            </div>
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
          className='min-w-[340px] min-h-[350px] sm:min-w-[400px] sm:min-h-[400px] md:w-[730px] md:h-[420px] xl:w-[530px] 2xl:w-[580px] xl:h-[360px] 3xl:w-[670px] 3xl:h-[380px] 4xl:w-[730px] 4xl:h-[420px] flex flex-col items-center justify-center group relative px-2 py-4 pb-0 xl:p-4 xl:pb-0'
        >
          <img
            src={gradient}
            alt='gradient'
            className='absolute bottom-0 object-cover overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition ease-in delay-50 duration-300'
          />
          <div className='text-[22px] xl:text-[26px] 3xl:text-[32px] leading-relaxed text-black ubuntu'>
            <span className='font-bold mx-2  '>Pay</span>
            <span className='italic font-normal'>Per View</span>
          </div>
          <p className=' max-w-[40rem] xl:text-[18px] 3xl:text-[20px] inter'>
            Monetize your best work with exclusive pay-per-video and premium
            content options. Engage your audience with unique features and
            insights, enhancing viewer satisfaction.
          </p>
          <div className='xl:min-h-[140px] relative group bottom-0'>
            <div className='overflow-hidden w-full h-full relative origin-bottom transition ease-in delay-50 duration-500 flex items-center justify-center'>
              {' '}
              <div className='w-[80%] flex items-start justify-center'>
                <img
                  src={video}
                  alt='cardimage'
                  className='w-full max-w-[10rem] md:max-w-[12rem] xl:max-w-[14rem] group-hover:translate-x-[7rem] relative top-10  left-10 3xl:left-0 rounded-2xl object-fill transition ease-in delay-50 duration-500'
                />
                <img
                  src={video}
                  alt='cardimage'
                  className='w-full max-w-[12rem] md:max-w-[14rem] xl:max-w-[16rem] group-hover:scale-[1.02] group-hover:scale-y-[1.03] relative top-6 rounded-2xl object-fill transition ease-in delay-50 duration-500'
                />
                <img
                  src={video}
                  alt='cardimage'
                  className='w-full max-w-[10rem] md:max-w-[12rem] xl:max-w-[14rem] group-hover:-translate-x-[7rem] relative  right-10  top-10 3xl:right-0 -z-10 rounded-2xl object-fill transition ease-in delay-50 duration-500'
                />
              </div>
            </div>

            <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition ease-in delay-50 duration-500 rounded-2xl'></div>

            <div className='flex flex-col items-center w-full absolute opacity-0  bottom-0 left-0  group-hover:opacity-100 group-hover:-translate-y-4 transition ease-in delay-50 duration-500'>
              <img
                src={comment3}
                alt=''
                className='w-full max-w-[30rem] z-10'
              />

              {/* <img src={buttoniconwrap} alt='' className='' /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
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
    let minHeight = '3rem';
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
      minHeight = '3rem';
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
      padding: '5px 1rem',
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
    <div className='mt-10 lg:mt-0 flex flex-col items-center justify-center max-w-full'>
      <div className='text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[55px] font-medium my-2'>
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
            className: 'bg-transparent shadow-none rounded-full',
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
