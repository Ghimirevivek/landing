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
    <footer class='w-full px-2 pb-10 relative'>
      <img
        src={HeaderSvg}
        alt='logo'
        className='cursor-pointer w-full absolute bottom-0'
      />
      <div class='w-full flex items-start justify-start'>
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '15px',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 10px 0px inset',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '2px solid rgba(233,233,232,0.6)',
          }}
          className='flex flex-col items-start justify-center px-2 py-10 ml-4 mb-5'
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
        <div className='flex flex-col w-[68%] px-8 mb-10'>
          <div className='flex items-center justify-between'>
            <div class='grid grid-cols-2 lg:grid-cols-3 gap-14 pt-4 max-w-md mx-auto md:max-w-xl lg:max-w-full ml-8'>
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
            <div class='flex flex-col justify-center items-start mt-[5.5rem]'>
              <span className='text text-[20px] mb-6'>Follow Us</span>
              <div className='grid grid-cols-5 gap-x-3 gap-y-3 mr-[2rem]'>
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
                  <IoLogoTiktok
                    size={24}
                    className='text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
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
                  <FaFacebook
                    size={24}
                    className='text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
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
                  <FaFacebook
                    size={24}
                    className='text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
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
                  <FaFacebook
                    size={24}
                    className='text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
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
                  <FaFacebook
                    size={24}
                    className='text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
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
                  <FaFacebook
                    size={24}
                    className='text-[#1877F2] absolute -bottom-8 group-hover:-translate-y-10 transition-all ease-in-out delay-50 duration-300 transform'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='w-full border-t border-b-[#E1E5EA] my-8'>
            <div className='flex items-center justify-between mt-6'>
              <p className='text-[#606E80] text-[15px] leading-loose'>
                Copyright © 2024, All Rights Reserved - MWP Entertainment LLC
                <br />
                Developed by CV Infotech
              </p>
              <img
                src={img1}
                alt='logo'
                className='cursor-pointer w-[5.9rem]'
              />
              <img
                src={img2}
                alt='logo'
                className='cursor-pointer w-[3.75rem]'
              />
              <img
                src={img3}
                alt='logo'
                className='cursor-pointer w-[7.5rem]'
              />
              <img
                src={img4}
                alt='logo'
                className='cursor-pointer w-[7.5rem]'
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
