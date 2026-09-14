import { ChatList } from '@/entities/chats';
import { signOut } from '@/features';
import { ButtonMain } from '@/shared/ui';
import { useNavigate } from 'react-router';

const SidebarChat = () => {
  const navigate = useNavigate();
  return (
    <aside>
      <ButtonMain
        onClickHandler={() => signOut()}
        text='logout'
      ></ButtonMain>
      <ChatList></ChatList>
      <ButtonMain
        onClickHandler={() => navigate('/search')}
        text='Create new Chat'
      ></ButtonMain>
    </aside>
  );
};
export default SidebarChat;
