import { CreateChatButton } from '@/features';
import type { TargetUserInterface } from '@/shared/types';

const SearchItem = ({ targetUser }: { targetUser: TargetUserInterface }) => {
  const firstLetter = targetUser.username.slice(0, 1);
  return (
    <div
      className='flex items-center justify-between py-4 border-b border-zinc-800'
      key={targetUser.id}
    >
      <div className='flex items-center'>
        <div className='w-7 h-7 rounded-full bg-zinc-700 overflow-hidden flex items-center justify-center text-xs font-bold'>
          {targetUser.userAvatar ? (
            <img
              src={targetUser.userAvatar}
              alt='Avatar URL'
            />
          ) : (
            <p>{firstLetter}</p>
          )}
        </div>
        <p className='ml-2'>{targetUser.username}</p>
      </div>
      <CreateChatButton targetUserId={targetUser.id}></CreateChatButton>
    </div>
  );
};
export default SearchItem;
