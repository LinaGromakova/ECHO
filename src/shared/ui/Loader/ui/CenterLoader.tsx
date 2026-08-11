import clsx from 'clsx';

export const CenterLoader = () => {
  const BORDERS = [
    'top-0 border-t-2 border-l-2 border-t-mint border-l-mint',
    'bottom-0 border-b-2 border-l-2 border-b-mint border-l-mint',
    'border-t-2 border-r-2 border-t-mint border-r-mint top-0 right-0',
    'border-r-2 border-b-2 border-b-mint border-r-mint bottom-0 right-0',
  ];
  return (
    <main className='mt-10 relative inline-block w-fit'>
      {BORDERS.map((border, idx) => {
        return (
          <div
            key={idx}
            className={clsx('absolute w-4 h-4', border)}
          ></div>
        );
      })}
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
