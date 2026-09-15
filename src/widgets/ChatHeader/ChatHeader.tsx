import { targetUserAtom } from '@/entities/targetUser';
import { useAtomValue } from 'jotai';

const ChatHeader = () => {
  const targetUser = useAtomValue(targetUserAtom);
  console.log(targetUser);
  if (!targetUser) {
    return <div>loading</div>;
  }
  return (
    <header className='flex px-4 py-2 bg-red-500/40'>
      <div className='w-10 h-10 rounded-full bg-black/50'>
        <img
          src={targetUser.userAvatar}
          alt=''
        />
      </div>
      <div>
        {targetUser.username}
        <div>
          {(targetUser.isTyping && 'печатает...') || targetUser.onlineStatus
            ? 'online'
            : 'offline'}
        </div>
      </div>
    </header>
  );
};
export default ChatHeader;
