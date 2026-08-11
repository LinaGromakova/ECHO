const STEPS = Array(6).fill(null);
export const StepIndicator = () => {
  return (
    <div className='flex space-x-2.5 my-12'>
      {STEPS.map((_, idx) => (
        <div
          key={idx}
          className='w-3 h-9 bg-mint border border-mint'
        ></div>
      ))}
    </div>
  );
};
