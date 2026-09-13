import { supabase } from '@/shared/lib';

const getChats = async () => {
  const { data, error } = await supabase.rpc('get_user_chats');
  return data;
};

export default getChats;
