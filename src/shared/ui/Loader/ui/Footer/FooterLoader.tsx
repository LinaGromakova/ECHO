import { Radar } from './Radar/Radar';
const ARROWS = Array(8).fill(1);
export const FooterLoader = () => {
  return (
    <footer className='flex justify-between mb-6 relative'>
      <div className='flex items-center'>
        <div className='border-mint/20 border-5 p-5'>
          <div className='flex justify-between text-mint/50 text-xs'>
            <div className='space-y-1.5'>
              <p>READING</p>
              <p>FNS (2-1)</p>
              <p>SYS</p>
            </div>
            <div className='space-y-1.5'>
              <p className='text-mint text-shadow-md text-shadow-mint'>100%</p>
              <p>UPDATED</p>
              <p>STABLE</p>
            </div>
          </div>
          <div className='flex my-5 text-yellow'>
            {ARROWS.map((_, idx) => (
              <div
                key={idx}
                className='text-6xl -mr-2 font-extrabold last:-mr-30 last:text-shadow-md last:text-shadow-yellow last:px-12'
              >
                {'>'}
              </div>
            ))}
          </div>
          <div className='flex items-center mt-4'>
            <p className='text-lg tracking-wide'>SYSTEM ONLINE</p>
            <div
              className='bg-mint shadow-mint/60 shadow-md inline-block
              w-3 h-3 outline-mint/50 outline outline-offset-4 ml-4'
            ></div>
          </div>
        </div>
      </div>
      <div className='relative flex items-end'>
        <div className='flex items-end mr-24'>
          <div className='w-50 h-32 space-y-3 bg-mint mr-10 text-zinc-950 p-4 font-bold text-xs'>
            <p> PACKET_LOSS: 0%</p>
            <p>SYS_MNT_77</p>
          </div>
          <div className='w-50 h-32 border-mint/60 border-4 font-bold text-xs p-4 text-mint/80 space-y-3'>
            <p>ZONE</p>
            <p>[ EXT_01 ]</p>
            <p>
              <span className='animate-pulse text-shadow-2xs text-shadow-mint mr-2'>
                ▶
              </span>
              LIVE
            </p>
          </div>
        </div>
        <Radar />
      </div>
      <div className='w-3/4 absolute bg-mint/10 -bottom-16 h-6'></div>
    </footer>
  );
};
