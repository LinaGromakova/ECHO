import clsx from 'clsx';
import { BORDERS } from './constants/borders';

export const CenterLoader = () => {
  return (
    <main className='mt-10 relative inline-block w-fit'>
      {BORDERS.map((border, idx) => (
        <div
          key={idx}
          className={clsx('absolute w-4 h-4', border)}
        ></div>
      ))}
      <h3 className='text-6xl tracking-[12px] relative p-8 inline-block'>
        <span className='text-mint/65'>{'>'}</span>
        <span className='text-shadow-md text-shadow-mint/70 text-mint/70'>
          SIGNAL
        </span>
        <span className='text-shadow-lg text-shadow-mint'> SETTING_</span>
      </h3>
    </main>
  );
};
