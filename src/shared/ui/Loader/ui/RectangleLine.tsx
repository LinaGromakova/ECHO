const LINES = Array(7).fill(null);
export const RectangleLine = () => {
  return (
    <div className='absolute left-5 top-1/3 space-y-2'>
      {LINES.map((_, idx) => (
        <div
          key={idx}
          style={{
            height: `${(idx + 1) * 4}px`,
            opacity: (idx + 1) * 0.1,
          }}
          className='w-4 bg-mint'
        ></div>
      )).reverse()}
    </div>
  );
};
