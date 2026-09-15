import type { ChatInterface } from '@/shared/types';

const ChatItem = ({
  chat,
  handlerClick,
}: {
  chat: ChatInterface;
  handlerClick: () => void;
}) => {
  return (
    <div
      className='p-5 w-full h-12 flex bg-amber-300 items-center cursor-pointer justify-between'
      key={chat.chatId}
      onClick={() => handlerClick()}
    >
      <div className='flex'>
        <div className='w-10 h-10 rounded-full bg-black mr-4'>
          <img
            src={chat?.interlocutorAvatar ?? ''}
            alt=''
          />
        </div>
        <div className='flex'>
          {chat.interlocutorName}
          <div>{chat.lastMessageText}</div>
        </div>
      </div>
      <div>
        <div>{chat.lastMessageIsRead}</div>
        <div>{chat.lastMessageCreateAt}</div>
      </div>
    </div>
  );
};
export default ChatItem;
