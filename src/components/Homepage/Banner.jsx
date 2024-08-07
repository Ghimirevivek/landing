import React from 'react';
import '../../index.css';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import img1 from '../../Assets/image 39.svg';
import imggif from '../../Assets/imagegif.gif';
import twitch from '../../Assets/twitch2.svg';
import youtube from '../../Assets/youtube.svg';
import insta from '../../Assets/insta.svg';
import twitter from '../../Assets/twitter.svg';
import twitter2 from '../../Assets/logos/twitter.svg';
import ytgaming2 from '../../Assets/ytgaming.svg';
import ytgaming from '../../Assets/logos/ytgaming.svg';
import snapchat from '../../Assets/snapchat.svg';
import snapchat2 from '../../Assets/logos/snapchat.svg';
import facebook from '../../Assets/facebook.svg';
import tiktok from '../../Assets/tiktok.svg';
import tiktok2 from '../../Assets/logos/tiktok.svg';
import BoxComponent from './BoxComponent';

export function CardDefault() {
  return (
    <Card
      style={{ background: 'rgba(226,226,226,0.3)' }}
      className='mt-6 w-[60%] sm:w-[75%] md:w-[90%] lg:w-[70%] 2lg:w-full xl:w-full lg max-w-[21.25rem] max-h-[23.25rem] sm:max-h-[27.25rem] mg:max-h-[29.25rem] absolute right-[0.5rem] sm:-right-[2rem] md:-right-[7rem] lg:-right-[1rem] rotate-6 glasseffect rounded-3xl'
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
          className='text-[20px] sm:text-[32px] lg:text-[30px] xl:text-[35px] allison relative top-0 mb-2'
        >
          “my wishlist is live on Creators Hub”
        </Typography>
        <div className='flex items-center justify-start gap-2'>
          {' '}
          <img src={insta} alt='cardimage' className='w-10' />
          <Typography
            color='black'
            className='text-[14px] sm:text-[16px] lg:text-[15px] xl:text-[16px] font-semibold tracking-wide inter relative top-0'
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
      className='relative right-[0rem] sm:right-[3rem] 2lg:right-[6rem]  mt-6 w-[80%] sm:w-[90%] md:w-full lg:w-[75%] 2lg:w-full xl:w-full max-w-[25rem] max-h-[16.62rem] sm:max-h-[19.62rem] -rotate-6  rounded-3xl glasseffect'
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
          className='text-[14px] sm:text-[16px] lg:text-[15px] xl:text-[16px] font-semibold tracking-wide inter relative top-0'
        >
          @NebulaNavigator
        </Typography>
      </CardBody>
    </Card>
  );
}
const Banner = () => {
  const array = [
    { image1: insta, image2: '', text: 'Instagram' },
    { image1: twitter, image2: twitter2, text: 'Twitter' },
    { image1: twitch, image2: '', text: 'Twitch' },
    { image1: '', image2: '', text: '' },
    { image1: '', image2: '', text: '' },
    { image1: youtube, image2: '', text: 'Youtube' },
    { image1: tiktok, image2: tiktok2, text: 'Tiktok' },
    { image1: ytgaming, image2: ytgaming2, text: 'YT Gaming' },
    { image1: '', image2: '', text: '' },
    { image1: snapchat, image2: snapchat2, text: 'Snapchat' },
    { image1: facebook, image2: '', text: 'Facebook' },
    { image1: '', image2: '', text: '' },
  ];

  console.log(array);
  return (
    <div className='py-6 sm:py-16 text-center sm:text-start px-4 w-full lg:w-[95%] mx-auto rounded-lg flex flex-col items-center justify-center'>
      <div className='text-[25px] sm:text-[40px] leading-tight'>
        <span className='italic font-medium'>Built for</span>
        <span className='text mx-2 text-[30px] sm:text-[40px]  text'>
          Creators
        </span>
        <span style={{ fontWeight: '800' }} className=''>
          of all platforms.
        </span>
      </div>
      <p className='text-[#606E80] text-[18px] sm:text-[20px] lg:mb-0 my-6 font-medium max-w-[45rem] text-center'>
        Now your fans can seamlessly and effortlessly show their support and
        appreciation of the content you work tirelessly to create on any of the
        platforms you create on.
      </p>
      <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-[75rem] py-[2rem] sm:py-[4rem] xl:py-[8rem]'>
        <div className='grid grid-cols-4 min-w-[320px] sm:min-w-[500px] lg:min-w-[400px] xl:min-w-[500px] shadow-lg'>
          {array.map((item, index) => (
            <BoxComponent
              key={index}
              image1={item.image1}
              image2={item.image2}
              text={item.text}
            />
          ))}
        </div>
        <div className='flex items-center justify-start relative my-10 top-10 lg:-top-4 lg:my-0'>
          {' '}
          <CardDefault2 />
          <CardDefault />
        </div>
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
