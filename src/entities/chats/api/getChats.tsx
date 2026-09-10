import { supabase } from '@/shared/lib';

const getChats = async () => {
  const { data, error } = await supabase.rpc('get_user_chats');
  console.log(data);
};

export default getChats;
