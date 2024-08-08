import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaUserPlus } from 'react-icons/fa';
import logo from '../../Assets/logo.svg';
import logo2 from '../../Assets/Frame 136.png';
import HeaderSvg from '../../Assets/header-gradient.svg';
import './Header.css';
import { RiMenuFill } from 'react-icons/ri';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='bg-header-gradient bg-cover  bg-no-repeat  w-full min-h-[10rem] flex items-center justify-center relative'>
      {/* <img
        src={HeaderSvg}
        alt='logo'
        className='cursor-pointer max-w-[100%] absolute top-0 object-cover'
      /> */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '15px',
          boxShadow:
            'rgba(17, 17, 26, 0.1) 0px 2px 6px 0px inset, rgba(17, 17, 26, 0.1) 0px -2px 6px 0px inset',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          border: '2px solid rgba(233,233,232,0.3)',
        }}
        className='py-3 px-4 w-[99%] sm:w-[95%] rounded-lg flex items-center justify-between relative'
      >
        <div className='flex items-center justify-start gap-0 w-[100%]  transition-all ease-in delay-100 duration-300'>
          {' '}
          <div className='-mr-8 lg:-mr-6'>
            {' '}
            <a href='/'>
              <img
                src={logo}
                alt='logo'
                className='cursor-pointer w-[7rem] xl:w-[8rem] 2xl:w-[9rem] mr-8'
              />
            </a>
          </div>
          <div className='cursor-pointer hidden md:flex font-semibold text-[#000000] md:text-[15px] lg:text-[16px] xl:text-[18px] text-center items-center justify-center hover:bg-[#FBFBFF] rounded-full 3xl:px-6  2xl:px-4 px-3 py-2 transition ease-in delay-100 duration-300  hover-shadow'>
            <span>Home</span>
          </div>
          <div className='cursor-pointer hidden md:flex font-semibold text-[#000000] md:text-[15px] lg:text-[16px] xl:text-[18px] text-center items-center justify-center hover:bg-[#FBFBFF] rounded-full 3xl:px-6 2xl:px-4 px-3 py-2 transition ease-in delay-100 duration-300  hover-shadow'>
            <span>About Us</span>
          </div>
          <div className='cursor-pointer hidden md:flex font-semibold text-[#000000] md:text-[15px] lg:text-[16px] xl:text-[18px] text-center items-center justify-center hover:bg-[#FBFBFF] rounded-full 3xl:px-6 2xl:px-4 px-3 py-2 transition ease-in delay-100 duration-300  hover-shadow'>
            <span>How It Works</span>
          </div>
          <div className='cursor-pointer hidden md:flex font-semibold text-[#000000] md:text-[15px] lg:text-[16px] xl:text-[18px] text-center items-center justify-center hover:bg-[#FBFBFF] rounded-full 3xl:px-6 2xl:px-4 px-3 py-2 transition ease-in delay-100 duration-300  hover-shadow'>
            <span>Contact Us</span>
          </div>
          <div className='cursor-pointer hidden md:flex font-semibold text-[#000000] md:text-[15px] lg:text-[16px] xl:text-[18px] text-center items-center justify-center hover:bg-[#FBFBFF] rounded-full 3xl:px-6 2xl:px-4 px-3 py-2 transition ease-in delay-100 duration-300  hover-shadow'>
            <span>FAQ</span>
          </div>
        </div>
        <div className='hidden lg:flex items-center justify-center gap-1 xl:gap-4 relative -left-4'>
          <div className='cursor-pointer text-xl text-white text-[14px] flex items-center justify-center relative'>
            <input
              type='text'
              className='border border-gray-300 bg-[#FEF5F0] inter rounded-full max-w-[4rem] xl:max-w-[6.3rem] 2xl:max-w-[13rem] placeholder:text-[16px] placeholder:mr-4 2xl:placeholder:mr-0 placeholder:text-gray-600 placeholder:relative placeholder:-top-[2px] px-4 py-[5px] outline-none text-gray-600 flex items-center justify-center'
              placeholder='Search Creator'
            />
            <CiSearch
              size={18}
              className='absolute right-2.5 top-[11px] text-gray-800 bg-inherit xl:bg-transparent'
            />
          </div>
          <img
            src={logo2}
            alt='logo'
            className='cursor-pointer w-[2.4rem] xl:w-[2.7rem] right-6'
          />
          <div className='flex items-center justify-start gap-2 xl:gap-4 '>
            {' '}
            {/* <a href='/' className='rainbow-button rounded-lg' alt='Log In'></a> */}{' '}
            <button
              size='sm'
              className='font-semibold w-5 bg-black text-white rounded-lg text-[15px] xl:text-[15px] mybutton'
            >
              {' '}
              Log In
            </button>
            <button
              size='sm'
              className='font-semibold w-5 bg-black text-white rounded-lg flex items-center justify-center gap-1 text-[15px] xl:text-[15px] mybutton'
            >
              <FaUserPlus /> Sign Up
            </button>
          </div>
        </div>
        <button
          onClick={() => setToggleMenu((prev) => !prev)}
          className='lg:hidden bg-white border-[2px] py-2.5 px-3 border-gray-300 rounded-lg text-black shadow-md hover:scale-105'
        >
          <RiMenuFill />
        </button>

        <div
          style={{
            background: 'rgba(255, 255, 255, 1)',
            borderRadius: '20px',
            boxShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 40px 0px inset',
            // backdropFilter: 'blur(5px)',
            // WebkitBackdropFilter: 'blur(5px)',
            border: '2px solid rgba(233,233,232,0.3)',
          }}
          className={`flex lg:hidden items-center justify-between min-w-fit top-20 left-0 z-10 absolute transition-all ease-in delay-100 duration-300 opacity-0 h-0 ${
            toggleMenu
              ? 'h-auto opacity-100 py-3 px-4 w-[90%] sm:w-full'
              : 'h-0 opacity-0 '
          }`}
        >
          {toggleMenu && (
            <div className='w-[80%]'>
              {' '}
              <div className='flex flex-col items-start gap-1'>
                <div className='font-semibold text-[#000000] text-[17px] xl:text-[18px] text-center flex items-center justify-center hover:bg-[#FBFBFF] rounded-full 3xl:px-6 2xl:px-4 xl:px-2 px-3 lg:px-1.5 py-2 transition ease-in delay-100 duration-300 cursor-default hover-shadow'>
                  <span>Home</span>
                </div>
                <div className='font-semibold text-[#000000] text-[17px] xl:text-[18px] text-center flex items-center justify-center hover:bg-[#FBFBFF] rounded-full 3xl:px-6 2xl:px-4 xl:px-2 px-3 lg:px-1.5 py-2 transition ease-in delay-100 duration-300 cursor-default hover-shadow'>
                  <span>About Us</span>
                </div>
                <div className='font-semibold text-[#000000] text-[17px] xl:text-[18px] text-center flex items-center justify-center hover:bg-[#FBFBFF] rounded-full 3xl:px-6 2xl:px-4 xl:px-2 px-3 lg:px-1.5 py-2 transition ease-in delay-100 duration-300 cursor-default hover-shadow'>
                  <span>How It Works</span>
                </div>
                <div className='font-semibold text-[#000000] text-[17px] xl:text-[18px] text-center flex items-center justify-center hover:bg-[#FBFBFF] rounded-full 3xl:px-6 2xl:px-4 xl:px-2 px-3 lg:px-1.5 py-2 transition ease-in delay-100 duration-300 cursor-default hover-shadow'>
                  <span>Contact Us</span>
                </div>
                <div className='font-semibold text-[#000000] text-[17px] xl:text-[18px] text-center flex items-center justify-center hover:bg-[#FBFBFF] rounded-full 3xl:px-6 2xl:px-4 xl:px-2 px-3 lg:px-1.5 py-2 transition ease-in delay-100 duration-300 cursor-default hover-shadow'>
                  <span>FAQ</span>
                </div>
              </div>
              <div className='flex items-center justify-start md:justify-center gap-6 my-2 flex-wrap'>
                <div className='cursor-pointer text-xl text-white text-[14px] flex items-center justify-center relative'>
                  <input
                    type='text'
                    className='border border-gray-300 bg-inherit rounded-full max-w-[13rem] placeholder:text-[16px] placeholder:mr-4 xl:placeholder:mr-0 placeholder:text-gray-600 placeholder:relative placeholder:-top-[2px] px-4 py-[5px] outline-none text-gray-600 flex items-center justify-center'
                    placeholder='Search Creator'
                  />
                  <CiSearch
                    size={18}
                    className='absolute right-2.5 top-[11px] text-gray-800 bg-inherit'
                  />
                </div>
                <img
                  src={logo2}
                  alt='logo'
                  className='cursor-pointer w-[2.4rem] xl:w-[2.7rem] right-6'
                />
                <div className='flex items-center justify-start gap-4 '>
                  {' '}
                  {/* <a href='/' className='rainbow-button rounded-lg' alt='Log In'></a> */}{' '}
                  <button className='font-semibold  bg-black text-white rounded-lg text-[15px] xl:text-[15px] mybutton'>
                    {' '}
                    Log In
                  </button>
                  <button
                    size='sm'
                    className='font-semibold  bg-black text-white rounded-lg flex items-center justify-center gap-2 text-[15px] xl:text-[15px] mybutton'
                  >
                    <FaUserPlus /> Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .hover-shadow:hover {
          box-shadow: rgba(17, 17, 26, 0.3) 0px -4px 6px 0px inset,
            rgba(17, 17, 26, 0.05) 0px 4px 32px 0px;
        }
        .my-shadow {
          box-shadow: rgba(17, 17, 26, 0.3) 0px -4px 6px 0px inset,
            rgba(17, 17, 26, 0.05) 0px 4px 32px 0px;
        }
      `}</style>
    </div>
  );
};

export default Header;
