import type { TargetUserInterface } from '@/shared/types';
import SearchItem from './SearchItem';

interface SearchListInterface {
  searchListUsers: TargetUserInterface[];
  isLoading: boolean;
  searchValue: string;
}
const SearchList = ({
  searchListUsers,
  isLoading,
  searchValue,
}: SearchListInterface) => {
  return (
    <>
      {isLoading && (
        <p className='text-xs text-yellow-500 mt-1'>Поиск на сервере...</p>
      )}
      <div className='mt-4'>
        {searchListUsers.map((targetUser) => (
          <SearchItem targetUser={targetUser}></SearchItem>
        ))}
        {searchValue && !isLoading && searchListUsers.length === 0 && (
          <p className='text-zinc-500 text-sm mt-3'>Пользователь не найден</p>
        )}
      </div>
    </>
  );
};
export default SearchList;
