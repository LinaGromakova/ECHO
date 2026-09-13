import InputSearch from './inputSearch/InputSearch';
import { useState } from 'react';
import SearchList from './searchList.tsx/SearchList';
import { useUserSearch } from '@/features';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const { searchUsers, isLoading } = useUserSearch(searchValue);
  return (
    <div className='relative w-1/4 p-5 border border-white'>
      <InputSearch
        stateValue={searchValue}
        setStateValue={setSearchValue}
      ></InputSearch>
      <SearchList
        searchListUsers={searchUsers}
        isLoading={isLoading}
        searchValue={searchValue}
      ></SearchList>
    </div>
  );
};

export default SearchForm;
