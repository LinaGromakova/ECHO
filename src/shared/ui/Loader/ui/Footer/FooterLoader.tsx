import { useEffect, useState } from 'react';
import { Radar } from './Radar/Radar';
const ARROWS = Array(8).fill(1);
export const FooterLoader = () => {
  const [prozent, setProzent] = useState<number | string>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const glitchChance = Math.random();
      if (glitchChance < 0.05) return setProzent('ERR');
      if (glitchChance < 0.1) return setProzent('NaN');
      if (glitchChance < 0.15) return setProzent('999');
      setProzent((prev) => {
        if (typeof prev === 'string') return Math.floor(Math.random() * 101);
        const step = Math.floor(Math.random() * 25);
        const next = prev + step;
        return next >= 100 ? 0 : next;
      });
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className='flex justify-between mb-6 relative'>
      <div className='flex items-center'>
        <div className='border-mint/20 border-5 p-5 animate-cyber-corners'>
          <div className='flex justify-between text-mint/50 text-xs'>
            <div className='space-y-1.5'>
              <p className='animate-cyber-1'>READING</p>
              <p className='animate-cyber-2'>FNS (2-1)</p>
              <p className='animate-cyber-3'>SYS</p>
            </div>
            <div className='space-y-1.5 text-right'>
              <p className='animate-cyber-1'>{prozent}%</p>
              <p className='animate-cyber-2'>UPDATED</p>
              <p className='animate-cyber-3'>STABLE</p>
            </div>
          </div>
          <div className='flex my-5 text-yellow animate-translate-x'>
            {ARROWS.map((_, idx) => {
              const delay = idx * 0.15 + 2 + 's';
              return (
                <div
                  style={{ animationDelay: delay, animationDuration: '1s' }}
                  key={idx}
                  className='text-6xl -mr-2 font-extrabold last:-mr-30 text-shadow-md text-shadow-yellow last:px-12 animate-pulse-visible-show'
                >
                  {'>'}
                </div>
              );
            })}
          </div>
          <div
            className='flex items-center mt-4 animate-visibility-show '
            style={{ animationDelay: '2.4s' }}
          >
            <p className='text-lg tracking-wide animate-neon-hum'>
              SYSTEM ONLINE
            </p>
            <div
              className='bg-mint shadow-mint/60 shadow-md inline-block
              w-3 h-3 outline-mint/50 outline outline-offset-4 ml-4 animate-pulse'
            ></div>
          </div>
        </div>
      </div>
      <div className='relative flex items-end'>
        <div
          className='flex items-end mr-24 '
          style={{ animationDelay: '0.5s' }}
        >
          <div className='w-55 h-32 space-y-3 bg-mint mr-10 text-zinc-950 py-4 px-4 font-bold text-xs animate-scale-show'>
            <p>
              PACKET_LOSS: <span className='animate-boot'>ERR%</span>
            </p>
            <p>SYS_MNT_77</p>
          </div>
          <div
            style={{ animationDelay: '0.9s' }}
            className='w-55 h-32 border-mint/60 border-4 font-bold text-xs p-4 text-mint/80 space-y-3 animate-scale-show'
          >
            <p className='animate-neon-hum'>ZONE</p>
            <p className='animate-neon-hum'>[ EXT_01 ]</p>
            <p>
              <span className='animate-boot text-shadow-2xs text-shadow-mint mr-2'>
                ▶
              </span>
              <span className='animate-neon-hum'>LIVE</span>
            </p>
          </div>
        </div>
        <Radar />
      </div>
      <div
        className='w-3/4 absolute bg-mint/10 -bottom-16 h-6 animate-line-scale-x'
        style={{ animationDelay: '1s', animationDuration: '1s' }}
      ></div>
    </footer>
  );
};
