import CircleButton from '@/shared/ui/CircleButton';
import { SearchForm } from '@/widgets';
import { useNavigate } from 'react-router';

const SearchPage = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full h-dvh bg-zinc-950 fixed inset-0 flex justify-center items-center text-white'>
      <CircleButton
        handlerClick={() => navigate('/')}
        content='back'
      />
      <SearchForm></SearchForm>
    </div>
  );
};
export default SearchPage;
