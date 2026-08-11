import clsx from 'clsx';

export const RectangleLine = ({ size }: { size: number }) => {
  const arr = Array(size).fill(null);
  return (
    <div className='absolute left-5 top-1/3 space-y-2'>
      {arr
        .map((_, idx) => {
          const height = idx + 1;
          return (
            <div
              key={idx}
              style={{
                opacity: (idx + 1) * 0.1,
              }}
              className={clsx(`w-4 bg-mint`, `h-${height}`)}
            ></div>
          );
        })
        .reverse()}
    </div>
  );
};
