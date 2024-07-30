import React from 'react';
import mapVideo from '../../Assets/MinimalVideo.mp4';
import minimalgif from '../../Assets/minimalgif.gif';
const VideoBanner = () => {
  return (
    <div className='w-full h-full '>
      {/* <img src={minimalgif} alt='circuit' className='w-full' /> */}
      <video
        autoPlay
        loop
        muted
        className=' w-full h-[900px] overflow-hidden shadow-none'
      >
        <source
          src={mapVideo}
          type='video/mp4'
          className='bg-transparent border-none'
        />
        Your browser does not support the video tag.
      </video>
      <div className=''></div>
    </div>
  );
};

export default VideoBanner;
