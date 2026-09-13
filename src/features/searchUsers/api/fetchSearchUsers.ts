import { supabase } from '@/shared/lib';
import type { TargetUserInterface } from '@/shared/types';

const fetchSearchUsers = async (
  searchString: string,
  signal: AbortSignal,
  setSearchUsers: React.Dispatch<React.SetStateAction<TargetUserInterface[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('id, username, avatar_url')
      .ilike('username', `%${searchString}%`)
      .limit(10)
      .abortSignal(signal);
    if (error) {
      if (signal.aborted) return;
      throw error;
    }
    if (!data) {
      setIsLoading(false);
      setSearchUsers([]);
      return;
    }
    if (!signal.aborted) {
      setIsLoading(false);
      setSearchUsers(
        data.map((item) => ({
          id: item.id,
          username: item.username,
          userAvatar: item.avatar_url,
        })),
      );
    }
  } catch (error) {
    setIsLoading(false);
    console.error(error);
  } finally {
    if (!signal.aborted) {
      setIsLoading(false);
    }
  }
};

export default fetchSearchUsers;
