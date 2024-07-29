import React from 'react';
import '../../index.css';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import img1 from '../../Assets/Frame 249.png';
import imggif from '../../Assets/imggif.gif';
import twitch from '../../Assets/twitch2.png';
import insta from '../../Assets/insta.png';
import ytgaming from '../../Assets/ytgaming.png';
import snapchat from '../../Assets/snapchat.png';
import { FaSnapchat } from 'react-icons/fa';
import { BsSnapchat } from 'react-icons/bs';
export function CardDefault() {
  return (
    <Card
      style={{ background: 'rgba(226,226,226,0.3)' }}
      className='mt-6 w-[23.25rem] h-[29.25] rotate-6 z-10 glasseffect rounded-3xl'
    >
      <CardHeader className='relative h-auto my-6'>
        <img
          src={img1}
          alt='cardimage'
          className='w-full h-[20rem] rounded-2xl'
        />
      </CardHeader>
      <CardBody className='px-4 py-2 m-0 relative -top-2'>
        {' '}
        <Typography
          color='black'
          className='text-[37px] allison relative top-0 mb-2'
        >
          “my wishlist is live on Creators Hub”
        </Typography>
        <div className='flex items-center justify-start gap-2'>
          {' '}
          <img src={insta} alt='cardimage' className='w-10' />
          <Typography
            color='black'
            className='font-semibold tracking-wide inter relative top-0'
          >
            @VogueVoyager
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

export function CardDefault2() {
  return (
    <Card
      style={{ background: 'rgba(226,226,226,0.3)' }}
      className='mt-6 w-[30rem] h-[346px] -rotate-6 relative left-[10rem] -top-4 rounded-3xl glasseffect'
    >
      <CardHeader className='relative h-auto my-6'>
        <img
          src={imggif}
          alt='cardimage'
          className='w-full h-[15rem] rounded-2xl'
        />
      </CardHeader>
      <CardBody className='px-4 py-2 m-0 flex items-center justify-start gap-2 relative -top-2'>
        {' '}
        <img src={twitch} alt='cardimage' className='w-10 rotate-[5deg]' />
        <Typography
          color='black'
          className='font-semibold tracking-wide inter relative top-0'
        >
          @NebulaNavigator
        </Typography>
      </CardBody>
    </Card>
  );
}
const Banner = () => {
  const array = Array(12).fill({ image: insta });

  console.log(array);
  return (
    <div className='py-16 px-4 w-[95%] mx-auto rounded-lg flex flex-col items-center justify-center'>
      <div className='text-[40px] leading-tight'>
        <span className='italic font-medium'>Built for</span>
        <span className='text mx-2 important-text text'>Creators</span>
        <span style={{ fontWeight: '800' }} className=''>
          of all platforms.
        </span>
      </div>
      <p className='text-[#606E80] text-[20px] mt-6 font-medium max-w-[45rem] text-center'>
        Now your fans can seamlessly and effortlessly show their support <br />{' '}
        and appreciation of the content you work tirelessly to create on any{' '}
        <br /> of the platforms you create on.
      </p>
      <div className='flex items-center justify-between w-full'>
        <div className='grid grid-cols-4'>
          {array.map((item, index) => (
            <div
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.20) 1px 1px 40px 0px inset',
              }}
              key={index}
              className='w-[120px] h-[120px] border hover-shadow flex items-center justify-center group transition-all delay-100 duration-300 ease-in-out'
            >
              <img
                src={snapchat}
                alt='cardimage'
                className='w-12 hidden group-hover:block'
              />
              <BsSnapchat
                size={35}
                className='text-gray-700 group-hover:hidden'
              />
            </div>
          ))}
        </div>

        <CardDefault2 />
        <CardDefault />
      </div>
      <style jsx>{`
        .hover-shadowbox:hover {
          box-shadow: inset rgba(60, 70, 85, 0.5) 0px 0px 40px 0px,
            rgba(0, 0, 0, 0.3) 0px 30px 100px -24px;
        }
      `}</style>
    </div>
  );
};

export default Banner;
