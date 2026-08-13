import clsx from 'clsx';

export const TrapezoidElement = ({
  className,
  text,
  style,
}: {
  className: string;
  text?: string;
  style: React.CSSProperties;
}) => {
  return (
    <div
      className='relative animate-trapezoid'
      style={style}
    >
      <span className='absolute z-100 left-7 text-zinc-950'>
        {text}
      </span>
      <div className={clsx('h-6 bg-mint/70', className)}></div>
    </div>
  );
};
