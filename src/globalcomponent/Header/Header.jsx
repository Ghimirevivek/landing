import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaUserPlus } from 'react-icons/fa';
import logo from '../../Assets/logo.png';
import logo2 from '../../Assets/Frame 136.png';
import HeaderSvg from '../../Assets/header-gradient.svg';
import './Header.css';

const Header = () => {
  return (
    <div className='bg-transparent w-full min-h-[10rem] flex items-center justify-center relative'>
      <img
        src={HeaderSvg}
        alt='logo'
        className='cursor-pointer w-full absolute top-0'
      />
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
        className='py-3 px-4 w-[93%] rounded-lg flex items-center justify-between min-w-fit'
      >
        <div className='flex items-center justify-center gap-0 transition-all ease-in delay-100 duration-300'>
          {' '}
          <div>
            {' '}
            <a href='/'>
              <img
                src={logo}
                alt='logo'
                className='cursor-pointer w-[9rem] mr-8'
              />
            </a>
          </div>
          <div className='font-semibold text-[#000000] text-[18px] text-center flex items-center justify-center hover:bg-[#FBFBFF] rounded-full 2xl:px-6 px-4 py-2 transition ease-in delay-100 duration-300 cursor-default hover-shadow'>
            <span>Home</span>
          </div>
          <div className='font-semibold text-[#000000] text-[18px] text-center flex items-center justify-center hover:bg-[#FBFBFF] rounded-full 2xl:px-6 px-4 py-2 transition ease-in delay-100 duration-300 cursor-default hover-shadow'>
            <span>About Us</span>
          </div>
          <div className='font-semibold text-[#000000] text-[18px] text-center flex items-center justify-center hover:bg-[#FBFBFF] rounded-full 2xl:px-6 px-4 py-2 transition ease-in delay-100 duration-300 cursor-default hover-shadow'>
            <span>How It Works</span>
          </div>
          <div className='font-semibold text-[#000000] text-[18px] text-center flex items-center justify-center hover:bg-[#FBFBFF] rounded-full 2xl:px-6 px-4 py-2 transition ease-in delay-100 duration-300 cursor-default hover-shadow'>
            <span>Contact Us</span>
          </div>
          <div className='font-semibold text-[#000000] text-[18px] text-center flex items-center justify-center hover:bg-[#FBFBFF] rounded-full 2xl:px-6 px-4 py-2 transition ease-in delay-100 duration-300 cursor-default hover-shadow'>
            <span>FAQ</span>
          </div>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <div className='cursor-pointer text-xl text-white text-[14px] flex items-center justify-center'>
            <input
              type='text'
              className='border border-gray-300 bg-[#FEF5F0] rounded-full max-w-[13rem] placeholder:text-[16px] placeholder:text-gray-600 placeholder:relative placeholder:-top-[2px] px-4 py-[5px] outline-none text-gray-600 flex items-center justify-center'
              placeholder='Search Creator'
            />
            <CiSearch
              size={18}
              className='relative right-7 top-[2px] text-gray-800'
            />
          </div>
          <img
            src={logo2}
            alt='logo'
            className='cursor-pointer w-[2.7rem] relative right-6'
          />
          <div className='flex items-center justify-center gap-4 '>
            {' '}
            {/* <a href='/' className='rainbow-button rounded-lg' alt='Log In'></a> */}{' '}
            <button className='font-semibold  bg-black text-white rounded-lg text-[15px] mybutton'>
              {' '}
              Log In
            </button>
            <button
              size='sm'
              className='font-semibold  bg-black text-white rounded-lg flex items-center justify-center gap-1 text-[15px] mybutton'
            >
              <FaUserPlus /> Sign Up
            </button>
          </div>
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
