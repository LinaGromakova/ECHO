import { supabase } from '@/shared/lib';

interface ChatInterface {
  chat_id: string;
  interlocutor_id: string;
  interlocutor_avatar: string | undefined | null;
  interlocutor_username: string;
  last_message_created_at: string;
  last_message_is_read: boolean;
  last_message_sender_id: string;
  last_message_text: string;
}
const getChats = async () => {
  const { data } = await supabase.rpc('get_user_chats');
  console.log(data);
  return data.map((chat: ChatInterface) => ({
    chatId: chat.chat_id,
    interlocutorId: chat.interlocutor_id,
    interlocutorAvatar: chat.interlocutor_avatar,
    interlocutorName: chat.interlocutor_username,
    lastMessageCreateAt: chat.last_message_created_at,
    lastMessageIsRead: chat.last_message_is_read,
    lastMessageSenderId: chat.last_message_sender_id,
    lastMessageText: chat.last_message_text,
  }));
};
export default getChats;
