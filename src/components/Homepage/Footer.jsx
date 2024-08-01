import React from 'react';
import logo from '../../Assets/logo.png';
import img1 from '../../Assets/image 43.png';
import img2 from '../../Assets/image 44.png';
import img3 from '../../Assets/image 45.png';
import img4 from '../../Assets/image 46.png';
import insta from '../../Assets/insta.png';
import youtube from '../../Assets/youtube.png';
import facebook from '../../Assets/facebook.png';
import twitch from '../../Assets/twitch.png';
import tiktok from '../../Assets/tiktok.png';
import reddit from '../../Assets/reddit.png';
import wechat from '../../Assets/wechat.png';
import discord from '../../Assets/discord.png';
import twitter from '../../Assets/twitter.png';
import threads from '../../Assets/threads.png';
import HeaderSvg from '../../Assets/header-gradient2.svg';
import {
  FaDiscord,
  FaFacebook,
  FaRedditAlien,
  FaTwitch,
  FaYoutube,
} from 'react-icons/fa';
import { IoLogoTiktok, IoLogoWechat } from 'react-icons/io5';
import { BsFillThreadsFill, BsInstagram } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer class=' w-full pr-2 pl-4 lg:pb-10 relative '>
      <img src={HeaderSvg} alt='logo' className='w-full absolute bottom-0' />
      <div class='w-full flex flex-col lg:flex-row lg:items-start items-center justify-center '>
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '15px',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 10px 0px inset',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '2px solid rgba(233,233,232,0.6)',
          }}
          className='flex flex-col items-start justify-center px-2 py-10  sm:ml-4 mb-5 w-full lg:w-auto'
        >
          <div className='px-8'>
            {' '}
            <a href='/'>
              <img
                src={logo}
                alt='logo'
                className='cursor-pointer w-[15rem] mb-16'
              />
            </a>
          </div>
          <div className='text-[30px] leading-tight px-8'>
            <span className='italic font-medium'>Creator</span>
            <span className='text ml-2 text-[30px]'>Appreciation</span>
            <br />
            <span style={{ fontWeight: '800' }} className=''>
              Made Safe and Easy
            </span>
          </div>
          <p className='text-[#606E80] text-[16px] mt-4 font-medium max-w-[28rem] px-8'>
            Fans support their favorite creators by simply sending them gifts
            from their personalized registry. All the while keeping both fans
            and creators safe by keeping their personal information private.
          </p>
        </div>
        <div className=' w-full lg:w-[68%] lg:px-8 mb-10'>
          <div className='flex flex-col items-start justify-center 2xl:items-center 2xl:justify-between 2xl:flex-row'>
            <div class='grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 sm:gap-10 lg:gap-14 pt-4 min-w-[90%] lg:min-w-[65%] mx-auto md:max-w-xl lg:max-w-full lg:ml-8'>
              <div class='block'>
                <ul class='text-[16px] transition-all duration-500'>
                  <li class='mb-6 text-[20px] font-bold text'>
                    <a href='/' class=' '>
                      Quick Links
                    </a>
                  </li>
                  <li class='mb-6  font-semibold '>
                    <a href='/' class='text-[#606E80] hover:text-[#000]'>
                      Home
                    </a>
                  </li>
                  <li class='mb-6  font-semibold '>
                    <a href='/' class='text-[#606E80] hover:text-[#000]'>
                      About Us
                    </a>
                  </li>
                  <li class='mb-6  font-semibold'>
                    <a href='/' class='text-[#606E80] hover:text-[#000]'>
                      Login
                    </a>
                  </li>
                  <li class='mb-6  font-semibold'>
                    <a href='/' class='text-[#606E80] hover:text-[#000]'>
                      How It Works
                    </a>
                  </li>
                </ul>
              </div>

              <div class='block'>
                <ul class='text-[16px] transition-all duration-500'>
                  <li class='mb-6 text-[20px]  font-bold'>
                    <a href='/' class='text '>
                      Help
                    </a>
                  </li>
                  <li class='mb-6  font-semibold'>
                    <a href='/' class='text-[#606E80] hover:text-[#000]'>
                      FAQ & Help
                    </a>
                  </li>
                  <li class='mb-6  font-semibold'>
                    <a href='/' class='text-[#606E80] hover:text-[#000]'>
                      Contact
                    </a>
                  </li>
                  <li class='mb-6  font-semibold'>
                    <a href='/' class='text-[#606E80] hover:text-[#000]'>
                      Blog
                    </a>
                  </li>
                  <li class='mb-6  font-semibold'>
                    <a href='/' class='text-[#606E80] hover:text-[#000]'>
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div class='block'>
                <ul class='text-[16px] transition-all duration-500'>
                  <li class='mb-6 text-[20px]  font-bold'>
                    <a href='/' class='text'>
                      Legal
                    </a>
                  </li>
                  <li class='mb-6  font-semibold'>
                    <a href='/' class='text-[#606E80] hover:text-[#000]'>
                      Terms of Service
                    </a>
                  </li>
                  <li class='mb-6  font-semibold'>
                    <a href='/' class='text-[#606E80] hover:text-[#000]'>
                      Privacy Policy
                    </a>
                  </li>
                  <li class='mb-6  font-semibold'>
                    <a href='/' class='text-[#606E80] hover:text-[#000]'>
                      Data Security
                    </a>
                  </li>
                  <li class='mb-6  font-semibold'>
                    <a href='/' class='text-[#606E80] hover:text-[#000]'>
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='mr-auto pl-5 2xl:pl-0 flex flex-col justify-center items-start 2xl:mt-[5.5rem]'>
              <span className=' text text-[20px] mb-2'>Follow Us</span>
              <div className='flex flex-wrap items-center justify-start gap-3 lg:grid grid-cols-5 lg:gap-x-3 lg:gap-y-3 lg:mr-[2rem] w-full'>
                <a
                  href='/'
                  class='overflow-hidden w-10 h-10 relative rounded-[8px] border border-[#E5E7EB] flex justify-center items-center group transition-all ease-in-out delay-50 duration-200'
                >
                  <FaFacebook
                    size={24}
                    className='text-gray-600 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
                  />
                  <img
                    src={facebook}
                    alt='logofb'
                    className='w-8 text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-9 transition-all ease-in-out delay-50 duration-300 transform'
                  />
                </a>
                <a
                  href='/'
                  class='overflow-hidden w-10 h-10 relative rounded-[8px] border border-[#E5E7EB] flex justify-center items-center group transition-all ease-in-out delay-50 duration-200'
                >
                  <IoLogoTiktok
                    size={24}
                    className='text-gray-600 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
                  />
                  <img
                    src={tiktok}
                    alt='tiktok'
                    className='w-[1.60rem] text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-[2.35rem] transition-all ease-in-out delay-50 duration-300 transform'
                  />
                </a>
                <a
                  href='/'
                  class='overflow-hidden w-10 h-10 relative rounded-[8px] border border-[#E5E7EB] flex justify-center items-center group transition-all ease-in-out delay-50 duration-200'
                >
                  <BsInstagram
                    size={24}
                    className='text-gray-600 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
                  />
                  <img
                    src={insta}
                    alt='instagram'
                    className='w-[1.60rem] text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-[2.35rem] transition-all ease-in-out delay-50 duration-300 transform'
                  />
                </a>
                <a
                  href='/'
                  class='overflow-hidden w-10 h-10 relative rounded-[8px] border border-[#E5E7EB] flex justify-center items-center group transition-all ease-in-out delay-50 duration-200'
                >
                  <FaTwitch
                    size={24}
                    className='text-gray-600 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
                  />
                  <img
                    src={twitch}
                    alt='twitch'
                    className='w-6 text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-[2.35rem] transition-all ease-in-out delay-50 duration-300 transform'
                  />
                </a>
                <a
                  href='/'
                  class='overflow-hidden w-10 h-10 relative rounded-[8px] border border-[#E5E7EB] flex justify-center items-center group transition-all ease-in-out delay-50 duration-200'
                >
                  <FaYoutube
                    size={24}
                    className='text-gray-600 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
                  />
                  <img
                    src={youtube}
                    alt='youtube'
                    className='w-6 text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-[2.5rem] transition-all ease-in-out delay-50 duration-300 transform'
                  />
                </a>
                <a
                  href='/'
                  class='overflow-hidden w-10 h-10 relative rounded-[8px] border border-[#E5E7EB] flex justify-center items-center group transition-all ease-in-out delay-50 duration-200'
                >
                  <FaRedditAlien
                    size={24}
                    className='text-gray-600 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
                  />
                  <img
                    src={reddit}
                    alt='reddit'
                    className='w-[1.60rem] text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-[2.55rem] transition-all ease-in-out delay-50 duration-300 transform'
                  />
                </a>
                <a
                  href='/'
                  class='overflow-hidden w-10 h-10 relative rounded-[8px] border border-[#E5E7EB] flex justify-center items-center group transition-all ease-in-out delay-50 duration-200'
                >
                  <IoLogoWechat
                    size={24}
                    className='text-gray-600 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
                  />
                  <img
                    src={wechat}
                    alt='wechat'
                    className='w-[1.60rem] text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-[2.55rem] transition-all ease-in-out delay-50 duration-300 transform'
                  />
                </a>
                <a
                  href='/'
                  class='overflow-hidden w-10 h-10 relative rounded-[8px] border border-[#E5E7EB] flex justify-center items-center group transition-all ease-in-out delay-50 duration-200'
                >
                  <FaDiscord
                    size={24}
                    className='text-gray-600 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
                  />
                  <img
                    src={discord}
                    alt='discord'
                    className='w-[1.60rem] text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-[2.55rem] transition-all ease-in-out delay-50 duration-300 transform'
                  />
                </a>
                <a
                  href='/'
                  class='overflow-hidden w-10 h-10 relative rounded-[8px] border border-[#E5E7EB] flex justify-center items-center group transition-all ease-in-out delay-50 duration-200'
                >
                  <FaXTwitter
                    size={24}
                    className='text-gray-600 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
                  />
                  <img
                    src={twitter}
                    alt='twitter'
                    className='w-[1.50rem] text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-[2.55rem] transition-all ease-in-out delay-50 duration-300 transform'
                  />
                </a>
                <a
                  href='/'
                  class='overflow-hidden w-10 h-10 relative rounded-[8px] border border-[#E5E7EB] flex justify-center items-center group transition-all ease-in-out delay-50 duration-200'
                >
                  <BsFillThreadsFill
                    size={24}
                    className='text-gray-600 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
                  />
                  <img
                    src={threads}
                    alt='threads'
                    className='w-[1.60rem] text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-[2.35rem] transition-all ease-in-out delay-50 duration-300 transform'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='w-full border-t border-b-[#E1E5EA] mt-8 lg:mb-8'>
            <div className='w-full px-5 xl:px-0 flex flex-col-reverse xl:flex-row lg:items-center justify-around mt-6'>
              <p className='text-[#606E80] text-sm xl:text-[15px] leading-loose mt-4 mb-0 xl:mt-0 w-full'>
                Copyright © 2024, All Rights Reserved - MWP Entertainment LLC
                <br />
                Developed by CV Infotech
              </p>
              <div className='flex items-center justify-around w-full'>
                <img
                  src={img1}
                  alt='logo'
                  className='cursor-pointer w-[4.5rem] lg:w-[5.9rem]'
                />
                <img
                  src={img2}
                  alt='logo'
                  className='cursor-pointer w-[1.75rem lg:w-[3.75rem]'
                />
                <img
                  src={img3}
                  alt='logo'
                  className='cursor-pointer w-[5.5rem] lg:w-[7.5rem]'
                />
                <img
                  src={img4}
                  alt='logo'
                  className='cursor-pointer w-[5.5rem] lg:w-[7.5rem]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
