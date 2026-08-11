import clsx from 'clsx';

export const RectangleGradient = ({ className }: { className: string }) => {
  return (
    <div
      className={clsx(
        'absolute bg-[repeating-linear-gradient(140deg,rgba(255,211,0,0.15),rgba(4255,211,0,0.15)_10px,transparent_10px,transparent_20px)]',
        className,
      )}
    ></div>
  );
};
