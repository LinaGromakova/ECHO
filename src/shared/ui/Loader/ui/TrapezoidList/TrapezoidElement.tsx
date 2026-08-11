import clsx from 'clsx';

export const TrapezoidElement = ({
  className,
  text,
}: {
  className: string;
  text?: string;
}) => {
  return (
    <div className='relative'>
      <span className='absolute z-100 left-7 text-zinc-950'>{text}</span>
      <div className={clsx('h-6 bg-mint/70', className)}></div>
    </div>
  );
};
