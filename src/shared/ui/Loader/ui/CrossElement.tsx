import clsx from 'clsx';
const classLine = `relative w-68 h-px bg-linear-to-l from-white/20 via-white/60 from-35% to-75%  to-white/20
        before:block before:absolute before:-bottom-1 before:right-0 before:w-2 before:h-2 before:rounded-full before:bg-white/40 
         after:block after:absolute after:-top-1 after:left-0 after:w-2 after:h-2 after:rounded-full after:bg-white/40`;
export const CrossElement = ({ className }: { className: string }) => {
  return (
    <div className={clsx('absolute opacity-30 animate-rotate-show', className)}>
      <div className={clsx('rotate-45', classLine)}>
        <div
          className='w-7 h-7 bg-white/20  rounded-full  -bottom-3.5 -right-2.5 absolute outline-1 outline-offset-4
           outline-white/40 animate-ping'
        ></div>
      </div>
      <div className={clsx('-rotate-45', classLine)}></div>
    </div>
  );
};
