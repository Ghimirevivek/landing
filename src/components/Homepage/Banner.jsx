import React from 'react';
import '../../index.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import img1 from '../../Assets/Frame 249.png';
import img2 from '../../Assets/Frame 247.png';
export function CardDefault() {
  return (
    <Card className='mt-6 w-96 rotate-6 z-10 glasseffect rounded-3xl'>
      <CardHeader className='relative h-auto my-6'>
        <img
          src={img1}
          alt='cardimage'
          className='w-full h-[25rem] rounded-3xl'
        />
      </CardHeader>
    </Card>
  );
}

export function CardDefault2() {
  return (
    <Card className='mt-6 w-96 -rotate-6 relative left-40 -top-10 rounded-3xl glasseffect'>
      <CardHeader className='relative h-auto my-6'>
        <img
          src={img1}
          alt='cardimage'
          className='w-full h-[15rem] rounded-3xl'
        />
      </CardHeader>
    </Card>
  );
}
const Banner = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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
              key={index}
              className='w-[120px] h-[120px] border hover-shadow'
            ></div>
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
