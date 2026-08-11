import { TrapezoidElement } from './TrapezoidElement';

interface ListElemetsInterface {
  className: string;
  text?: string;
}
interface TrapezoidListProps {
  listElements: ListElemetsInterface[];
}
export const TrapezoidList = ({ listElements }: TrapezoidListProps) => {
  return (
    <div className='flex mt-4 relative font-bold space-x-7'>
      {listElements.map((el: ListElemetsInterface, idx: number) => {
        const { text, className } = el;
        return (
          <TrapezoidElement
            key={idx}
            className={className}
            text={text}
          ></TrapezoidElement>
        );
      })}
    </div>
  );
};
