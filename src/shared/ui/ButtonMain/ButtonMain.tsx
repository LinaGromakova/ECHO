import clsx from 'clsx';

interface ButtonMainProps {
  text: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClickHandler: () => void;
}
const ButtonMain = ({
  text,
  type,
  className,
  onClickHandler,
}: ButtonMainProps) => {
  return (
    <button
      type={type}
      className={clsx('cursor-pointer bg-mint/80 px-4 py-1', className)}
      onClick={() => onClickHandler()}
    >
      {text}
    </button>
  );
};
export default ButtonMain;
