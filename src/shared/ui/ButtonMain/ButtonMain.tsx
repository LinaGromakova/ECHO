import clsx from 'clsx';

interface ButtonMainProps {
  text: string;
  className?: string;
  onClickHandler: () => void;
}
const ButtonMain = ({ text, className, onClickHandler }: ButtonMainProps) => {
  return (
    <button
      className={clsx('cursor-pointer bg-mint/80 px-4 py-1', className)}
      onClick={() => onClickHandler()}
    >
      {text}
    </button>
  );
};
export default ButtonMain;
