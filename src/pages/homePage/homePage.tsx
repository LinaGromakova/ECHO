import { ChatList } from '@/entities/chats';
import { signOut } from '@/features';
import FormNewChat from '@/features/createNewChat/ui/formNewChat';
import { ButtonMain } from '@/shared/ui';

const HomePage = () => {
  return (
    <>
      {/* <ChatList></ChatList> */}
      <ButtonMain
        onClickHandler={() => signOut()}
        text='logout'
      ></ButtonMain>
      {/* <FormNewChat></FormNewChat> */}
    </>
  );
};
export default HomePage;
