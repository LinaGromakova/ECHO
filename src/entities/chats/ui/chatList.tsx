import { useAtomValue, useSetAtom } from 'jotai';
import getChats from '../api';
import chatsAtom from '../model';
import { useEffect } from 'react';

const ChatList = () => {
  const setChats = useSetAtom(chatsAtom);
  const CHATS = useAtomValue(chatsAtom);
  useEffect(() => {
    const chats = async () => {
      const data = await getChats();
      return data;
    };
    setChats(chats);
  }, []);
  console.log(CHATS);
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
