import { CenterLoader } from './ui/CenterLoader';
import { CrossElement } from './ui/CrossElement';
import { FooterLoader } from './ui/Footer/FooterLoader';
import { LineElement } from './ui/LineElement';
import { LoremText } from './ui/LoremText';
import { MatrixWindow } from './ui/MatrixWindow/MatrixWindow';
import { RectangleGradient } from './ui/RectangleGradient';
import { RectangleLine } from './ui/RectangleLine';
import { StepIndicator } from './ui/StepIndicator';
import { HeaderLoader } from './ui/Header/HeaderLoader';
import { StatusBlock } from './ui/StatusBlock/StatusBlock';
import { DECORATION_LINES, DECORATION_TEXT } from './constants/decoration';
import './styles/loader-animation.css';
const Loader = ({ userName }: { userName?: string }) => {
  return (
    <div className='w-full animate-loader-show flex flex-col justify-center h-dvh cyber-grid-container container-shadow fixed text-mint px-20 py-10 font-michroma'>
      {DECORATION_LINES.map((line, idx) => (
        <LineElement
          key={idx}
          className={line}
        />
      ))}
      {DECORATION_TEXT.map(({ className, text }, idx) => (
        <LoremText
          key={idx}
          style={{ animationDelay: idx * 0.2 + 0.5 + 's' }}
          className={className}
          text={text}
        />
      ))}
      <RectangleLine />
      <HeaderLoader userName={userName} />
      <CenterLoader />
      <StepIndicator />
      <FooterLoader />
      <StatusBlock />
      <CrossElement className='top-1/5 right-1/3' />
      <CrossElement className='bottom-1/5 left-1/6 rotate-180' />
      <RectangleGradient className='left-3/7 bottom-1/9 h-44 w-28 animate-visibility-show' />
      <RectangleGradient className='right-1/9 top-1/6 h-24 w-48 animate-visibility-show' />
      <MatrixWindow />
    </div>
  );
};
export default Loader;
