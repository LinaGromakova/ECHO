import { SignOutButton } from '@/features';
import { ButtonMain } from '@/shared/ui';
import { useNavigate } from 'react-router';
import ChatList from './ChatList/ChatList';

const SidebarChat = () => {
  const navigate = useNavigate();
  return (
    <aside className='w-1/3'>
      <SignOutButton></SignOutButton>
      <ChatList></ChatList>
      <ButtonMain
        onClickHandler={() => navigate('/search')}
        text='Create new Chat'
      ></ButtonMain>
    </aside>
  );
};
export default SidebarChat;
