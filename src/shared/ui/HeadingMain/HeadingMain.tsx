import clsx from 'clsx';

interface HeadingMainProps {
  title: string;
  className?: string;
}
const HeadingMain = ({ title, className }: HeadingMainProps) => {
  return <h3 className={clsx('text-center', className)}>{title}</h3>;
};
export default HeadingMain;
