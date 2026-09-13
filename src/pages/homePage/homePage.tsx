import { ChatList } from '@/entities/chats';
import { signOut } from '@/features';
import { ButtonMain } from '@/shared/ui';
import { useNavigate } from 'react-router';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ButtonMain
        onClickHandler={() => signOut()}
        text='logout'
      ></ButtonMain>
      <ChatList></ChatList>
      <ButtonMain
        onClickHandler={() => navigate('/search')}
        text='Create new Chat'
      ></ButtonMain>
    </div>
  );
};
export default HomePage;
