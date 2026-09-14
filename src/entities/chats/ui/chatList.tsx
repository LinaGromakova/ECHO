import { useAtomValue, useSetAtom } from 'jotai';
import getChats from '../api';
import chatsAtom from '../model';
import { useEffect } from 'react';
import type { ChatInterface } from '@/shared/types';
import ChatItem from './ChatItem';

const ChatList = () => {
  const setChats = useSetAtom(chatsAtom);
  const CHATS = useAtomValue(chatsAtom);
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
    <div className='w-1/5 relative'>
      {CHATS.map((chat: ChatInterface) => {
        return (
          <ChatItem
            key={chat.chatId}
            chat={chat}
          ></ChatItem>
        );
      })}
    </div>
  );
};
export default ChatList;
