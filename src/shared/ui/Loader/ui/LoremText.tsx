import clsx from 'clsx';

export const LoremText = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return <p className={clsx('absolute animate-pulse', className)}>{text}</p>;
};
