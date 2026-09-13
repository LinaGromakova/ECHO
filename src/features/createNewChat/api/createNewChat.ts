import { supabase } from "@/shared/lib";

const createNewChat = async (targetUserId: string) => {
  await supabase.rpc('start_personal_chat', {
    target_user_id: targetUserId,
  });
};
export default createNewChat;