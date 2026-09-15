import { ChatBody, ChatFooter, ChatHeader, SidebarChat } from '@/widgets';

const HomePage = () => {
  return (
    <div className='flex'>
      <SidebarChat></SidebarChat>
      <div className='w-full bg-green-500'>
        <ChatHeader></ChatHeader>
        <ChatBody></ChatBody>
        <ChatFooter></ChatFooter>
      </div>
    </div>
  );
};
export default HomePage;
