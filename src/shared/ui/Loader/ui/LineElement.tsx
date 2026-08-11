import clsx from 'clsx';

export const LineElement = ({ className }: { className: string }) => {
  return (
    <div className={clsx('absolute bg-mint shadow-mint', className)}></div>
  );
};
