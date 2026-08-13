import clsx from 'clsx';
import { TARGETS } from './constants/targets';
import { CIRCLES } from './constants/circles';

export const Radar = () => {
  return (
    <div className='w-42 h-42 mb-7.5 border outline-dashed border-mint/50 rounded-full outline-3 outline-offset-30 bg-mint/10 outline-mint/50 relative flex justify-center items-center animate-radar'>
      <div className='absolute h-px w-[140%] bg-mint/50'></div>
      <div className='absolute h-px w-[140%] bg-mint/50 rotate-90 top-1/2'></div>
      {TARGETS.map((target, idx) => (
        <div
          key={idx}
          className={clsx(
            'w-1 h-1 absolute rounded-full  bg-mint shadow-mint shadow-xs animate-ping outline-1 outline-offset-4 outline-mint/20',
            target,
          )}
        ></div>
      ))}
      <div className='absolute bottom-1/2 left-1/2 w-1/2 h-1/2 origin-bottom-left bg-linear-to-tl from-mint/70 via-mint/20 to-transparent rounded-tr-full animate-spin [animation-duration:1.5s]'></div>
      <div className='absolute w-full h-full flex justify-center items-center'>
        {CIRCLES.map((circle, idx) => (
          <div
            key={idx}
            className={clsx(
              'border border-mint/50 rounded-full absolute flex justify-center items-center',
              circle,
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};
