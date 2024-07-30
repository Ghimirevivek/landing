import React from 'react';
import '../../index.css';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import img1 from '../../Assets/Frame 249.png';
import imggif from '../../Assets/imagegif.gif';
import twitch from '../../Assets/twitch2.png';
import youtube from '../../Assets/youtube.png';
import insta from '../../Assets/insta.png';
import twitter from '../../Assets/twitter.png';
import twitter2 from '../../Assets/logos/twitter.png';
import ytgaming from '../../Assets/ytgaming.png';
import ytgaming2 from '../../Assets/logos/ytgaming.png';
import snapchat from '../../Assets/snapchat.png';
import snapchat2 from '../../Assets/logos/snapchat.png';
import facebook from '../../Assets/facebook.png';
import tiktok from '../../Assets/tiktok.png';
import tiktok2 from '../../Assets/logos/tiktok.png';
import BoxComponent from './BoxComponent';
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
            <BoxComponent
              key={index}
              image1={item.image1}
              image2={item.image2}
              text={item.text}
            />
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
