import { supabase } from '@/shared/lib';

export default async function signUp() {
  const { data, error } = await supabase.auth.signUp({
    email: '',
    password: '',
    options: {
      data: {
        user_name: '',
      },
    },
  });
  return { data, error };
}
