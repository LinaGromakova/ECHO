import { TrapezoidList } from '../TrapezoidList/TrapezoidList';
import { trapezoidListHeader } from './constants/trapezoids';
import ArrowIcon from './assets/Arrow.svg?react';
import { LineElement } from '../LineElement';
import { useDecodeText } from '../../hooks/useDecodeText';

export const HeaderLoader = ({
  userName,
}: {
  userName: string | undefined;
}) => {
  const text = useDecodeText(`User: ${userName ?? 'UNKNOWN'}`);
  return (
    <header className='uppercase'>
      <div className='flex justify-between'>
        <div className='flex mb-5 items-center'>
          <h4 className='text-2xl tracking-wider text-shadow-mint/50 text-yellow animate-neon-hum-alt'>
            {text}
          </h4>
          <div className='text-lg animate-boot text-zinc-950 bg-yellow inline-block ml-7 p-1 max-h-6 shadow-xs shadow-yellow '>
            <p className='-mt-1.5 font-orbitron pl-3'>01</p>
          </div>
        </div>

        <div>
          <LineElement className='w-56 h-px bg-mint/70 animate-line-scale-x [animation-delay:0.5s]' />
          <ArrowIcon className='animate-translate-show fill-mint/50 -ml-2'></ArrowIcon>
        </div>
        <div className='flex'>
          <LineElement className='w-12 h-px bg-mint/50 mr-7 animate-line-scale-x [animation-delay:0.5s]' />
          <LineElement className='w-12 h-px bg-mint shadow-sm shadow-mint animate-line-scale-x [animation-delay:0.6s]' />
        </div>
        <div></div>
      </div>
      <TrapezoidList listElements={trapezoidListHeader} />
    </header>
  );
};
