const STEPS = Array(6).fill(null);
export const StepIndicator = () => {
  return (
    <div className='flex space-x-2.5 my-12'>
      {STEPS.map((_, idx) => {
        const delay = idx / 3 + 0.05 + 's';
        return (
          <div
            key={idx}
            style={{ animationDelay: delay }}
            className='w-3 h-9 bg-mint border border-mint animate-visibility-show-short animate-step'
          ></div>
        );
      })}
    </div>
  );
};
