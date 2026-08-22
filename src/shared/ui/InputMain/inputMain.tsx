import clsx from 'clsx';
import type { ChangeEvent } from 'react';
interface InputMainProps {
  type: 'text' | 'password' | 'email';
  className?: string;
  name: string;
  value: string;
  label?: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
}
const InputMain = ({
  label,
  type,
  className,
  value,
  name,
  onChangeHandler,
}: InputMainProps) => {
  return (
    <label>
      {label}
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChangeHandler(e)}
        className={clsx('block bg-white my-4 text-black', className)}
      />
    </label>
  );
};
export default InputMain;
