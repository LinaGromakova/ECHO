import { TrapezoidList } from '../TrapezoidList/TrapezoidList';
import { trapezoidListHeader } from './constants/trapezoids';
import ArrowIcon from './assets/Arrow.svg?react';

export const HeaderLoader = ({
  userName,
}: {
  userName: string | undefined;
}) => {
  return (
    <header className='uppercase'>
      <div className='flex justify-between'>
        <div className='flex mb-5 items-center'>
          <h4 className='text-2xl tracking-wider text-shadow-mint/50 text-yellow '>
            User: {userName ?? 'UNKNOWN'}
          </h4>
          <div className='text-lg text-zinc-950 bg-yellow inline-block ml-7 p-1 max-h-6 shadow-xs shadow-yellow'>
            <p className='-mt-1.5 font-orbitron pl-3'>01</p>
          </div>
        </div>
        <ArrowIcon></ArrowIcon>
        <div>
          <div className='w-56 h-px bg-mint/70'></div>
        </div>
        <div className='flex'>
          <div className='w-12 h-px bg-mint/50 mr-7'></div>
          <div className='w-12 h-px bg-mint shadow-sm shadow-mint'></div>
        </div>
        <div></div>
      </div>
      <TrapezoidList listElements={trapezoidListHeader} />
    </header>
  );
};
