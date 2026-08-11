import { TrapezoidList } from './TrapezoidList/TrapezoidList';

interface ListElemetsInterface {
  className: string;
  text?: string;
}
const listElements: ListElemetsInterface[] = [
  { className: '-skew-x-62 w-xl', text: 'NET_CONNECTING...' },
  { className: 'w-3 -skew-x-62 bg-yellow' },
  { className: 'w-53 -skew-x-62 ' },
  { className: 'w-53 bg-yellow', text: '[0x00F3A]' },
];
export const StatusBlock = () => {
  return (
    <div className='flex justify-between'>
      <div className='mt-2.5'>
        <span className='text-yellow text-shadow-md text-shadow-yellow'>
          STATUS
        </span>
        <div className='font-bold mt-1 px-2 py-0.5 tracking-wide text-lg  bg-yellow/80 ml-0 relative text-zinc-950'>
          Loading...
        </div>
      </div>
      <TrapezoidList listElements={listElements}></TrapezoidList>
    </div>
  );
};
