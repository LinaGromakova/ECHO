const LINES = Array(7).fill(null);
export const RectangleLine = () => {
  return (
    <div className='absolute left-5 top-1/3 space-y-2'>
      {LINES.map((_, idx) => {
        const delay = idx * 0.15 + 's';
        return (
          <div
            key={idx}
            style={{
              animationDelay: delay,
              height: `${(idx + 3) * 4}px`,
            }}
            className='w-4 bg-mint animate-pulse-visible-show'
          ></div>
        );
      }).reverse()}
    </div>
  );
};
