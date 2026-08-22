import { MatrixRain } from './lib/MatrixRain';

const STEPS = Array(5).fill(1);
export const MatrixWindow = () => {
  return (
    <div
      className='bg-black w-1/5 h-55 absolute animate-window-matrix
      shadow-[0_0_15px_rgba(var(--mint-rgb),0.3)]
      z-5 top-[38%] right-1/4  outline-yellow outline-2'
    >
      <div className='absolute w-1/4 h-3 -top-1.5 left-[35%] z-20 shadow-lg shadow-yellow/90'></div>
      <div className='w-1/4 h-3 -top-1.5 left-[35%] z-10 bg-yellow [clip-path:polygon(100%_100%,0%_100%,10%_0%,90%_0%)] absolute'></div>
      <div className='w-10 bg-zinc-950 bg-[linear-gradient(rgba(45,212,191,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.15)_1px,transparent_1px)] bg-size-[28px_28px] h-1/2 -bottom-0.5 -left-0.5 z-100 absolute border-t-2 border-r-2 border-yellow bg-fixed'>
        {STEPS.map((_, idx) => (
          <div
            key={idx}
            className='w-11/12 h-2.5 bg-yellow my-1.5 shadow-lg shadow-yellow/70'
          ></div>
        ))}
      </div>
      <div className='absolute w-7 h-7 shadow-xl shadow-yellow right-0 bottom-4'></div>
      <div
        className='absolute z-100 w-7 h-7 filter cyber-grid-container
        [clip-path:polygon(100%_0%,0%_0%,100%_100%)] -top-1 -right-1 border-yellow
        before:block before:absolute before:w-0.5 before:h-full before:bg-yellow before:z-120
        before:top-[-0.5px] before:right-2.5 before:-rotate-45 bg-fixed'
      ></div>
      <div
        className='absolute z-100 w-7 h-7 cyber-grid-container filter
        [clip-path:polygon(0%_0%,0%_100%,100%_100%)] -bottom-1 left-8.75 before:block before:absolute before:w-0.5 before:h-[120%] before:-rotate-45 before:bg-yellow before:-top-0.5 before:right-3.75 before:z-120 bg-fixed'
      ></div>
      <div
        className='absolute z-100 w-7 h-7 bg-yellow filter [clip-path:polygon(0%_100%,100%_0%,100%_100%)]
         right-1 bottom-1'
      ></div>
      <MatrixRain
        color='#ffd300'
        fontSize={12}
        speed={70}
      />
      <div className='w-1/3 h-2 -bottom-1 left-1/3 bg-yellow absolute z-10 shadow-md shadow-yellow/70'></div>
    </div>
  );
};
