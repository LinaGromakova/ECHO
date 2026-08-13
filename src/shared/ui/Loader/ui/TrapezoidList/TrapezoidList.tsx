import { TrapezoidElement } from './TrapezoidElement';
import type { ListElemetsInterface } from '../../types/listElementsInterface';

interface TrapezoidListProps {
  listElements: ListElemetsInterface[];
}
export const TrapezoidList = ({ listElements }: TrapezoidListProps) => {
  return (
    <div className='flex mt-4 relative font-bold space-x-7'>
      {listElements.map(({ text, className }, idx: number) => {
        const delay = idx / 2 + 0.2 + 's';
        return (
          <TrapezoidElement
            key={idx}
            style={{ animationDelay: delay }}
            className={className}
            text={text}
          ></TrapezoidElement>
        );
      })}
    </div>
  );
};
