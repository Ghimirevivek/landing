import { Typography } from '@material-tailwind/react';
import React, { useState } from 'react';

const BoxComponent = ({ image1, image2, text }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      {text || image1 || image2 ? (
        <div>
          {' '}
          {image2 ? (
            <div
              style={{
                // boxShadow: 'rgba(0, 0, 0, 0.10) 1px 1px 40px 0px inset',
                position: 'relative', // Ensure the images are positioned correctly
              }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className='w-[120px] hoverbox h-[120px] border group transition-all delay-50 duration-500 flex flex-col items-center justify-center'
            >
              <img
                src={image1}
                alt='cardimage1'
                className={`w-12 transition-all delay-100 duration-500 ${
                  hovering
                    ? 'opacity-100 transform -translate-y-1'
                    : 'opacity-0'
                }`}
                style={{
                  top: '29%',
                  left: '28%',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              />
              <img
                src={image2}
                alt='cardimage2'
                className={`w-12 absolute transition-all delay-50 duration-500 ${
                  hovering ? 'opacity-5 ' : 'opacity-100'
                }`}
                style={{
                  top: '35%',
                  left: '29.5%',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              />
              <Typography
                className={` transition-all duration-500 font-semibold ${
                  hovering ? 'opacity-100 delay-300' : 'opacity-0'
                }`}
                style={{
                  top: '55%',
                  left: '20%',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              >
                {text}
              </Typography>
            </div>
          ) : (
            <div
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.06) 1px 1px 40px 0px inset',
              }}
              className='w-[120px] h-[120px] border flex flex-col items-center justify-center gap-2'
            >
              <img
                src={image1}
                alt='cardimage1'
                className={`w-9`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              />

              <Typography
                className={`font-semibold `}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              >
                {text}
              </Typography>
            </div>
          )}
        </div>
      ) : (
        <div
          style={
            {
              // boxShadow: 'rgba(0, 0, 0, 0.10) 1px 1px 40px 0px inset',
            }
          }
          className='w-[120px] h-[120px] border flex flex-col items-center justify-center gap-2'
        ></div>
      )}
    </>
  );
};

export default BoxComponent;
