import clsx from 'clsx';

const CircleButton = ({
  className,
  handlerClick,
  content,
}: {
  className?: string;
  handlerClick: () => void;
  content: string | React.ReactNode;
}) => {
  return (
    <button
      type='button'
      className={clsx(
        'w-10 h-10 rounded-full text-xl bg-mint absolute top-5 left-5 cursor-pointer',
        className,
      )}
      onClick={() => handlerClick()}
    >
      {content}
    </button>
  );
};
export default CircleButton;
