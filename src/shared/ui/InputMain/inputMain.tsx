import clsx from 'clsx';

interface InputMainProps {
  type: 'text' | 'password' | 'email';
  className?: string;
}
const InputMain = ({ type, className }: InputMainProps) => {
  return (
    <input
      type={type}
      className={clsx('block bg-white my-4', className)}
    />
  );
};
export default InputMain;
