import { TrapezoidList } from '../TrapezoidList/TrapezoidList';
import { listElements } from './constants/listElements';

export const StatusBlock = () => {
  return (
    <div className='flex justify-between '>
      <div className='mt-2.5 animate-visibility-show '>
        <span className='text-yellow text-shadow-md text-shadow-yellow animate-neon-hum-alt'>
          STATUS
        </span>
        <div
          className='font-bold mt-1 px-2 py-0.5 tracking-wide text-lg
         bg-yellow/80 ml-0 relative text-zinc-950 w-30 animate-dotted'
        >
          Loading
        </div>
      </div>
      <TrapezoidList listElements={listElements}></TrapezoidList>
    </div>
  );
};
