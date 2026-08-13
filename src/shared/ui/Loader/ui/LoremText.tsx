import clsx from 'clsx';

export const LoremText = ({
  text,
  className,
  style,
}: {
  text: string;
  className: string;
  style: React.CSSProperties;
}) => {
  return (
    <p
      style={style}
      className={clsx('absolute animate-text', className)}
    >
      {text}
    </p>
  );
};
