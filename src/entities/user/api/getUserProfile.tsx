import { supabase } from '@/shared/lib';
import { type Session, AuthError } from '@supabase/supabase-js';
import type { User } from '@supabase/supabase-js';

interface authData {
  user: User | null;
  session: Session | null;
}
const getUserProfile = async (authData: authData, error: AuthError | null) => {
  if (error || !authData?.user) {
    return { data: null, error: error || new Error('Ошибка регистрации') };
  }
  const { data: profileData, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', authData.user.id)
    .single();

  return {
    data: {
      ...authData,
      profile: profileData,
    },
    error: profileError,
  };
};
export default getUserProfile;
