import { supabase } from '@/shared/lib';

export default async function signIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: '',
    password: '',
  });

  return { data, error };
}
