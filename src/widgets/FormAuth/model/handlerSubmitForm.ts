import type { Session, AuthError } from '@supabase/supabase-js';
import type { AuthFormData } from '../ui/FormAuth.config';
import type { User } from '@supabase/supabase-js';
import type { UserProfile } from '@/entities/user/model/userAtom';

interface AuthResponse {
  data: {
    user: User | null;
    session: Session | null;
    profile: UserProfile | null;
  } | null;
  error: AuthError | Error | null;
}
const handlerSubmitForm = async (
  func: (data: AuthFormData) => Promise<AuthResponse>,
  data: AuthFormData,
  setUser: (user: UserProfile | null) => void,
  navigate: (to: string) => void,
): Promise<AuthError | Error | undefined> => {
  const response = await func(data);
  if (response.error || !response.data?.profile) {
    console.error('Ошибка авторизации:', response.error);
    return response.error || new Error('Профиль не найден');
  }
  const profile = response.data.profile;
  setUser(profile);
  navigate('/');
};

export default handlerSubmitForm;
