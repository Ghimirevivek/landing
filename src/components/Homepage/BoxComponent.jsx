import { Typography } from '@material-tailwind/react';
import React, { useState } from 'react';

const BoxComponent = ({ image1, image2, text, index }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className=''>
      {text || image1 || image2 ? (
        <div>
          {' '}
          {image2 ? (
            <div
              style={{
                borderImage:
                  index === 6
                    ? 'linear-gradient(to bottom, #dee2e6, transparent) 1'
                    : index === 7
                    ? 'linear-gradient(to left, #dee2e6, transparent) 1'
                    : 'none',
                position: 'relative', // Ensure the images are positioned correctly
              }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={`${index === 6 ? 'border-r' : 'border-0'} ${
                index === 7 ? 'border-r' : 'border-0'
              } min-w-[80px] sm:min-w-[120px] h-[80px] sm:min-h-[120px] lg:min-h-[100px] xl:min-h-[120px] lg:min-w-[100px] xl:min-w-[120px] hoverbox  group transition-all delay-50 duration-500 flex flex-col items-center justify-center`}
            >
              <img
                src={image1}
                alt='cardimage1'
                className={`w-7 sm:w-12 transition-all delay-100 duration-500 ${
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
                className={`w-7 sm:w-12 absolute transition-all delay-50 duration-500 ${
                  hovering ? 'opacity-5 ' : 'opacity-100'
                }`}
                style={{
                  top: '35%',
                  left: '29.5%',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              />
              <Typography
                className={` transition-all duration-500 font-semibold text-[13px] sm:text-[16px] ${
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
                // borderImage: 'linear-gradient(to right, gray, transparent) 1',
              }}
              className={`border-y-[3px] min-w-[80px] sm:min-w-[120px] h-[80px] sm:min-h-[120px] lg:min-h-[100px] xl:min-h-[120px] lg:min-w-[100px] xl:min-w-[120px]  flex flex-col items-center justify-center gap-2`}
            >
              <img
                src={image1}
                alt='cardimage1'
                className={`w-5 sm:w-9`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              />

              <Typography
                className={`font-semibold text-[13px] sm:text-[16px]`}
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
          style={{
            borderImage:
              index === 3
                ? 'linear-gradient(to top, #dee2e6, transparent) 1'
                : index === 4
                ? 'linear-gradient(to left, #dee2e6, transparent) 1'
                : index === 8
                ? 'linear-gradient(to bottom, #dee2e6, transparent) 1'
                : index === 11
                ? 'linear-gradient(to bottom, #dee2e6, transparent) 1'
                : 'none',
            // boxShadow: 'rgba(0, 0, 0, 0.10) 1px 1px 40px 0px inset',
          }}
          className={`${index === 3 ? 'border-b border-r' : 'border-0'} ${
            index === 4 ? 'border-b' : 'border-0'
          } ${index === 8 ? 'border-r' : 'border-0'} ${
            index === 11 ? 'border-t border-r' : 'border-0'
          } min-w-[80px] sm:min-w-[120px] h-[80px] sm:min-h-[120px] lg:min-h-[100px] xl:min-h-[120px] lg:min-w-[100px] xl:min-w-[120px]  flex flex-col items-center justify-center gap-2`}
        ></div>
      )}
    </div>
  );
};

export default BoxComponent;
