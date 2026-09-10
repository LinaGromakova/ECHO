import { supabase } from '@/shared/lib';
import type { TargetUserInterface } from '@/shared/types';
const fetchSearchUsers = async (
  searchString: string,
  abortControllerRef: React.RefObject<AbortController | null>,
  setUsers: React.Dispatch<React.SetStateAction<TargetUserInterface[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (abortControllerRef.current) {
    abortControllerRef.current.abort();
  }
  abortControllerRef.current = new AbortController();
  const { signal } = abortControllerRef.current;
  setLoading(true);
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, username, avatar_url')
      .ilike('username', `%${searchString}%`)
      .limit(10)
      .abortSignal(signal);
    if (data)
      setUsers(() =>
        data.map((item) => ({
          id: item.id,
          username: item.username,
          userAvatar: item.avatar_url,
        })),
      );
    if (error) console.error(error);
  } catch (err) {
    console.error('Ошибка поиска:', err);
  } finally {
    if (!signal.aborted) {
      setLoading(false);
    }
  }
};
export default fetchSearchUsers;
