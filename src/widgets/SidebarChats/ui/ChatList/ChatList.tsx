import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import type { ChatInterface } from '@/shared/types';
import { ChatItem, chatsAtom } from '@/entities/chats';
import getChats from '@/entities/chats/api';
import { useNavigate } from 'react-router';
import { targetUserAtom } from '@/entities/targetUser';

const ChatList = () => {
  const setChats = useSetAtom(chatsAtom);
  const setTargetUser = useSetAtom(targetUserAtom);
  const CHATS = useAtomValue(chatsAtom);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const data = await getChats();
        setChats(data);
      } catch (error) {
        console.error('Ошибка при загрузке чатов:', error);
      }
    };
    fetchChats();
  }, [setChats]);
  return (
    <div className='w-full relative'>
      {CHATS.map((chat: ChatInterface) => {
        return (
          <ChatItem
            key={chat.chatId}
            chat={chat}
            handlerClick={() => {
              if (chat) {
                navigate(`/chat/${chat.chatId}`);
                setTargetUser({
                  onlineStatus: false,
                  isTyping: false,
                  username: chat.interlocutorName,
                  userAvatar: chat.interlocutorAvatar ?? '',
                });
              }
            }}
          ></ChatItem>
        );
      })}
    </div>
  );
};
export default ChatList;
