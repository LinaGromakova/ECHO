import { TrapezoidElement } from './TrapezoidElement';
import type { ListElemetsInterface } from '../../types/listElementsInterface';

interface TrapezoidListProps {
  listElements: ListElemetsInterface[];
}
export const TrapezoidList = ({ listElements }: TrapezoidListProps) => {
  return (
    <div className='flex mt-4 relative font-bold space-x-7'>
      {listElements.map(({ text, className }, idx: number) => (
        <TrapezoidElement
          key={idx}
          className={className}
          text={text}
        ></TrapezoidElement>
      ))}
    </div>
  );
};
