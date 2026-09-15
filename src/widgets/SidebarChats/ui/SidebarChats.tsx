import { ChatList } from '@/entities/chats';
import { SignOutButton } from '@/features';
import { ButtonMain } from '@/shared/ui';
import { useNavigate } from 'react-router';

const SidebarChat = () => {
  const navigate = useNavigate();
  return (
    <aside>
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
