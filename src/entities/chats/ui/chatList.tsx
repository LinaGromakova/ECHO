import { useAtomValue, useSetAtom } from 'jotai';
import getChats from '../api';
import chatsAtom from '../model';
import { useEffect } from 'react';

const ChatList = () => {
  const setChats = useSetAtom(chatsAtom);
  const CHATS = useAtomValue(chatsAtom);
  const chats = getChats();
  console.log(chats);
  useEffect(() => {
    setChats(chats);
  }, [chats]);
  return (
    <div>
      hello
      {CHATS.map((chat) => {
        return <div>chats</div>;
      })}
    </div>
  );
};
export default ChatList;
