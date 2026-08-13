import clsx from 'clsx';

export const LineElement = ({
  className,
  style,
}: {
  className: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      style={style}
      className={clsx(
        'absolute bg-mint shadow-mint',
        className,
      )}
    ></div>
  );
};
