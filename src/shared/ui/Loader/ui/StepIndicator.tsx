export const StepIndicator = ({ size }: { size: number }) => {
  const arr = Array(size).fill(null);
  return (
    <div className='flex space-x-2.5 my-12'>
      {arr.map((_, idx) => {
        return (
          <div
            key={idx}
            className='w-3 h-9 bg-mint border border-mint'
          ></div>
        );
      })}
    </div>
  );
};
